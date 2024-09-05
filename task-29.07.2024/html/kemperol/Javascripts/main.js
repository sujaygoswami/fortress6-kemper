// tootltip bootstrap
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

// Video lightbox function
function videoLightbox(){
  if(jQuery('#myVideo').length){
    $('#myVideo').after('<style>.fancybox-slide.no-padding{padding:0;}</style>');
    if (document.cookie.indexOf('cookie_optin=') == '0') {
      $.fancybox.open( $('#myVideo'), {
        width: "100%",
        height: 870,
        afterShow : function( current, slide ) {
          slide.$slide.find('video').on('ended',function(){
            $.fancybox.close();
          });
        },
        beforeShow: function ( current, slide ) {
            slide.$slide.addClass('no-padding');
        }
      });
      clearInterval(lightboxInterval);
    } else {

    }
  }
}

jQuery(document).ready(function() {

    // Video lightbox
    lightboxInterval = setInterval(videoLightbox,1000);


    jQuery('.on-click-active-button').click(function() {
        jQuery(this).addClass('new-type-active');
    });


    jQuery('.cart-table-total-activity .page-button').click(function() {
        jQuery(this).addClass('new-type-active');
    });


    jQuery(".custom-animated-nav input[type='checkbox']").change(function() {

        if ($(".view-legend-filter input[type='checkbox']").is(':checked')) {
            jQuery(".view-legend-filter input[type='checkbox']").parents('.view-legend-filter').addClass('current');
        } else {
            jQuery(".view-legend-filter input[type='checkbox']").parents('.view-legend-filter').removeClass('current');
        }
    });

    jQuery('.view-legend-list, .view-legend-slider').click(function() {

        jQuery(".view-legend-filter input[type='checkbox']").prop('checked', false);

    });

    // Menu Link disable
    jQuery('.main-nav-block nav > ul > li').not('.responsive-service-nav').not('.cart-link').not(':nth-child(2)').find('> a').attr('href','javascript:void(0)');


    // Login
    // jQuery('.login-form form').submit(function(event){

    //     var $this = jQuery(this).parent('.login-form');
    //     var loginUrl = jQuery('.service-nav-block > ul > li:first-child > .dropdown-menu a:first-child').attr('href');
    //     loginUrl = loginUrl+'/shop/einloggen/';
    //     var username = $this.find('.username').val();
    //     var password = $this.find('.password').val();

    //     var formData = {
    //         'user': $this.find('input[name=user]').val(),
    //         'pass': $this.find('input[name=pass]').val()
    //     };

    //     $.ajax({
    //         url: loginUrl,
    //         //contentType: 'applicaiton/text; charset=utf-8',
    //         dataType : "text",
    //         //async: true,
    //         type: "POST",
    //         //crossDomain: true,
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //             'Access-Control-Allow-Headers': 'Content-Type',
    //             'Access-Control-Allow-Credentials': 'true'
    //         },
    //         data: JSON.stringify({formData}),
    //         success: function( data, textStatus, jQxhr ){
    //             console.log( data );
    //         },
    //         error: function( jqXhr, textStatus, errorThrown ){
    //             alert( errorThrown );
    //         }
    //     });

    // });


    // var siteCart = {}


    // siteCart.primaryexcerptcartfunction = function() {

    //        jQuery('.product-list-view .owl-carousel').each(function(){
    //             var COUNTOWLITEM = jQuery(this).find('.owl-item').length;

    //             if(COUNTOWLITEM < 2){
    //                 jQuery(this).addClass('single-product-list-owl-item');
    //             }
    //        }); 

    //        jQuery('.product-list-view-excerpt').each(function(){

    //             var EXCERPTPRIMARYHEIGHT = jQuery(this).height();

    //             jQuery(this).parent('.hovered-area').css('padding-bottom', EXCERPTPRIMARYHEIGHT);

    //         });

    // };


    // jQuery('.product-list-view-excerpt').matchHeight({byRow: false});

    // siteCart.primaryexcerptcartfunction();

    // jQuery(window).resize(function(){
    //     siteCart.primaryexcerptcartfunction();
    // });





    jQuery('.product-list-with-filter-module.type-cart .product-list-view .my-col').hover(function() {


        jQuery(this).find('.product-list-view-excerpt').stop(true, true).addClass('auto-height');
        jQuery(this).find('.secondary-excerpt').stop(true, true).show();
    }, function() {


        jQuery(this).find('.secondary-excerpt').stop(true, true).hide();

        jQuery(this).find('.product-list-view-excerpt').stop(true, true).removeClass('auto-height');

        // var $this = jQuery(this);
        // setTimeout(function(){
        //    $this.find('.product-list-view-excerpt').stop(true, true).removeClass('auto-height');
        // }, 600);

    });



    jQuery('.color-choice a').each(function() {

        var CHOICEPRODUCTID = jQuery(this).attr('data-id');
        var CHOICEPRODUCTQTY = jQuery(this).attr('data-qty');

        jQuery(this).hover(function() {
            jQuery(this).parents('.secondary-excerpt').find('.product-id strong').html(CHOICEPRODUCTID);
            jQuery(this).parents('.secondary-excerpt').find('.qty-legend span').html(CHOICEPRODUCTQTY);
        });

    });



    jQuery('.cart-select select').selectmenu({
        create: function() {
            var UIwidth = jQuery(this).parent().width();
            jQuery('div.ui-selectmenu-menu').addClass('custom-animated-nav no-select-yet cart-custom-select').width(UIwidth);
        }
    });


    jQuery('.pcart-select select').selectmenu({
        create: function() {
            var UIwidth = jQuery(this).parent().width();
            jQuery('div.ui-selectmenu-menu').addClass('custom-animated-nav no-select-yet pcart-custom-select').width(UIwidth);
        }
    });


    jQuery('.default-custom-select select').selectmenu({
        create: function() {
            var UIwidth = jQuery(this).parent().width();
            jQuery('div.ui-selectmenu-menu').addClass('custom-animated-nav default-custom-select-menu').width(UIwidth);
        }
    });


    



    jQuery('.pcart-color-varient .color-choice a').each(function() {





        jQuery(this).click(function(e) {
            var PCARTCOLORVALUE = jQuery(this).attr('data-value');
            jQuery(this).parents('.pcart-color-varient').find('.color-choice a').removeClass('selected');
            jQuery(this).addClass('selected');
            jQuery(this).parents('.pcart-color-varient').find('.color-name strong').html(PCARTCOLORVALUE);
            e.stopPropagation();
        });


    });


});



