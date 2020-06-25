// JavaScript Document


var autorunTimer;

var currentName = '1'; // for Analytics

var howl,
    audioOn = true,
    audioIDs = [],
    audioPlaying = false,
    audioPlayingString,
    audioHoverTimeout = false,
    audioPlayTimeout = false,
    audioStopTimeout = false,
    audioMaxLength = 25 * 10 * 1000,
    audioMaxVolume = 1,
    audioFadeIn = 3000,
    audioFadeOut = 300;

var autorunIntervalShort = 6500, // when sound off
    autorunIntervalLong = 15000, // when sound on
    autorunMax = 8,
    autorunCurrent = autorunMax; // the autoplay happens backwards

var	progressBarInterval = false, 
	progressBarTime = false;


//activateHover( $('.records--1 .record--3') ); // test


/* 
 * Hover In/Out
*/
$( '.record' ).hover(
	function() {
		// HOVER IN
		
		if ( ! $(this).parents('.records').hasClass('records--no-hover-trigger') && 
		   	 ! $('body').hasClass('autorun')
		   ) {
			// Activate hover UNLESS the center is showing or autorun not running 
			
			activateHover(this);
		}
		if ( $(this).parents('.records').hasClass('records--no-hover-trigger') &&
			 $(this).hasClass('hovered') && ! $(this).hasClass('active') ) {
			
			// If center is showing activate hover (and cancel center) if an OUTSIDE circle is hovered
			
			deactivateHover();
			$('.records--active').removeClass('records--show-center');	// close center	
			$('.records--active').removeClass('records--no-hover-trigger'); // cancel hover stop
			activateHover(this);	
		}
	}, function() {
		// HOVER OUT
		
		if ( ! $(this).parents('.records').hasClass('records--no-hover-trigger') && 
		   	 ! $('body').hasClass('autorun')) {
			
			deactivateHover();
		}
	}
);


/* 
 * Activate Hover 
*/
function activateHover(element) {

	$('.records--active.records').addClass('records--hovered');

	$( element )
		.addClass('active')
		.addClass('hovered');

	
	// artist & album
	var artist = $( element ).children('.record__artist').text();
	$('.artist').html(artist);
	var album = $( element ).children('.record__album').text();	
	$('.album').html(album);

	// numbers
	var meta_color = $( element ).attr('data-meta-color');
	var num = $( element ).children('.record__number').text();
	
	// font-size for number
	var num_fz = 13 - num;

	$('.number')
		.html(num)
		.css( 'font-size', num_fz + 'em' )
		.css( 'color', meta_color )
	;
	
	// Meta color
	$('.meta').css( 'color', meta_color );


	$('.records--active .record').not('.active').addClass('stop'); // stop animation for all but the active one

	$('.records--active .hovered ~ .record').addClass('hovered'); // triggered the hovered state for all following siblings	
    
    // background color
	var bg_color = $( element ).attr('data-bg-color');
	$('body').css('background-color', bg_color);

    // audio
    if (audioOn) {
        
        audioHoverTimeout = setTimeout(function(){ 

            clearTimeout(audioStopTimeout); // clear any timers

            // Get audio info for current selection
            var audioName = $( element ).attr('data-audio'); 
            var audioSrc = [
                 //'audio/' + audioName + '.webm',
                 'audio/' + audioName + '.mp3'
            ]; 

            // Setup Howl object 
            howl = new Howl({
                src: audioSrc,
                html5: true,
            });

            // Play and fade in
            audioIDs[audioName] = howl.play();
            howl.fade(0, audioMaxVolume, audioFadeIn, audioIDs[audioName]);

            // Save what's playing in variable
            audioPlaying = audioIDs[audioName];

            audioPlayingString = audioName; // For analytics
            
            // Play audio clip until a set max length
            audioPlayTimeout = setTimeout(function(){ 
                howl.fade(audioMaxVolume, 0, 2000, audioPlaying);
                
                // // Google analytics	  
                // gtag('event', 'audio-completed', {
                //     'event_category' : 'audio',
                //     'event_action' : 'audio-completed',
                //     'event_label' : audioPlayingString,
                // });
                         
                audioPlaying = false;
            }, audioMaxLength);
            
            // Progress bar
            progressBar('start');            
            
        }, 300); // this delay disregards really short hovers 

        
    }
}

