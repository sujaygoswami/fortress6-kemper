// svg
$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$(window).on('beforeunload', function(){
    //$(window).scrollTop(0);
});

jQuery(document).ready(function(){
    $(this).scrollTop(0);

    jQuery('.service-nav-block .dropdown').hover(function(){
        jQuery(this).find('.dropdown-menu').show();
    }, function() {
        jQuery(this).find('.dropdown-menu').hide();
    });




    function isAppleDevice(){
        return (
            (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
        );
    }
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    var appStoreURL = "";
    if(isAndroid > -1){
        jQuery('body').addClass('android-device');
        jQuery('html').addClass('android-device');
    }
    else if( isAppleDevice() ){
        jQuery('body').addClass('ios-device');
        jQuery('html').addClass('ios-device');

        // jQuery( window ).on( "orientationchange", function( event ) {
        //   location.reload();
        // });


    }





//Check Mobile Devices
    var checkMobile = function(){

        //Check Device
        var isTouch = ('ontouchstart' in document.documentElement);

        //Check Device //All Touch Devices
        if ( isTouch ) {

            jQuery('body').addClass('touch');



        }
        else {

            jQuery('body').addClass('no-touch');

        };

    };

//Execute Check
    checkMobile();


//news-block-module
    jQuery('.news-block-module .news-featured-img').addClass('set-back');

// date time picker

    jQuery('.date-input').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: false,
        changeYear: false
    });


// site data table
    jQuery('.site-data-table.sorting-table').dataTable( {
        "order": [],
        iDisplayLength: -1
        // Your other options here...
    } );

// menu item odd even
    jQuery('.main-nav-sub-item').each(function() {
        var MENUBLOCKCOUNT = jQuery(this).find('.my-col').length;
        if (MENUBLOCKCOUNT % 2 === 0) {
            jQuery(this).addClass('menu-item-count-even')
        }else{
            jQuery(this).addClass('menu-item-count-odd')
        }
    });


// main nav function
    if(jQuery(window).width() > 1099) {

        jQuery('.sub-item-indication, .main-nav-sub-item').addClass('animated');

        jQuery('.main-nav-block .has-sub-item').hover(function(){
                jQuery(this).removeClass('sub-item-closed');
                jQuery(this).addClass('sub-item-parent-hoverd');
                jQuery(this).find('.sub-item-indication, .main-nav-sub-item').show();
                jQuery(this).find('.sub-item-indication, .main-nav-sub-item').addClass('fadeInRight');
                jQuery(this).find('.sub-item-indication, .main-nav-sub-item').removeClass('fadeOutRight');
            }, function() {
                jQuery(this).removeClass('sub-item-parent-hoverd');
                jQuery(this).find('.sub-item-indication, .main-nav-sub-item').removeClass('fadeInRight');
                jQuery(this).find('.sub-item-indication, .main-nav-sub-item').addClass('fadeOutRight');
                var $this = jQuery(this);
                setTimeout(function(){
                    $this.find('.sub-item-indication, .main-nav-sub-item').hide();
                }, 50);
            }
        );
    }





// flex slider
    jQuery('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            jQuery('body').removeClass('loading');
        }

    });


// default-content-slider
    jQuery('.default-content-slider').parent('.element').addClass('mobile-cover-element-for-dflt-slider');
    jQuery('.two-column-grid-mudule').find('.element').removeClass('mobile-cover-element-for-dflt-slider');
    jQuery('.default-content-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        items: 1,
        dots: true,
        mouseDrag: true,
        touchDrag: true
    })




// block-slider
    jQuery('.block-slider-three-blocks').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items: 1,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        responsive : {

            // breakpoint from 991 up
            991 : {
                items: 3
            }
        }
    })

// product list slider
    jQuery('.product-list-slider').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        items: 1,
        dots: true,
        mouseDrag: true,
        touchDrag: true
    })

    jQuery('.default-content-slider').each(function(){
        var DFLTCONTENTSLDRITEMCOUNT = jQuery(this).find('.item').length;

        if(DFLTCONTENTSLDRITEMCOUNT <= 1){
            jQuery(this).addClass('single-item');
        }

    });



// accordion