// svg
$(function() {
    jQuery('img.svg').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$(window).on('beforeunload', function() {
    //$(window).scrollTop(0);
});

jQuery(document).ready(function() {
    // $(this).scrollTop(0);

    jQuery('.service-nav-block .dropdown').hover(function() {
        jQuery(this).find('.dropdown-menu').show();
    }, function() {
        jQuery(this).find('.dropdown-menu').hide();
    });




    function isAppleDevice() {
        return (
            (navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
            (navigator.userAgent.toLowerCase().indexOf("ipod") > -1)
        );
    }
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    var appStoreURL = "";
    if (isAndroid > -1) {
        jQuery('body').addClass('android-device');
        jQuery('html').addClass('android-device');
    } else if (isAppleDevice()) {
        jQuery('body').addClass('ios-device');
        jQuery('html').addClass('ios-device');

        // jQuery( window ).on( "orientationchange", function( event ) {
        //   location.reload();
        // });


    }





    //Check Mobile Devices
    var checkMobile = function() {

        //Check Device
        var isTouch = ('ontouchstart' in document.documentElement);

        //Check Device //All Touch Devices
        if (isTouch) {

            jQuery('body').addClass('touch');



        } else {

            jQuery('body').addClass('no-touch');

        };

    };

    //Execute Check
    checkMobile();


    // shop system div
    jQuery('.shop-system').parents('.two-column-grid-mudule').find('> .two-col').removeClass('equal-block');
    jQuery('.shop-system').parents('.two-column-grid-mudule').find('.inner-carousel-module.picture-slider .simple-bild-item').addClass('cart-page-aside-bild-item');

    jQuery('.shop-system').parents('.two-column-grid-mudule').find('.inner-carousel-module').removeClass('full-height');
    jQuery('.shop-system').parents('.two-column-grid-mudule').find('.inner-carousel-module .full-height').removeClass('full-height');

    jQuery('.shop-system').parents('.two-column-grid-mudule').find('.inner-carousel-module').addClass('shop-cart-system-carousel');

    // hide firma ust

    $('.hide-firma-ust').click(function() {
        if ($(this).prop("checked") == true) {
            jQuery(this).parents('.site-form-module').find('.checked-hidden-firma-ust').addClass('inactive');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-firma-ust').find('#femanager_field_ustid').val('-');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-firma-ust').find('#femanager_field_company').val('-');
        } else if ($(this).prop("checked") == false) {
            jQuery(this).parents('.site-form-module').find('.checked-hidden-firma-ust').removeClass('inactive');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-firma-ust').find('#femanager_field_ustid').val('');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-firma-ust').find('#femanager_field_company').val('');
        }
    });

    $('.auto-check-valuer-one').each(function() {
        if ($(this).val() == 1) {
            $(this).prop('checked', true);
        }
    });

    if ($('.hide-firma-ust').prop("checked") == true) {
        $('.hide-firma-ust').parents('.site-form-module').find('.checked-hidden-firma-ust').addClass('inactive');
        $('.hide-firma-ust').parents('.site-form-module').find('.checked-hidden-firma-ust').find('#femanager_field_ustid').val('-');
        $('.hide-firma-ust').parents('.site-form-module').find('.checked-hidden-firma-ust').find('#femanager_field_company').val('-');
    };


    $('#femanager_field_deladdress').click(function() {
        if ($(this).prop("checked") == true) {
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').removeClass('inactive');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcompany').val('');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_daddress').val('');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dhousenumber').val('');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dzip').val('');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcity').val('');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcountry').val('');
        } else if ($(this).prop("checked") == false) {
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').addClass('inactive');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcompany').val('-');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_daddress').val('-');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dhousenumber').val('-');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dzip').val('-');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcity').val('-');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcountry').val('DEU');
        };
    });

    if ($('#femanager_field_deladdress').prop("checked") == true) {
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').removeClass('inactive');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcompany').val('');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_daddress').val('');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dhousenumber').val('');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dzip').val('');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcity').val('');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcountry').val('');
    };

    if ($('#femanager_field_deladdress').prop("checked") == false) {
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').addClass('inactive');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcompany').val('-');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_daddress').val('-');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dhousenumber').val('-');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dzip').val('-');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcity').val('-');
        $('#femanager_field_deladdress').parents('.site-form-module').find('.checked-hidden-delivary-address').find('#femanager_field_dcountry').val('DEU');
    };

    $('.hide-delivary-private').click(function() {
        if ($(this).prop("checked") == true) {
            jQuery(this).parents('.site-form-module').find('.checked-hidden-private').addClass('active-private');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-private').find('#femanager_field_dcompany').val('-');
        } else if ($(this).prop("checked") == false) {
            jQuery(this).parents('.site-form-module').find('.checked-hidden-private').removeClass('active-private');
            jQuery(this).parents('.site-form-module').find('.checked-hidden-private').find('#femanager_field_dcompany').val('');
        }
    });

    if ($('.hide-delivary-private').prop("checked") == true) {
        $('.hide-delivary-private').parents('.site-form-module').find('.checked-hidden-private').addClass('active-private');
        $('.hide-delivary-private').parents('.site-form-module').find('.checked-hidden-private').find('#femanager_field_dcompany').val('-');
    };



    /*
    $('.feManagerValidation').submit(function(){
        var vatField = $('#femanager_field_ustid');
        $(document).ajaxComplete(function() {
        if(!vatField.parents('.site-form-block').hasClass('inactive')){
            if(vatField.val() != '111'){
                vatField.addClass('error');
            } else {
                vatField.parent().find('.alert').remove();
                vatField.removeClass('error');
            };
        };
        });

    });
    */


    //news-block-module
    jQuery('.news-block-module .news-featured-img').addClass('set-back');

    // date time picker

    jQuery('.date-input').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: false,
        changeYear: false
    });


    // site data table
    jQuery('.site-data-table.sorting-table').dataTable({
        "order": [],
        iDisplayLength: -1
            // Your other options here...
    });

    // menu item odd even
    jQuery('.main-nav-sub-item').each(function() {
        var MENUBLOCKCOUNT = jQuery(this).find('.my-col').length;
        if (MENUBLOCKCOUNT % 2 === 0) {
            jQuery(this).addClass('menu-item-count-even')
        } else {
            jQuery(this).addClass('menu-item-count-odd')
        }
    });


    // main nav function
    if (jQuery(window).width() > 1099) {

        jQuery('.sub-item-indication, .main-nav-sub-item').addClass('animated');

        jQuery('.main-nav-block .has-sub-item').hover(function() {
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
            setTimeout(function() {
                $this.find('.sub-item-indication, .main-nav-sub-item').hide();
            }, 50);
        });
    }





    // flex slider
    jQuery('.flexslider').flexslider({
        animation: "slide",
        start: function(slider) {
            jQuery('body').removeClass('loading');
        }

    });


    // default-content-slider
    jQuery('.default-content-slider').parent('.element').addClass('mobile-cover-element-for-dflt-slider');
    jQuery('.two-column-grid-mudule').find('.element').removeClass('mobile-cover-element-for-dflt-slider');
    jQuery('.default-content-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        mouseDrag: true,
        touchDrag: true
    })




    // block-slider
    jQuery('.block-slider-three-blocks').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        items: 1,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        responsive: {

            // breakpoint from 991 up
            991: {
                items: 3
            }
        }
    })

    // product list slider
    jQuery('.product-list-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        mouseDrag: true,
        touchDrag: true
    })

    jQuery('.default-content-slider').each(function() {
        var DFLTCONTENTSLDRITEMCOUNT = jQuery(this).find('.item').length;

        if (DFLTCONTENTSLDRITEMCOUNT <= 1) {
            jQuery(this).addClass('single-item');
        }

    });

    // product carousel
    jQuery('.erp-product-carousel .owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })




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


    jQuery('.accordion-container').each(function() {
        var COLLAPSEID = jQuery(this).find('.panel-collapse').attr('id');
        jQuery(this).find('.panel-heading').attr('data-target', '#' + COLLAPSEID);
    });

    jQuery('.panel-group').each(function() {
        var PANELGROUPID = jQuery(this).attr('id');
        jQuery(this).find('.panel-heading').attr('data-parent', '#' + PANELGROUPID);
    });





    // object notation
    var site = {}


    site.absolutebottomelement = function() {

        jQuery('.absolute-bottom-element').each(function() {
            var ABSLOTELEMHT = jQuery(this).height();
            jQuery(this).parent().css('padding-bottom', ABSLOTELEMHT);
        });

    };







    site.absolutebottomelement();



    jQuery(window).resize(function() {

        site.absolutebottomelement();


    });



    jQuery(window).on("orientationchange", function(event) {



    });




    // page banner type one




    jQuery('.product-grid .simple-bild-item').removeClass('set-back');



    // set back

    jQuery('.set-back').each(function() {

        var SETBACK = jQuery(this).find('img').attr('src');
        jQuery(this).css('background-image', 'url(' + SETBACK + ')');

    });



    jQuery('.touch .has-submenu > a').addClass('dual-click');

    jQuery(document).on("click", ".dual-click", function(event) {

        jQuery(".dual-click").not(this).removeClass("clicked");
        jQuery(this).toggleClass("clicked");
        if (jQuery(this).hasClass("clicked")) {
            event.preventDefault();
        }
    });


    // go top
    jQuery('.go-top').click(function() {
        jQuery('html, body').animate({ scrollTop: 0 }, 400);

    });


    // pill menu

    jQuery('.pill-menu li').hover(function() {
        jQuery(this).addClass('hovered').show();
    }, function() {
        jQuery(this).removeClass('hovered').show();
    });



    //special-numeric-list-item
    jQuery('.special-numeric-list-item').each(function() {

        jQuery(this).find('li').wrapInner('<span></span>');
        jQuery(this).find('li').prepend('<i></i>');

    });

    jQuery('.special-numeric-list-item li').each(function() {

        var SPECIALNUMIRICLISTCOUNT = jQuery(this).index();
        jQuery(this).find('i').html(SPECIALNUMIRICLISTCOUNT + 1);

    });

    // responsive footer
    if (jQuery(window).width() < 992) {
        jQuery('.footer-block-head').click(function() {
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

    jQuery('.power-mail-custom-check .check-radio-item').each(function() {
        jQuery(this.nextSibling).wrap('<div class="check-radio-label"></div>');
    });

    jQuery('.powermail_form').each(function() {
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

    if (jQuery('.forlang-only select').length > 0) {
        jQuery('#default-category option').each(function() {
            var value = jQuery(this).attr('value');
            jQuery('#language-category option[data-origuid=' + value + ']').addClass('lang-select-cat');
        });

        var firstOption = jQuery('#catSelect option').first().clone();
        jQuery('#catSelect').find('option').remove();
        jQuery('#catSelect').append(firstOption);

        jQuery('.lang-select-cat').each(function() {
            var options = jQuery(this).clone();
            jQuery('#catSelect').append(options);
        });
    };

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
    jQuery('.page-button').not('.iconic').wrapInner('<span></span>');


    // filter with checkbox
    jQuery('.filters.with-check-item li').click(function() {
        jQuery(this).toggleClass('checked');
    });

    jQuery('.characteristicselect').on('click', function(e) {
        var dataID = jQuery(this).attr('data-id');
        var title = jQuery(this).find('span').text();
        var position = jQuery(this).index();
        var $checkedDiv = jQuery(this).parents('.product-list-with-filter-module').find('.checked-items');
        var $checkedItem = jQuery(this).parents('.product-list-with-filter-module').find('.checked-item[data-class$=".characteristicselect"][data-id$="' + dataID + '"]');
        if (jQuery(this).hasClass('checked')) {
            $checkedDiv.prepend('<div class="checked-item" data-index="' + position + '" data-class=".characteristicselect" data-id="' + dataID + '"><i></i><span>' + title + '</span></div>');
        } else {
            $checkedItem.remove();
        }
    });

    jQuery('.colorselect').on('click', function(e) {
        var dataID = jQuery(this).attr('data-id');
        var title = jQuery(this).find('span').text();
        var position = jQuery(this).index();
        var $checkedDiv = jQuery(this).parents('.product-list-with-filter-module').find('.checked-items');
        var $checkedItem = jQuery(this).parents('.product-list-with-filter-module').find('.checked-item[data-class$=".colorselect"][data-id$="' + dataID + '"]');
        if (jQuery(this).hasClass('checked')) {
            $checkedDiv.prepend('<div class="checked-item" data-index="' + position + '" data-class=".colorselect" data-id="' + dataID + '"><i></i><span>' + title + '</span></div>');
        } else {
            $checkedItem.remove();
        }
    });

    jQuery(document).on('click', '.product-list-with-filter-module .checked-item', function() {
        var dataIndex = jQuery(this).attr('data-index');
        var dataClass = jQuery(this).attr('data-class');
        if (jQuery(this).hasClass('reset-all')) {
            jQuery(this).parents('.product-list-with-filter-module').find('.dropselectoption.checked').click();
        } else {
            jQuery(this).parents('.product-list-with-filter-module').find(dataClass).eq(dataIndex).click();
        }
    });



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



    // filter item sidebar menu

    jQuery('.filter-sidebar .megamenu-dropdown .primary-menu > a').click(function() {
        jQuery(this).parent().toggleClass('open');
        jQuery(this).parent().find('.secondary-menu').slideToggle();
    });


    // normal drop menu
    jQuery('.menu-item .item-parent-part').click(function() {
        jQuery(this).toggleClass('open');
        jQuery(this).parents('.menu-item').find('.item-sub-part').slideToggle();
    });

    // overlay-cart-trigger
    jQuery('.overlay-cart-trigger').click(function() {
        if (jQuery(this).find('i').text() != 0) {
            jQuery('.overlay-cart').fadeIn();
        };
    });

    jQuery('.cart-overlay-back').click(function() {
        jQuery('.overlay-cart').fadeOut();
    });

    //data-table-accordion-trigger
    jQuery('.data-table-accordion-trigger').click(function() {

        jQuery(this).toggleClass('open');

        jQuery(this).parents('.data-table-acordion-primary').next('.data-table-acordion-secondary').toggle();

    });


    // select user

    // Initialize select2
    $('.selUser').select2();

    // Read selected option
    // $('.but_read').click(function(){
    //     var username = $(this).parent('.default-custom-select').find('select option:selected').text();
    //     var userid = $(this).parent('.default-custom-select').find('select').val();

    //     $('.result').html("id : " + userid + ", name : " + username);
    // });




    // step form module July 2024
    jQuery('.default-custom-select-step-form select').selectmenu({
        // create: function() {
        //     var UIwidth = jQuery(this).parent().width();
        //     jQuery('div.ui-selectmenu-menu').addClass('custom-animated-nav default-custom-select-menu-step-form').width(UIwidth);
        // }
    });

    jQuery('.iconic-box-choice-module').each(function(){
        var THISMAINMODULE = jQuery(this);
        jQuery(this).find('.choice-selection-input').click(function(){
            if($(this).is(':checked')) {
                (THISMAINMODULE).find('.choice-box-multi-item-holder').addClass('multi-item-action-dasabled');
                jQuery(this).parents('.choice-box-multi-item-holder').removeClass('multi-item-action-dasabled');
            }
        });
    });
    jQuery('.iconic-box-choice-module .multi-choice-box-holder').each(function(){
        var THISMAINMODULE = jQuery(this);
        jQuery(this).find('.choice-selection-input').click(function(){
            var CHEKEDITEMLENGTH = jQuery(THISMAINMODULE).find('.choice-selection-input:checked').length;
            
            if(CHEKEDITEMLENGTH >= 1){
                jQuery(THISMAINMODULE).parents('.progress-box').find('.length-passed-checkbox').prop('checked', true);
            }else{
                jQuery(THISMAINMODULE).parents('.progress-box').find('.length-passed-checkbox').prop('checked', false);
            }

            var CHEKEDGROUPITEMLENGTH = jQuery(THISMAINMODULE).parents('.progress-relate-action').find('.length-passed-checkbox:checked').length;

            // length 3 progress validation
            if(CHEKEDGROUPITEMLENGTH == 1){
                jQuery(this).parents('.progress-relate-parent.length-3').find('.the-selection-progress-bar span').width(33.33 + '%');
                jQuery(this).parents('.progress-relate-parent.length-3').find('.selection-progress-bar-module').removeClass('passed');
                jQuery(this).parents('.progress-relate-parent.length-3').find('+ .form-step-action-module .form-step-ahead-module .page-button').addClass('this-disable-button');
            }else if(CHEKEDGROUPITEMLENGTH == 2){
                jQuery(this).parents('.progress-relate-parent.length-3').find('.the-selection-progress-bar span').width(66.66 + '%');
                jQuery(this).parents('.progress-relate-parent.length-3').find('.selection-progress-bar-module').removeClass('passed');
                jQuery(this).parents('.progress-relate-parent.length-3').find('+ .form-step-action-module .form-step-ahead-module .page-button').addClass('this-disable-button');
            }else if(CHEKEDGROUPITEMLENGTH == 3){
                jQuery(this).parents('.progress-relate-parent.length-3').find('.the-selection-progress-bar span').width(100 + '%');
                jQuery(this).parents('.progress-relate-parent.length-3').find('.selection-progress-bar-module').addClass('passed');
                jQuery(this).parents('.progress-relate-parent.length-3').find('+ .form-step-action-module .form-step-ahead-module .page-button').removeClass('this-disable-button');
            }
            else{
                jQuery(this).parents('.progress-relate-parent.length-3').find('.the-selection-progress-bar span').width(0 + '%');
                jQuery(this).parents('.progress-relate-parent.length-3').find('.selection-progress-bar-module').removeClass('passed');
                jQuery(this).parents('.progress-relate-parent.length-3').find('+ .form-step-action-module .form-step-ahead-module .page-button').addClass('this-disable-button');
            }
            
            
        });
    });
    
    jQuery('.step-form-system-listing-module .the-listing').each(function(){
        var INDEXCOUNT = jQuery(this).index();
        jQuery(this).attr('data-count', INDEXCOUNT + 1);
        var SERIALNUMBER = jQuery(this).attr('data-count');
        jQuery(this).find('.system-number').html(SERIALNUMBER);
    });

    

});








// load
jQuery(window).load(function() {

    // $(document.body).scrollTop($('#searchCpersonResult').offset().top);



    // $(this).scrollTop(0);
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
                setTimeout(function() {
                    jQuery('.page-banner-slider-box').each(function() {
                        if (jQuery(this).hasClass('is-selected')) {

                            jQuery(this).find('.slider-content').addClass('fadeInRight');
                            jQuery(this).find('.slider-content').removeClass('inactive');
                        } else {
                            jQuery(this).find('.slider-content').removeClass('fadeInRight');
                            jQuery(this).find('.slider-content').addClass('inactive');
                        }
                    });
                }, 500);
            },
            change: function(index) {

                setTimeout(function() {
                    jQuery('.page-banner-slider-box').each(function() {
                        if (jQuery(this).hasClass('is-selected')) {

                            jQuery(this).find('.slider-content').addClass('fadeInRight');
                            jQuery(this).find('.slider-content').removeClass('inactive');
                        } else {
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
        jQuery(this).find('.within-column-menu').matchHeight({ byRow: false });
    });



    jQuery('.main-nav-sub-item > .main-wrap > .row').each(function() {
        jQuery(this).find('> .my-col').matchHeight({ byRow: false });
    });


    jQuery('.news-block-module').each(function() {
        jQuery(this).find('.news-excerpt').matchHeight();
    });

    jQuery('.pill-menu li').matchHeight();

    jQuery('.checkout-column-information .primary').matchHeight();








    var siteLoad = {}


    siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT = function() {

        var HEADERHEIGHT = jQuery('.header').height();

        jQuery('body').css('padding-top', HEADERHEIGHT);

    };


    siteLoad.INNERIMGWITHCONTENTCAROUSELFUNCTION = function() {

        jQuery('.carousel-content-box').each(function() {
            var CAROUSELCONTENTBOXHEIGHT = jQuery(this).height();
            jQuery(this).parent('.image-holder').css('min-height', CAROUSELCONTENTBOXHEIGHT);
        });


    };


    siteLoad.MODALEQUALHEIGHT = function() {

        jQuery('.modal-equal-height').matchHeight();


    };


    siteLoad.RESPONSIVENAVPOSITION = function() {

        var HEADERHEIGHTFORRESPONSIVENAVPOSITION = jQuery('.header').height();

        if (jQuery(window).width() < 1099) {

            jQuery('.header-block-menu').css('top', HEADERHEIGHTFORRESPONSIVENAVPOSITION);

        }


    };


    siteLoad.ICONICMENUHEIGHTFUNCTION = function() {

        jQuery('.menu-with-icon').each(function() {
            var ICONMENUIMGHEIGHT = jQuery(this).find('span img').height();
            jQuery(this).find('span').height(ICONMENUIMGHEIGHT);
        });

    };



    siteLoad.SITELOADLOGOSLIDER = function() {

        jQuery('.logo-slider .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1100: {
                    items: 5
                }
            }
        })


    };

    siteLoad.SITELOADLOGOSLIDERHEIGHT = function() {
        jQuery('.logo-light-box-slider .owl-item').each(function() {
            var HEIGHT = jQuery(this).width();
            jQuery(this).height(HEIGHT);
        });
    };


    siteLoad.SELLUSERFUNCTIONMODAL = function() {

        $('.selUser').select2();



    };


    siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();
    siteLoad.INNERIMGWITHCONTENTCAROUSELFUNCTION();
    siteLoad.RESPONSIVENAVPOSITION();
    siteLoad.ICONICMENUHEIGHTFUNCTION();


    jQuery(window).resize(function() {

        siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();
        siteLoad.INNERIMGWITHCONTENTCAROUSELFUNCTION();
        siteLoad.ICONICMENUHEIGHTFUNCTION();

    });


    jQuery('.main-nav-block li i').click(function() {
        if (jQuery(window).width() < 1099) {
            jQuery(this).parents('li').find('.main-nav-sub-item').slideToggle();
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


    jQuery('.hamberg-click').click(function() {
        jQuery('.header-block-menu').slideToggle();
        jQuery(this).toggleClass('open');
    });



    jQuery('.decorative-mobile-hamberger').removeClass('inactive');

    jQuery('.decorative-mobile-hamberger').click(function() {

        if (jQuery('.decorative-mobile-hamberger input').prop('checked')) {
            jQuery('.header-block-menu').addClass('fadeIn');
            jQuery('.header-block-menu').removeClass('fadeOut');
            jQuery('.header-block-menu').show();
            jQuery('.header-block-menu').removeClass('inactive');
        } else {
            jQuery('.header-block-menu').removeClass('fadeIn');
            jQuery('.header-block-menu').addClass('fadeOut');
            jQuery('.header-block-menu').addClass('inactive');
        }


    });


    jQuery('.modal-click-quick').click(function() {

        setTimeout(function() {
            siteLoad.MODALEQUALHEIGHT();

        }, 1);

    });

    jQuery('.modal-click-delay').click(function() {

        setTimeout(function() {
            siteLoad.SITELOADLOGOSLIDER();

        }, 500);

        setTimeout(function() {
            siteLoad.SITELOADLOGOSLIDERHEIGHT();
        }, 600);

        //   setTimeout(function(){
        //     siteLoad.SELLUSERFUNCTIONMODAL();
        // }, 500);

    });


    jQuery('#catSelect').val(jQuery('#newsCategory').val());


    siteLoad.PRODUCTVIEWHEIGHT = function() {


        jQuery('.product-view-type').each(function() {
            var PRODUCTVIEWTYPEHEIGHT = jQuery(this).height();
            jQuery(this).height(PRODUCTVIEWTYPEHEIGHT);
        });

    };


    siteLoad.PRESENTPRODUCTVIEWHEIGHT = function() {

        jQuery('.product-list-with-filter-module').each(function() {
            var PRESENTVIEWHEIGHT = jQuery(this).find('.product-view-type.current').height();
            jQuery(this).find('.product-view-type-wrap').height(PRESENTVIEWHEIGHT);
        });

    };





    jQuery(window).resize(function() {

    });


    // product view legend


    jQuery('.view-legend-list').click(function() {

        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('current');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').removeClass('inactive');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('inactive');

        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('fadeInRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').removeClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').removeClass('fadeInRight');

    });

    jQuery('.view-legend-slider').click(function() {
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('current');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').removeClass('inactive');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('inactive');

        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').addClass('fadeInRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-slider-view').removeClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').addClass('fadeOutRight');
        jQuery(this).parents('.product-list-with-filter-module').find('.product-list-view').removeClass('fadeInRight');

    });

    jQuery('.view-legend.visual').click(function(e) {
        jQuery(this).parents('.product-list-with-filter-module').find('.view-legend').removeClass('current');
        jQuery(this).addClass('current');
        e.stopPropagation();
    });

    // slider arrow animation
    jQuery('.owl-nav button').append('<i class="animated bounceButton"></i>');

    jQuery('.flickity-button').append('<i class="animated bounceButton"></i>');

    // bounce
    jQuery('.owl-nav button').hover(function() {
        jQuery(this).find('.bounceButton').addClass('bounceInCustom');
        jQuery(this).find('.bounceButton').removeClass('bounceOutCustom');
    }, function() {
        jQuery(this).find('.bounceButton').removeClass('bounceInCustom');
        jQuery(this).find('.bounceButton').addClass('bounceOutCustom');
    });

    jQuery('.flickity-button').hover(function() {
        jQuery(this).find('.bounceButton').addClass('bounceInCustom');
        jQuery(this).find('.bounceButton').removeClass('bounceOutCustom');
    }, function() {
        jQuery(this).find('.bounceButton').removeClass('bounceInCustom');
        jQuery(this).find('.bounceButton').addClass('bounceOutCustom');
    });


    // data fancy
    jQuery('[data-fancybox=""]').fancybox({
        afterShow: function() {
            jQuery('.site-modal .main-wrap').removeClass('inactive');
            jQuery('.site-modal .main-wrap').addClass('fadeInRight');
            setTimeout(function() {
                jQuery('.fancybox-close-small').addClass('active');
            }, 500);
        },
        afterClose: function() {
            jQuery('.logo-slider .owl-carousel').owlCarousel('destroy');
        }
    });


    // file freview

    if (jQuery(window).width() > 1099) {
        jQuery('.file-preview').hover(function() {
            jQuery(this).parents('.table-responsive').addClass('no-overflow');
            jQuery(this).find('.file-preview-thumb').removeClass('invisible');
            // jQuery(this).find('.file-preview-thumb').addClass('fadeInRight');
            // jQuery(this).find('.file-preview-thumb').removeClass('fadeOutRight');
            jQuery(this).parents('.element').addClass('data-table-wrap-active');
        }, function() {

            // jQuery(this).find('.file-preview-thumb').addClass('fadeOutRight');
            // jQuery(this).find('.file-preview-thumb').removeClass('fadeInRight');
            jQuery(this).find('.file-preview-thumb').addClass('invisible');

        });

        jQuery('.data-table-module').parents('.background-content-module').parent('.element').mouseleave(function() {
            jQuery('.table-responsive').removeClass('no-overflow');
            jQuery(this).removeClass('data-table-wrap-active');
        });


    }

    if (jQuery(window).width() < 992) {
        var produktCarouselHeight = jQuery('.produkt-carousel').height();
        jQuery('.produkt-carousel').height(produktCarouselHeight);
        jQuery(window).resize(function() {
            produktCarouselHeight = jQuery('.produkt-carousel').height();
            jQuery('.produkt-carousel').height(produktCarouselHeight);
        });
    }

    // on scroll header function
    siteLoad.HEADERSCROLLFUNCTION = function() {

        jQuery('.header').each(function() {

            var $scrollDocument = $(document);




            if (jQuery(window).width() >= 450) {
                $scrollDocument.scroll(function() {
                    if ($scrollDocument.scrollTop() >= 100) {
                        jQuery('.service-nav-block').slideUp();
                        jQuery('.header-block-menu .search-block').slideUp();
                        jQuery('.site-logo img').css('height', '30px');
                        jQuery('.header').addClass('minified');
                    } else {
                        jQuery('.service-nav-block').slideDown();
                        jQuery('.header-block-menu .search-block').slideDown();
                        jQuery('.site-logo img').css('height', '40px');
                        jQuery('.header').removeClass('minified');
                    }
                });
            } else {
                $scrollDocument.scroll(function() {
                    if ($scrollDocument.scrollTop() >= 100) {
                        jQuery('.service-nav-block').slideUp();
                        jQuery('.header-block-menu .search-block').slideUp();
                        jQuery('.site-logo img').css('height', '20px');
                        jQuery('.header').addClass('minified');
                    } else {
                        jQuery('.service-nav-block').slideDown();
                        jQuery('.header-block-menu .search-block').slideDown();
                        jQuery('.site-logo img').css('height', '25px');
                        jQuery('.header').removeClass('minified');
                    }
                });
            }

            if (jQuery(window).width() >= 450) {

                if ($scrollDocument.scrollTop() >= 100) {
                    jQuery('.service-nav-block').slideUp();
                    jQuery('.header-block-menu .search-block').slideUp();
                    jQuery('.site-logo img').css('height', '30px');
                    jQuery('.header').addClass('minified');
                } else {
                    jQuery('.service-nav-block').slideDown();
                    jQuery('.header-block-menu .search-block').slideDown();
                    jQuery('.site-logo img').css('height', '40px');
                    jQuery('.header').removeClass('minified');
                }

            } else {

                if ($scrollDocument.scrollTop() >= 100) {
                    jQuery('.service-nav-block').slideUp();
                    jQuery('.header-block-menu .search-block').slideUp();
                    jQuery('.site-logo img').css('height', '20px');
                    jQuery('.header').addClass('minified');
                } else {
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

    jQuery(window).resize(function() {
        siteLoad.HEADERSCROLLFUNCTION();
        siteLoad.FUNCTIONOVERFIXEDHEADERHEIGHT();
    });

    // powermail clone button
    jQuery('.powermail_fieldwrap_type_submit').each(function() {
        jQuery(this).find('.powermail_field').append('<a class="page-button primary-color-button button-width-type-one"><span></span></a>');
        jQuery(this).find('a.page-button').removeAttr('href');
        var SUBMITTEXT = jQuery(this).find('input[type="submit"]').val();
        jQuery(this).find('a.page-button span').html(SUBMITTEXT);
        jQuery(this).find('a.page-button').click(function() {
            jQuery(this).parents('.powermail_fieldwrap_type_submit').find('input[type="submit"]').trigger("click");
        });
    });


    // has sub function
    jQuery('.main-nav-block > nav > ul > li').each(function() {

        var IFSUBITEMEXIST = jQuery(this).find('.main-nav-sub-item').length;

        if (IFSUBITEMEXIST < 1) {
            jQuery(this).removeClass('has-sub-item');
        }

        // if (jQuery(this).hasClass('has-sub-item')) {
        //     jQuery(this).find('> a').removeAttr('href');
        // }



    });

    jQuery('.search-block .search-click').on('click', function() {
        jQuery(this).hide();
        jQuery(this).prev('.search-form').addClass('active');
        var $this = jQuery(this);
        setTimeout(function() {
            $this.prev('.search-form').find('input').focus();
        }, 500);
        jQuery(this).next('.search-submit').addClass('active');
        jQuery('.search-autocomplete-results').css('visibility', 'visible');
    });

    jQuery('.tx-indexedsearch-searchbox-sword').focus(function() {
        jQuery('.search-autocomplete-results').css('visibility', 'hidden');
    });

    jQuery('#searchbox-sword').focus(function() {
        jQuery('.search-autocomplete-results').css('visibility', 'visible');
    });



});


// product list slider and isotop
jQuery(window).load(function() {


    var siteCart = {}


    siteCart.primaryexcerptcartfunction = function() {

        jQuery('.product-list-view .owl-carousel').each(function() {
            var COUNTOWLITEM = jQuery(this).find('.owl-item').length;

            if (COUNTOWLITEM < 2) {
                jQuery(this).addClass('single-product-list-owl-item');
            }
        });

        jQuery('.product-list-view-excerpt').each(function() {

            var EXCERPTPRIMARYHEIGHT = jQuery(this).height();

            jQuery(this).parent('.hovered-area').css('padding-bottom', EXCERPTPRIMARYHEIGHT);

        });

    };


    jQuery('.product-list-view-excerpt').matchHeight({ byRow: false });

    siteCart.primaryexcerptcartfunction();

    jQuery(window).resize(function() {
        siteCart.primaryexcerptcartfunction();
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
    var filterValue = '';
    $('.filters').on('click', 'li', function() {
        $(this).toggleClass('clicked');
        var thisValue = $(this).attr('data-filter');
        if ($(this).parents().hasClass('type-cart')) {
            if ($(this).hasClass('clicked')) {
                filterValue = filterValue + thisValue;
            } else {
                var re = new RegExp(thisValue, "g");
                filterValue = filterValue.replace(thisValue, '');
            }
        } else {
            filterValue = thisValue;
        };
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        console.log(filterValue)
        $container.isotope({
            filter: filterValue
        });
    });
    var b2c = jQuery("#pfilter").data('b2c');
    if (b2c !== null && b2c !== '' && b2c !== undefined) {
        if (b2c > 0) {
            $(".pvtsale input[type=checkbox]").trigger("click");
        }
    }


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
    if ($('.isotope').length > 0) {
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

       // loadMore(initShow);
    });

    jQuery('.product-slider-view').addClass('inactive');

    jQuery('.custom-animated-nav').find(':checkbox').click(function() {
        jQuery('.custom-animated-nav').find(':checkbox').not(this).prop("checked", false);
    });

    jQuery('.custom-animated-nav .filters li a').click(function() {
        jQuery(this).parents('.custom-animated-nav').find(':checkbox').trigger('click');
    });
    // ISOTOPFILTER END
});