import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { existsSync, readFileSync } from 'fs';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        '404': resolve(__dirname, 'src/404.html'),
        'google-foobar': resolve(__dirname, 'src/google-foobar/index.html'),
        'interview-exp': resolve(__dirname, 'src/interview-exp/index.html'),
        'interview-preps': resolve(__dirname, 'src/interview-preps/index.html'),
      },
    },
  },
  server: {
    open: true,
  },
  appType: 'mpa',
  plugins: [
    {
      name: 'serve-public-and-404',
      configureServer(server) {
        const publicDir = resolve(__dirname, 'public');
        const srcDir = resolve(__dirname, 'src');

        // This runs BEFORE Vite's built-in static file serving
        server.middlewares.use((req, res, next) => {
          const url = req.url?.split('?')[0];

          // Serve index.html for directory URLs from publicDir (e.g. /httpbin/)
          if (url && url.endsWith('/')) {
            const indexPath = join(publicDir, url, 'index.html');
            if (existsSync(indexPath)) {
              res.setHeader('Content-Type', 'text/html');
              res.end(readFileSync(indexPath, 'utf-8'));
              return;
            }
          }

          next();
        });

        // This runs AFTER Vite's built-in middleware (catch-all 404)
        return () => {
          server.middlewares.use((req, res, next) => {
            // Skip if response already sent by Vite
            if (res.headersSent || res.writableEnded) return;

            const url = req.url?.split('?')[0] || '';
            // Skip static assets and Vite internals
            if (url.startsWith('/@') || url.startsWith('/node_modules') ||
                url.match(/\.\w+$/) || url === '/' || url === '') {
              return next();
            }

            // Serve 404 page for unmatched routes
            const notFoundPath = join(srcDir, '404.html');
            if (existsSync(notFoundPath)) {
              res.statusCode = 404;
              res.setHeader('Content-Type', 'text/html');
              server.transformIndexHtml(req.url, readFileSync(notFoundPath, 'utf-8')).then((html) => {
                res.end(html);
              }).catch(() => {
                res.end(readFileSync(notFoundPath, 'utf-8'));
              });
              return;
            }
            next();
          });
        };
      },
    },
  ],
});