/* 
 * Deactivatee Hover 
*/
function deactivateHover() {
	$( '.records--hovered' ).removeClass('records--hovered'); 
	$( '.active' ).removeClass('active'); 
	$( '.hovered' ).removeClass('hovered'); 
	$( '.stop' ).removeClass('stop'); 	
	$( 'body' ).css('background-color', '');	
    
    // audio
    clearTimeout(audioPlayTimeout); // clear any timers
    clearTimeout(audioHoverTimeout);

    if (howl && audioPlaying) {
        // Fade current audio out
        howl.fade((audioMaxVolume/3), 0, audioFadeOut, audioPlaying);

        // after fade out, stop audio
        audioStopTimeout = setTimeout(function(){ 
        
            howl.stop();

            audioPlaying = false;
            progressBar('stop'); 

        }, audioFadeOut);

    }
}



/* 
 * Audio On/Off
*/
$('.audio-trigger').click(function(e) {
	
	e.stopPropagation();
	
    if ( $(this).hasClass('option--off') ) {
        $(this)
            .removeClass('option--off')
            .addClass('option--on');
        audioOn = true;
    } else {
        $(this)
            .removeClass('option--on')
            .addClass('option--off');
        
        if (howl) {
            howl.stop();
        }
        audioOn = false;
        audioPlaying = false;
    }
    
    
    var audioState = audioOn ? 'on' : 'off';
    
    // Google analytics	  
    // gtag('event', 'audio-button', {
    //     'event_category' : 'audio',
    //     'event_action' : 'audio-button-click',
    //     'event_label' : audioState,
    // });
});


/* 
 * Autorun trigger
*/
$('.autorun-trigger').click(function(e) {
	
	e.stopPropagation();
	
    var autorunState; // for Analytics
    
    if ( $(this).hasClass('option--off') ) {
        $(this)
            .removeClass('option--off')
            .addClass('option--on');
        autorunState = 'on';
    } else {
        $(this)
            .removeClass('option--on')
            .addClass('option--off');
        autorunState = 'off';
    }
    
	if ( $('body').hasClass('autorun') ) {
		
		cancel_autorun();

	} else {
		
		// Start autorun
		autorun();	
		$('.records--active').removeClass('records--no-hover-trigger'); // in case it's there
		$('body').addClass('autorun');
		
	}
    
    // Google analytics  
    // gtag('event', 'autoplay-button', {
    //     'event_category' : 'autoplay',
    //     'event_action' : 'autoplay-button-click',
    //     'event_label' : autorunState,
    // });
    
});

/* 
 * Autorun function
*/
function autorun() {

	var e = $('.records--active  .record--' + autorunCurrent);

	deactivateHover();
	$('.records--active').removeClass('records--show-center');	// close center	(in case it's showing)

	setTimeout(function(){activateHover(e);}, 200); // A short delay makes for a better animation
	
	autorunCurrent--;
    
	var autorunInterval;
    
    if (audioOn) {
        autorunInterval = autorunIntervalLong;
    } else {
        autorunInterval = autorunIntervalShort;        
    }
    
	if (! autorunCurrent < 1 ) {

		autorunTimer = setTimeout(function(){ 
			autorun();
		}, autorunInterval);

	} else {
		// Autorun is over
		autorunTimer = setTimeout(function(){ 
			cancel_autorun();
		}, autorunInterval);

        // Google analytics  
        // gtag('event', 'autoplay-over', {
        //     'event_category' : 'autoplay',
        //     'event_action' : 'autoplay-completed',
        //     'event_label' : 'name ' + currentName,
        // });
        
	}
	
}

/* 
 * Cancel Autorun
*/
function cancel_autorun() {
	deactivateHover();
	clearTimeout(autorunTimer);
	autorunCurrent = autorunMax;
	$('body').removeClass('autorun');
    $('.autorun-trigger')
        .removeClass('option--on')
        .addClass('option--off');
}

/* 
 * Name toggles 
*/
$('.js-name').click(function(e) {
	e.stopPropagation();

    cancel_autorun(); // just in case it's running
    
	if ( ! $(this).hasClass('is--active') ) {
		$('.js-name').toggleClass('is--active');
		$('.records').toggleClass('records--active');
		$('.records').toggleClass('records--inactive');
	}
    
    // Let the body know
    if ( $('.records--1').hasClass('records--active') ) {
        $('body').addClass('record-active--1');
        $('body').removeClass('record-active--2');
        currentName = '1';
    }
    if ( $('.records--2').hasClass('records--active') ) {
        $('body').addClass('record-active--2');
        $('body').removeClass('record-active--1');
        currentName = '2';
    }
    
    // Google analytics  
    // gtag('event', 'name-button', {
    //     'event_category' : 'names',
    //     'event_action' : 'name-toggle-click',
    //     'event_label' : 'name ' + currentName,
    // });

});