// jQuery('.accordion-panel-wrap').each(function(){
// jQuery(this).find('.accordion-container:first-child .panel-collapse').addClass('in');
// });

    jQuery('.panel-group .panel-collapse.in').prev().addClass('active');
    jQuery('.panel-group')
        .on('show.bs.collapse', function(e) {
            jQuery(e.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(e) {
            jQuery(e.target).prev('.panel-heading').removeClass('active');
        });


    var AccordionCount = 1;
    jQuery('.panel-group').each(function() {
        jQuery(this).attr('id', 'accordion' + AccordionCount);
        AccordionCount++;
    });

    var CollapsePanel = 1;
    jQuery('.panel-collapse').each(function() {
        jQuery(this).attr('id', 'collapse' + CollapsePanel);
        CollapsePanel++;
    });


    jQuery('.accordion-container').each(function(){
        var COLLAPSEID = jQuery(this).find('.panel-collapse').attr('id');
        jQuery(this).find('.panel-heading').attr('data-target', '#'+COLLAPSEID);
    });

    jQuery('.panel-group').each(function(){
        var PANELGROUPID = jQuery(this).attr('id');
        jQuery(this).find('.panel-heading').attr('data-parent', '#'+PANELGROUPID);
    });





// object notation
    var site = {}


    site.absolutebottomelement = function() {

        jQuery('.absolute-bottom-element').each(function(){
            var ABSLOTELEMHT = jQuery(this).height();
            jQuery(this).parent().css('padding-bottom', ABSLOTELEMHT);
        });

    };







    site.absolutebottomelement();



    jQuery(window).resize(function(){

        site.absolutebottomelement();


    });



    jQuery( window ).on( "orientationchange", function( event ) {



    });




// page banner type one








// set back

    jQuery('.set-back').each(function(){

        var SETBACK = jQuery(this).find('img').attr('src');
        jQuery(this).css('background-image', 'url(' + SETBACK + ')');

    });



    jQuery('.touch .has-submenu > a').addClass('dual-click');

    jQuery(document).on( "click", ".dual-click", function(event) {

        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


// go top
    jQuery('.go-top').click(function(){
        jQuery('html, body').animate({scrollTop: 0}, 400);

    });


// pill menu

    jQuery('.pill-menu li').hover(function(){
            jQuery(this).addClass('hovered').show();
        }, function() {
            jQuery(this).removeClass('hovered').show();
        }
    );



//special-numeric-list-item
    jQuery('.special-numeric-list-item').each(function(){

        jQuery(this).find('li').wrapInner('<span></span>');
        jQuery(this).find('li').prepend('<i></i>');

    });

    jQuery('.special-numeric-list-item li').each(function(){

        var SPECIALNUMIRICLISTCOUNT = jQuery(this).index();
        jQuery(this).find('i').html(SPECIALNUMIRICLISTCOUNT + 1);

    });

// responsive footer
    if(jQuery(window).width() < 992) {
        jQuery('.footer-block-head').click(function(){
            jQuery(this).parent().find('.footer-content').slideToggle();
            jQuery(this).toggleClass('open');
        });
    }

// power mail

    jQuery('.tx-powermail').addClass('element element-gap-normal clearfix site-form-module');
    jQuery('.tx-powermail .container-fluid').addClass('background-content-module clearfix').removeClass('container-fluid');
    jQuery('.powermail_form.layout1').addClass('background-content-holder clearfix has-bg has-bg-dark');
    jQuery('.powermail_form.layout1 > h3, .powermail_form.layout1 .powermail_legend').hide();
    jQuery('.powermail_form.layout1').wrapInner('');
    jQuery('.powermail_form.layout1 .powermail_fieldset.layout1').addClass('col-md-6 my-col equal-block');
    jQuery('.powermail_form.layout1 .powermail_fieldwrap_type_html').addClass('entry clearfix element element-gap-normal');
    jQuery('.powermail_form.layout1 label').addClass('site-form-label');
    jQuery('.powermail_form.layout1 .powermail_fieldwrap').addClass('site-form-block clearfix');
    jQuery('.powermail_form.layout1 .powermail_fieldwrap.layout1').addClass('col-2 col').removeClass('clearfix');
    jQuery('.powermail_form.layout1 .powermail_select').parent().addClass('site-form-field select-field');
    jQuery('.powermail_form.layout1 .powermail_input').addClass('site-form-input').parent().addClass('site-form-field');
    jQuery('.powermail_form.layout1 .powermail_fieldwrap_type_text .powermail_field').addClass('form-info');
    jQuery('.powermail_form.layout1 .powermail_submit').addClass('site-form-button page-button primary-color-button button-width-type-two');
    jQuery('.powermail_fieldwrap').addClass('clearfix');
    jQuery('.powermail_field .checkbox .site-form-label').wrapInner('<div class="form-check-radio-block power-mail-custom-check"></div>');
    jQuery('.powermail_checkbox').wrap('<div class="check-radio-item"></div>');
    jQuery('.power-mail-custom-check .check-radio-item').append('<div class="clone-check"></div>');

    jQuery('.power-mail-custom-check .check-radio-item').each(function () {
        jQuery(this.nextSibling).wrap('<div class="check-radio-label"></div>');
    });

    jQuery('.powermail_form').each(function(){
        jQuery(this).find('.powermail_fieldset').wrapAll('<div class="row"></div>');
    });

    jQuery('.powermail_select').selectmenu({
        create: function() {
            var UIwidth = jQuery(this).parent().width();
            jQuery('div.ui-selectmenu-menu').addClass('custom-animated-nav no-select-yet').width(UIwidth);
            jQuery('div.ui-selectmenu-menu ul').addClass('filters filters-schnellauswahl').width(UIwidth);
            jQuery('div.ui-selectmenu-menu ul li').addClass('filter dropselectoption');
        },
        open: function() {
            jQuery(this).parent().addClass('open');
        },
        close: function() {
            jQuery(this).parent().removeClass('open');
        }
    });

    jQuery('#catSelect').selectmenu({
        create: function() {
            var UIwidth = jQuery(this).parent().width();
            jQuery('div.ui-selectmenu-menu').addClass('custom-animated-nav no-select-yet').width(UIwidth);
            jQuery('div.ui-selectmenu-menu ul').addClass('filters filters-schnellauswahl').width(UIwidth);
            jQuery('div.ui-selectmenu-menu ul li').addClass('filter dropselectoption');
        },
        change: function() {
            jQuery(this).parents('form').submit();
        },
        open: function() {
            jQuery(this).parent().addClass('open');
        },
        close: function() {
            jQuery(this).parent().removeClass('open');
        }
    });

// a page button
    jQuery('.page-button').wrapInner('<span></span>');

// viewport checker

    jQuery('.lazy-section.slideFromLeft').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInLeft',
        offset: 100
    });

    jQuery('.lazy-section.slideFromRight').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated slideInRight',
        offset: 100
    });

    jQuery('.lazy-section.fadeFromLeft').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 100
    });

    jQuery('.lazy-section.fadeFromRight').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 100
    });

    jQuery('.lazy-section.fadeFromDown').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

    jQuery('.lazy-section.fadeFromUp').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
    });

    jQuery('.lazy-section.fadeNormal').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });


