/**
 * gradient-shader.js — WebGL gradient mesh background
 * Simplex noise field in violet-ember palette.
 * Responds to scroll position and cursor.
 * Single draw call — extremely performant.
 */

import { animationLoop, observeVisibility } from './animation-loop.js';

const VERTEX_SHADER = `
  attribute vec2 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;

  // Simplex 2D noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289((x * 34.0 + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    float aspect = uResolution.x / uResolution.y;
    vec2 st = vec2(uv.x * aspect, uv.y);

    float t = uTime * 0.08;
    float scroll = uScroll * 0.0005;

    // Layer 1: Large scale noise (background wash)
    float n1 = snoise(st * 1.2 + vec2(t * 0.3, scroll));

    // Layer 2: Medium detail
    float n2 = snoise(st * 2.5 + vec2(t * 0.5 + 100.0, scroll * 0.5));

    // Layer 3: Fine detail
    float n3 = snoise(st * 4.0 + vec2(t * 0.7 + 200.0, -scroll * 0.3));

    float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    // Mouse influence (subtle distortion)
    vec2 mouseUV = uMouse / uResolution;
    float mouseDist = distance(uv, mouseUV);
    float mouseInfluence = smoothstep(0.3, 0.0, mouseDist) * 0.15;
    noise += mouseInfluence;

    // Color mapping: deep dark → violet → ember
    vec3 colorDeep = vec3(0.04, 0.04, 0.06);   // #0a0a0f
    vec3 colorViolet = vec3(0.486, 0.227, 0.929); // #7c3aed
    vec3 colorEmber = vec3(0.976, 0.451, 0.086);   // #f97316

    // Map noise to colors
    float remapped = noise * 0.5 + 0.5; // 0-1 range
    vec3 color;
    if (remapped < 0.5) {
      color = mix(colorDeep, colorViolet, remapped * 2.0);
    } else {
      color = mix(colorViolet, colorEmber, (remapped - 0.5) * 2.0);
    }

    // Keep it subtle — mostly dark with hints of color
    color = mix(colorDeep, color, 0.25 + mouseInfluence);

    // Vignette
    float vignette = 1.0 - smoothstep(0.3, 1.2, length(uv - 0.5));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function initGradientShader(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'shader-canvas';
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:-2;';
  canvas.setAttribute('aria-hidden', 'true');
  container.insertBefore(canvas, container.firstChild);

  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });
  if (!gl) {
    // Fallback: CSS animated gradient
    container.style.background = 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)';
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;
  let startTime = performance.now();

  // Compile shaders
  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.warn('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('Program link error');
    return;
  }

  gl.useProgram(program);

  // Full-screen quad
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(program, 'aPosition');
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

  // Uniforms
  const uResolution = gl.getUniformLocation(program, 'uResolution');
  const uTime = gl.getUniformLocation(program, 'uTime');
  const uMouse = gl.getUniformLocation(program, 'uMouse');
  const uScroll = gl.getUniformLocation(program, 'uScroll');

  // Events
  document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) * dpr;
    mouseY = (rect.height - (e.clientY - rect.top)) * dpr; // flip Y for GL
  });

  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  }, { passive: true });

  // Resize
  function resize() {
    const rect = container.getBoundingClientRect();
    width = rect.width * dpr;
    height = rect.height * dpr;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, width, height);
  }

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(container);

  // Register with animation loop
  animationLoop.register('gradientShader', {
    update() {
      const time = (performance.now() - startTime) / 1000;
      gl.uniform2f(uResolution, width, height);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouseX, mouseY);
      gl.uniform1f(uScroll, scrollY);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    },
  });

  // Auto-pause off-screen
  observeVisibility(container, 'gradientShader');
}