/* 
 * Layout icon toggles 
*/

$('.layout-icon').click(function(e) {
	e.stopPropagation();

    cancel_autorun(); // just in case it's running

    var currentLayout; // For analytics
    
    if ( ! $(this).hasClass('is--active') ) {
        $('.layout-icon').toggleClass('is--active');
    }
    // Let the body know
    if ( $('.layout-icon--nested').hasClass('is--active') ) {
        $('body').addClass('records--nested');
        $('body').removeClass('records--stacked');
        
        currentLayout = 'nested';
    }
    if ( $('.layout-icon--stacked').hasClass('is--active') ) {
        $('body').addClass('records--stacked');
        $('body').removeClass('records--nested');
        
        currentLayout = 'stacked';
    }

    // Google analytics  
    // gtag('event', 'layout-button', {
    //     'event_category' : 'layout',
    //     'event_action' : 'layout-toggle-click',
    //     'event_label' : currentLayout,
    // });

});


/* 
 * Click on a record 
*/
$('.record').click(function(e) {	
	e.stopPropagation();

	if ( $('.records--active').hasClass('records--no-hover-trigger') && $(this).hasClass('hovered') ) {
		
		// if an OUTSIDE ring is clicked...activate that one
		
		cancel_autorun(); // In case an autorun is running, abort
		deactivateHover();
		activateHover($(this));

	} else {
		
		// Show Center
		
		$(this).parents('.records').addClass('records--show-center');
		$(this).parents('.records').addClass('records--no-hover-trigger');
		
		// Set correct links
		var youtube = $(this).children('.youtube').attr('href');
		var spotify = $(this).children('.spotify').attr('href');
		
		$('.records--active  .js-youtube').attr('href', youtube);
		$('.records--active  .js-spotify').attr('href', spotify);
		
		if ( $('body').hasClass('autorun') ) {
			// Pause autorun (if  running)
			clearTimeout(autorunTimer);
			$('body').removeClass('autorun');
		}
        
        var recordName = $(this).find('.record__artist').html(); 
        
        // Google analytics  
        // gtag('event', 'record-click', {
        //     'event_category' : 'record',
        //     'event_action' : 'record-click',
        //     'event_label' : 'name ' + currentName + ': ' + recordName,
        // });

    }
});

/* 
 * Click on background 
*/
$('html').click(function() {
	$('.records--active').removeClass('records--show-center');	// close center	
	$('.records--active').removeClass('records--no-hover-trigger'); // cancel hover stop
	deactivateHover();
	cancel_autorun(); // In case an autorun is running, abort
});

/* 
 * Hover away from records (in case record one has "play music" showing) 
*/
$('.records-wrapper').mouseleave(function() {
	if (! $('body').hasClass('autorun')) {
		$('.records--active').removeClass('records--show-center');	// close center	
		$('.records--active').removeClass('records--no-hover-trigger'); // cancel hover stop
		deactivateHover();
	}
});

/* 
 * Center point
*/
$('.center').click(function(e) {	
	e.stopPropagation();
});


/* 
 * Progress bar function
*/
function progressBar(e) {
		
    switch (e) {

        // Start
        case 'start':
            progressBar('reset');
            progressBarInterval = setInterval( function() { 
                progressBar('update'); 
            }, 1000);

        break;

        // Stop
        case 'stop':
            clearInterval(progressBarInterval);
            $('.progress').css( 'top', '100%' );		
        break;
            
        // Reset
        case 'reset':
            clearInterval(progressBarInterval);
            progressBarTime = new Date();
            progressBar('update');
        break;

        // Get Time (in milliseconds)
        case 'get':
            var d = new Date();
            var now = d.getTime();
            var then = progressBarTime.getTime();
            var diff = now - then;		
            return diff;
        break;

        // Update	
        case 'update':
            var time = progressBar('get');
            var maxTime;
            
            if ( $('body').hasClass('autorun') ) {
                maxTime = autorunIntervalLong; // autorun is on 
            } else {
                maxTime = audioMaxLength; // autorun is off
            }
            var progress = 100 - (time / maxTime*100) - 5; // -5 to compensate for inaccuracy
            if (progress < 0) {
                progress = 0;
            }
            $('.progress').css( 'top', progress + '%' );		
        break;

    }	
}	