// mobile menu check
    jQuery('.decorative-mobile-hamberger input').prop('checked', false);
    jQuery('.custom-animated-nav input').prop('checked', false);



// pay bill
 jQuery('.pay-bill-form-module select').selectmenu();

 jQuery('.pay-bill-form-module').parents('body').addClass('has-pay-bill-form');

});








// load
jQuery(window).load(function(){
    $(this).scrollTop(0);
//console.log("top");
// page banner type one slider
// jQuery('.page-top-banner').flickity({
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true
// });


    var $Bannercarousel = $('.page-top-banner').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: 6000,
        wrapAround: true,
        on: {
            ready: function() {
                setTimeout(function(){
                    jQuery('.page-banner-slider-box').each(function(){
                        if (jQuery(this).hasClass('is-selected')) {

                            jQuery(this).find('.slider-content').addClass('fadeInRight');
                            jQuery(this).find('.slider-content').removeClass('inactive');
                        }else{
                            jQuery(this).find('.slider-content').removeClass('fadeInRight');
                            jQuery(this).find('.slider-content').addClass('inactive');
                        }
                    });
                }, 500);
            },
            change: function( index ) {

                setTimeout(function(){
                    jQuery('.page-banner-slider-box').each(function(){
                        if (jQuery(this).hasClass('is-selected')) {

                            jQuery(this).find('.slider-content').addClass('fadeInRight');
                            jQuery(this).find('.slider-content').removeClass('inactive');
                        }else{
                            jQuery(this).find('.slider-content').removeClass('fadeInRight');
                            jQuery(this).find('.slider-content').addClass('inactive');
                        }
                    });
                }, 500);

            }
        }
    });

    jQuery('img:last-child').parent('.banner-main-wrap').addClass('no-slider-element');



