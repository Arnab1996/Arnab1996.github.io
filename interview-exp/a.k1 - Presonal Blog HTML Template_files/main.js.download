(function ($) {
    "use strict";

    var lastScrollTop = 0;

    function hasScrolled() {
        if($(document).scrollTop() > 60 && !$("#header").hasClass("header--scrolled")){
            $("#header").addClass("header--scrolled");
        }
        else if($(document).scrollTop() <= 60 && $("#header").hasClass("header--scrolled")){
            $("#header").removeClass("header--scrolled");
        }
    }

    function emailValidation(email_address) {
        var pattern = new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        return pattern.test(email_address);
    }

    function contactForm() {
        var contact_form = $('#contact-form');

        contact_form.on('submit', function (e) {

            var input = $(this).find('input, textarea');
            var required_fields = $(this).find('.required');
            var email_field = $('.field--email');
            var contact_name_val = $('.field--name').val();
            var contact_email_val = email_field.val();
            var contact_message_val = $('.field--message').val();
            var contact_notice = $('.form--notice');

            e.preventDefault();

            if (contact_name_val == '' || contact_email_val == '' || contact_message_val == '') {
                contact_notice.stop(true).hide().html(contact_input_error).fadeIn();
                required_fields.each(function () {
                    $(this).addClass("input-error");
                });

            } else if (!emailValidation(contact_email_val)) {
                contact_notice.stop(true).hide().html(contact_email_error).fadeIn();
                email_field.addClass("input-error");
                $('#email').focus();
            }
            else {
                $.ajax({
                    type: 'POST',
                    url: 'php/contact.php',
                    data: {
                        name: contact_name_val,
                        email: contact_email_val,
                        message: contact_message_val,
                        emailAddress: contact_email
                    },
                    success: function () {
                        contact_notice.stop(true).hide().html(contact_success).fadeIn();
                        contact_form[0].reset();
                        input.blur();
                    }
                });
            }
            return false;

        });
    }

    $(window).scroll(function(event){
        hasScrolled();
    });

    $( document ).ready(function() {
        hasScrolled();
        contactForm();

        // menu humburger
        $("#menu-burger").on("change", function() {
            if(this.checked) {
                $("body").addClass("fixed");
                $("html").css("overflow", "hidden");
            }
            else{
                $("body").removeClass("fixed");
                $("html").css("overflow", "auto");
            }
        });
        $("#header .header__nav-link").on("click", function(){
            $("#menu-burger").prop("checked", false);
            $("body").removeClass("fixed");
            $("html").css("overflow", "auto");
        });

        // slider
        $('#articleSlider').length ? $('#articleSlider').slick({
            dots: true,
            infinite: true,
            speed: 400,
            cssEase: 'linear'
        }) : null;

        // parallax
        if($(".parallax").length > 0){
            $.stellar()
        }

    });

})(jQuery);
