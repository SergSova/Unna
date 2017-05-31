var windowWidthValue= (window.innerWidth > 0) ? window.innerWidth : screen.width;


$('#mobile-menu .menu-lang a.active').click(function(event) {
    event.preventDefault(event);
});

// ************************************************************* slider

$('.slider').each(function() {
    $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<i class="icon-left-arrow slick-prev slick-arrow"></i>',
        nextArrow: '<i class="icon-right-arrow slick-next slick-arrow"></i>'
    });
});

// ************************************************************** link with delay click

$('.link-delay').each(function() {
    $(this).click(function() {
        event.preventDefault(event);
        var url = $(this).attr('href');
        setTimeout(function() {
            $(location).attr('href', url);
        }, 1500);
    });
});

// ************************************************************** menu sandwitch click

var heightSetted = false;
$('.menu-sandwich').click(function() {
    if (!$(this).hasClass('rotate')){
        $('html').css('overflow', 'hidden');
    } else {
        $('html').css('overflow', 'visible');
    }
    $('#mobile-menu').fadeToggle(400, function () {
        // set max-height of items menu
        if (!heightSetted){
            var maxHeight = $('#mobile-menu').height() - $('#mobile-menu .top').outerHeight();
            $('#mobile-menu .content').css('height', maxHeight);
            heightSetted = true;
        }
    });
    setTimeout(function() {
        $('.menu-sandwich').toggleClass('rotate');
    }, 100);
    // hide opened menu items
    $('#mobile-menu .menu-item').each(function() {
        $(this).removeClass('active').find('.sub').hide('400');
    });
});

// mobile menu height on resize

$(window).on('resize', function() {
    var maxHeight = $('#mobile-menu').height() - $('#mobile-menu .top').outerHeight();
    $('#mobile-menu .content').css('height', maxHeight);
});

// ************************************************************** mobile menu item click

$('#mobile-menu .header-menu a').click(function(event) {
    var that = $(this);
    if (that.siblings('.sub').length > 0) {
        event.preventDefault(event);
        that.parent('li').toggleClass('active').siblings('li').each(function() {
            $(this).removeClass('active').find('.sub').hide('400');
        });
        that.siblings('.sub').toggle('400');
    } else {
        $('#mobile-menu .menu-sandwich').click();
    }
});

// ************************************************************** callback open

$('.callback-open').click(function(event) {
    event.preventDefault(event);
    $('#callback').fadeIn(400);
});

$('#callback .close').click(function(event) {
    event.preventDefault(event);
    $('#callback').fadeOut('400');
});

// ************************************************************** header border

var headerHeight;
var sectionHeight;
var scrollPos;
var header = $('header');
var section1 = $('.section1');
var lineMove;
headerBottomLine();
$(window).on('resize', function() {
    headerBottomLine();
});


$(window).on('scroll', function() {
    headerBottomLine();
});

function headerBottomLine() {
    headerHeight =  header.outerHeight();
    scrollPos = $(window).scrollTop();
    sectionHeight = section1.outerHeight() - header.outerHeight();
    if (scrollPos < sectionHeight){
        lineMove = scrollPos*100/sectionHeight;
        header.find('.bottom-lines span').css('width', lineMove/2+'%');
    }  else {
        header.find('.bottom-lines span').css('width', '50%');
    }
}