// match height

    jQuery('.equal-row').each(function() {
        jQuery(this).children('.equal-block').matchHeight();
    });



    jQuery('.main-nav-sub-item').each(function() {
        jQuery(this).find('.within-column-menu').matchHeight({byRow: false});
    });



    jQuery('.main-nav-sub-item > .main-wrap > .row').each(function() {
        jQuery(this).find('> .my-col').matchHeight({byRow: false});
    });


    jQuery('.news-block-module').each(function(){
        jQuery(this).find('.news-excerpt').matchHeight();
    });

    jQuery('.pill-menu li').matchHeight();








    var siteLoad = {}


    siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT = function() {

        var HEADERHEIGHT = jQuery('.header').height();

        jQuery('body').css('padding-top', HEADERHEIGHT);

    };


    siteLoad.INNERIMGWITHCONTENTCAROUSELFUNCTION = function() {

        jQuery('.carousel-content-box').each(function(){
            var CAROUSELCONTENTBOXHEIGHT = jQuery(this).height();
            jQuery(this).parent('.image-holder').css('min-height', CAROUSELCONTENTBOXHEIGHT);
        });


    };


    siteLoad.MODALEQUALHEIGHT = function() {

        jQuery('.modal-equal-height').matchHeight();


    };


    siteLoad.RESPONSIVENAVPOSITION = function() {

        var HEADERHEIGHTFORRESPONSIVENAVPOSITION = jQuery('.header').height();

        if(jQuery(window).width() < 1099) {

            jQuery('.header-block-menu').css('top', HEADERHEIGHTFORRESPONSIVENAVPOSITION);

        }


    };


    siteLoad.ICONICMENUHEIGHTFUNCTION = function() {

        jQuery('.menu-with-icon').each(function(){
            var ICONMENUIMGHEIGHT = jQuery(this).find('span img').height();
            jQuery(this).find('span').height(ICONMENUIMGHEIGHT);
        });

    };

    siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();
    siteLoad.INNERIMGWITHCONTENTCAROUSELFUNCTION();
    siteLoad.RESPONSIVENAVPOSITION();
    siteLoad.ICONICMENUHEIGHTFUNCTION();


    jQuery(window).resize(function(){

        siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();
        siteLoad.INNERIMGWITHCONTENTCAROUSELFUNCTION();
        siteLoad.ICONICMENUHEIGHTFUNCTION();

    });


    jQuery('.main-nav-block li a').click(function(){
        if(jQuery(window).width() < 1099){
            jQuery(this).parent().find('.main-nav-sub-item').slideToggle();
            //jQuery(this).slideToggle();
            siteLoad.ICONICMENUHEIGHTFUNCTION();
            jQuery(this).toggleClass('open');
            //console.log(this);
        }

    });
    /*
    jQuery('.main-nav-block .has-sub-item').click(function(){
        jQuery(this).parent().find('.main-nav-sub-item').slideToggle();
        //jQuery(this).slideToggle();
        siteLoad.ICONICMENUHEIGHTFUNCTION();
        jQuery(this).toggleClass('open');
        console.log(this);
        jQuery(this).find('.sub-item-indication, .main-nav-sub-item').removeClass('fadeInRight');
        jQuery(this).find('.sub-item-indication, .main-nav-sub-item').addClass('fadeOutRight');
        var $this = jQuery(this);
        setTimeout(function(){
            $this.find('.sub-item-indication, .main-nav-sub-item').hide();
        }, 50);
    });
*/


    jQuery('.hamberg-click').click(function(){
        jQuery('.header-block-menu').slideToggle();
        jQuery(this).toggleClass('open');
    });



    jQuery('.decorative-mobile-hamberger').removeClass('inactive');

    jQuery('.decorative-mobile-hamberger').click(function(){

        if (jQuery('.decorative-mobile-hamberger input').prop('checked')) {
            jQuery('.header-block-menu').addClass('fadeIn');
            jQuery('.header-block-menu').removeClass('fadeOut');
            jQuery('.header-block-menu').show();
            jQuery('.header-block-menu').removeClass('inactive');
        }else{
            jQuery('.header-block-menu').removeClass('fadeIn');
            jQuery('.header-block-menu').addClass('fadeOut');
            jQuery('.header-block-menu').addClass('inactive');
        }


    });


    jQuery('.modal-click-quick').click(function(){

        setTimeout(function(){
            siteLoad.MODALEQUALHEIGHT();
        }, 1);

    });

    jQuery('.modal-click-delay').click(function(){

        setTimeout(function(){
            siteLoad.MODALEQUALHEIGHT();
        }, 500);

    });


    jQuery('#catSelect').val(jQuery('#newsCategory').val());


    siteLoad.PRODUCTVIEWHEIGHT = function() {


        jQuery('.product-view-type').each(function(){
            var PRODUCTVIEWTYPEHEIGHT = jQuery(this).height();
            jQuery(this).height(PRODUCTVIEWTYPEHEIGHT);
        });

    };


    siteLoad.PRESENTPRODUCTVIEWHEIGHT = function() {

        jQuery('.product-list-with-filter-module').each(function(){
            var PRESENTVIEWHEIGHT = jQuery(this).find('.product-view-type.current').height();
            jQuery(this).find('.product-view-type-wrap').height(PRESENTVIEWHEIGHT);
        });

    };





    jQuery(window).resize(function(){

    });


// product view legend


    jQuery('.view-legend-list').click(function(){

        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('current');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').removeClass('inactive');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('inactive');

        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('fadeInRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').removeClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').removeClass('fadeInRight');

    });

    jQuery('.view-legend-slider').click(function(){
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('current');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').removeClass('inactive');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('inactive');

        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('fadeInRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').removeClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').removeClass('fadeInRight');

    });

    jQuery('.view-legend').click(function(e){
        jQuery(this).parents('.product-list-with-filter-module').find('.view-legend').removeClass('current');
        jQuery(this).addClass('current');
        e.stopPropagation();
    });

// slider arrow animation
    jQuery('.owl-nav button').append('<i class="animated bounceButton"></i>');

    jQuery('.flickity-button').append('<i class="animated bounceButton"></i>');

// bounce
    jQuery('.owl-nav button').hover(function(){
            jQuery(this).find('.bounceButton').addClass('bounceInCustom');
            jQuery(this).find('.bounceButton').removeClass('bounceOutCustom');
        }, function() {
            jQuery(this).find('.bounceButton').removeClass('bounceInCustom');
            jQuery(this).find('.bounceButton').addClass('bounceOutCustom');
        }
    );

    jQuery('.flickity-button').hover(function(){
            jQuery(this).find('.bounceButton').addClass('bounceInCustom');
            jQuery(this).find('.bounceButton').removeClass('bounceOutCustom');
        }, function() {
            jQuery(this).find('.bounceButton').removeClass('bounceInCustom');
            jQuery(this).find('.bounceButton').addClass('bounceOutCustom');
        }
    );


// data fancy
    jQuery('[data-fancybox=""]').fancybox({
        afterShow: function(){
            jQuery('.site-modal .main-wrap').removeClass('inactive');
            jQuery('.site-modal .main-wrap').addClass('fadeInRight');
            setTimeout(function(){
                jQuery('.fancybox-close-small').addClass('active');
            }, 500);
        },
        afterClose: function(){

        }
    });


// file freview

    if(jQuery(window).width() > 1099) {
        jQuery('.file-preview').hover(function(){
                jQuery(this).parents('.table-responsive').addClass('no-overflow');
                jQuery(this).find('.file-preview-thumb').removeClass('invisible');
                // jQuery(this).find('.file-preview-thumb').addClass('fadeInRight');
                // jQuery(this).find('.file-preview-thumb').removeClass('fadeOutRight');
                jQuery(this).parents('.element').addClass('data-table-wrap-active');
            }, function() {

                // jQuery(this).find('.file-preview-thumb').addClass('fadeOutRight');
                // jQuery(this).find('.file-preview-thumb').removeClass('fadeInRight');
                jQuery(this).find('.file-preview-thumb').addClass('invisible');

            }
        );

        jQuery('.data-table-module').parents('.background-content-module').parent('.element').mouseleave(function(){
            jQuery('.table-responsive').removeClass('no-overflow');
            jQuery(this).removeClass('data-table-wrap-active');
        });


    }

    if(jQuery(window).width() < 992) {
        var produktCarouselHeight = jQuery('.produkt-carousel').height();
        jQuery('.produkt-carousel').height(produktCarouselHeight);
        jQuery(window).resize(function(){
            produktCarouselHeight = jQuery('.produkt-carousel').height();
            jQuery('.produkt-carousel').height(produktCarouselHeight);
        });
    }

// on scroll header function
    siteLoad.HEADERSCROLLFUNCTION = function() {

        jQuery('.header').each(function(){

            var $scrollDocument = $(document);




            if(jQuery(window).width() >= 450) {
                $scrollDocument.scroll(function() {
                    if ($scrollDocument.scrollTop() >= 100) {
                        jQuery('.service-nav-block').slideUp();
                        jQuery('.header-block-menu .search-block').slideUp();
                        jQuery('.site-logo img').css('height', '30px');
                        jQuery('.header').addClass('minified');
                    }else{
                        jQuery('.service-nav-block').slideDown();
                        jQuery('.header-block-menu .search-block').slideDown();
                        jQuery('.site-logo img').css('height', '40px');
                        jQuery('.header').removeClass('minified');
                    }
                });
            }else{
                $scrollDocument.scroll(function() {
                    if ($scrollDocument.scrollTop() >= 100) {
                        jQuery('.service-nav-block').slideUp();
                        jQuery('.header-block-menu .search-block').slideUp();
                        jQuery('.site-logo img').css('height', '20px');
                        jQuery('.header').addClass('minified');
                    }else{
                        jQuery('.service-nav-block').slideDown();
                        jQuery('.header-block-menu .search-block').slideDown();
                        jQuery('.site-logo img').css('height', '25px');
                        jQuery('.header').removeClass('minified');
                    }
                });
            }

            if(jQuery(window).width() >= 450) {

                if ($scrollDocument.scrollTop() >= 100) {
                    jQuery('.service-nav-block').slideUp();
                    jQuery('.header-block-menu .search-block').slideUp();
                    jQuery('.site-logo img').css('height', '30px');
                    jQuery('.header').addClass('minified');
                }else{
                    jQuery('.service-nav-block').slideDown();
                    jQuery('.header-block-menu .search-block').slideDown();
                    jQuery('.site-logo img').css('height', '40px');
                    jQuery('.header').removeClass('minified');
                }

            }else{

                if ($scrollDocument.scrollTop() >= 100) {
                    jQuery('.service-nav-block').slideUp();
                    jQuery('.header-block-menu .search-block').slideUp();
                    jQuery('.site-logo img').css('height', '20px');
                    jQuery('.header').addClass('minified');
                }else{
                    jQuery('.service-nav-block').slideDown();
                    jQuery('.header-block-menu .search-block').slideDown();
                    jQuery('.site-logo img').css('height', '25px');
                    jQuery('.header').removeClass('minified');
                }

            }


        });

    };


    siteLoad.HEADERSCROLLFUNCTION();
    siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();

    jQuery(window).resize(function(){
        siteLoad.HEADERSCROLLFUNCTION();
        siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();
    });

// powermail clone button
    jQuery('.powermail_fieldwrap_type_submit').each(function(){
        jQuery(this).find('.powermail_field').append('<a class="page-button primary-color-button button-width-type-one"><span></span></a>');
        jQuery(this).find('a.page-button').removeAttr('href');
        var SUBMITTEXT = jQuery(this).find('input[type="submit"]').val();
        jQuery(this).find('a.page-button span').html(SUBMITTEXT);
        jQuery(this).find('a.page-button').click(function(){
            jQuery(this).parents('.powermail_fieldwrap_type_submit').find('input[type="submit"]').trigger("click");
        });
    });


// has sub function
    jQuery('.main-nav-block > nav > ul > li').each(function(){

        var IFSUBITEMEXIST = jQuery(this).find('.main-nav-sub-item').length;

        if(IFSUBITEMEXIST < 1){
            jQuery(this).removeClass('has-sub-item');
        }

        if (jQuery(this).hasClass('has-sub-item')) {
            jQuery(this).find('> a').removeAttr('href');
        }



    });

    jQuery('.search-block .search-click').on('click',function(){
        jQuery(this).hide();
        jQuery(this).prev('.search-form').addClass('active');
        var $this = jQuery(this);
        setTimeout(function(){
            $this.prev('.search-form').find('input').focus();
        }, 500);
        jQuery(this).next('.search-submit').addClass('active');
        jQuery('.search-autocomplete-results').css('visibility','visible');
    });

    jQuery('.tx-indexedsearch-searchbox-sword').focus(function(){
        jQuery('.search-autocomplete-results').css('visibility','hidden');
    });

    jQuery('#searchbox-sword').focus(function(){
        jQuery('.search-autocomplete-results').css('visibility','visible');
    });

// ISOTOP FILTER START
// init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('.filters').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $container.isotope({
            filter: filterValue
        });
    });



    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //****************************
    // Isotope Load more button
    //****************************
    if($('.isotope').length > 0){
    var initShow = 9; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $container.data('isotope'); // get Isotope instance

    loadMore(initShow); //execute function onload

    function loadMore(toShow) {
        $container.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $container.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            jQuery(".load-more-product").hide();
        } else {
            jQuery(".load-more-product").show();
        };

    }
    };



    //when load more button clicked
    $('.load-more-product').removeAttr('href');
    $(".load-more-product").click(function() {
        if ($('.filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            $('.filters').data('clicked', false);
        } else {
            counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);
    });

    //when filter button clicked
    $(".filters").click(function() {
        $(this).data('clicked', true);

        loadMore(initShow);
    });

    jQuery('.product-slider-view').addClass('inactive');

    jQuery('.custom-animated-nav').find(':checkbox').click(function(){
        jQuery('.custom-animated-nav').find(':checkbox').not(this).prop( "checked", false );
    });

    jQuery('.custom-animated-nav .filters li').click(function(){
        jQuery(this).parents('.custom-animated-nav').find(':checkbox').trigger('click');
    });
// ISOTOPFILTER END




});





// dropzone
var dropzone = new Dropzone('#demo-upload', {
  previewTemplate: document.querySelector('#preview-template').innerHTML,
  parallelUploads: 2,
  thumbnailHeight: 120,
  thumbnailWidth: 120,
  maxFilesize: 50,
  paramName: "file",
  filesizeBase: 1000,
  addRemoveLinks: true,
  init: function () {
        this.on("complete", function (file) {
            jQuery('.bill-uploads-module > .row > .my-col').matchHeight();
            jQuery('.final-bill-upload-trigger').detach().appendTo('.dropzone');
        });
    },
  thumbnail: function(file, dataUrl) {
    if (file.previewElement) {
      file.previewElement.classList.remove("dz-file-preview");
      var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
      for (var i = 0; i < images.length; i++) {
        var thumbnailElement = images[i];
        thumbnailElement.alt = file.name;
        thumbnailElement.src = dataUrl;
      }
      setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
    }
  }

});


// Now fake the file upload, since GitHub does not handle file uploads
// and returns a 404

var minSteps = 6,
    maxSteps = 60,
    timeBetweenSteps = 100,
    bytesPerStep = 100000;

dropzone.uploadFiles = function(files) {
  var self = this;

  for (var i = 0; i < files.length; i++) {

    var file = files[i];
    totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

    for (var step = 0; step < totalSteps; step++) {
      var duration = timeBetweenSteps * (step + 1);
      setTimeout(function(file, totalSteps, step) {
        return function() {
          file.upload = {
            progress: 100 * (step + 1) / totalSteps,
            total: file.size,
            bytesSent: (step + 1) * file.size / totalSteps
          };

          self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
          if (file.upload.progress == 100) {
            file.status = Dropzone.SUCCESS;
            self.emit("success", file, 'success', null);
            self.emit("complete", file);
            self.processQueue();
            //document.getElementsByClassName("dz-success-mark").style.opacity = "1";
          }
        };
      }(file, totalSteps, step), duration);
    }
  }
}

