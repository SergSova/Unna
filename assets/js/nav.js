$(window).load(function() {
    var wrap = $('.wrapper');
    var left = wrap.find('.left-side');
    var cube = wrap.find('.cube');
    var sandwich = wrap.find('.sandwich-wrap');
    var bmLangs = wrap.find('.bm-langs');

    $(window).resize(function() {

    });

    //left side
    var bmClose = true;
    wrap.find('.menu-sandwich').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('rotate');
        left.toggleClass('big');
        bmClose = !bmClose;
        bmItems();
        return false;
    });

    wrap.find('.panel-2, .panel-3').offset({
        left: sandwich.offset().left
    });


    //placing langs on big menu
    bmLangs.offset({
        top: sandwich.offset().top + sandwich.height() + 20,
        left: sandwich.offset().left + (sandwich.width() - bmLangs.width()) / 2
    });

    wrap.find('.lang-ru').click(function() {
        wrap.find('.lang-ua').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    wrap.find('.lang-ua').click(function() {
        wrap.find('.lang-ru').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    //placing padding for bm-columns
    wrap.find('.bm-column').css({ 'padding-top': sandwich.offset().top });

    //tel
    var tel = wrap.find('.header-tel').html();
    var telArr = tel.split('');
    var spanTel = [];
    var otherTel = [];
    for (var i = 1; i <= telArr.length; i++) {
        if (i < 8) {
            spanTel.unshift(telArr[telArr.length - i]);
            if (i === 2 || i === 4 || i === 7) {
                spanTel.unshift('&nbsp;');
            }
        } else {
            otherTel.unshift(telArr[telArr.length - i]);
            if (i === 10 || i === 12) {
                otherTel.unshift('&nbsp;');
            }
        }
    }
    spanTel = '<span>' + spanTel.join('') + '</span>';
    otherTel = otherTel.join('');
    wrap.find('.header-tel').html(otherTel + spanTel);

    //bm-sub-items opacity
    var timeIDs = [];

    function bmItems() {
        if (bmClose) {
            timeIDs.forEach(function(id) {
                clearTimeout(id);
            });
            wrap.find('.bm-sub-link').css({ opacity: 0 });
        } else {
            wrap.find('.bm-column').each(function() {
                var time = 200;
                $(this).find('.bm-sub-link').each(function() {
                    var item = $(this);
                    timeIDs.push(setTimeout(function() {
                        item.css({ opacity: 1 })
                    }, time));
                    time += 200
                })
            });
        }
    }

    var prev = 0;
    wrap.find('.bm-column ul').each(function() {
        var cur = $(this).offset().top;
        if (cur > prev) {
            wrap.find('.bm-column ul').offset({ top: cur });
            prev = cur;
        }
    });


    //bm-line
    wrap.find('.bm-js').mouseenter(function() {
        var top = $(this).offset().top;
        var height = $(this).height();
        $(this).parents('.bm-column').find('.bm-line').css({ height: top + height / 2 + 'px' });
        $(this).parents('.bm-column').find('.bm-circ').css({ top: top + height / 2 + 'px' });
    });

    wrap.find('.bm-js').mouseleave(function() {
        $(this).parents('.bm-column').find('.bm-line').css({ height: 0 });
        $(this).parents('.bm-column').find('.bm-circ').css({ top: '-7px' });
    });

    //bm offset
    wrap.find('.bm-wrap').offset({
        left: sandwich.offset().left + sandwich.width() + 20
    });

    //relocate by scroll
    var arrPath = [
        "/",
        "/aktivnyij-dom/",
        "/planirovki/",
        "/usloviya-pokupki/",
        "/galereya/",
        "/novosti/",
        "/kontaktyi.html"
    ];
    var path = window.location.pathname;
    var indexPath = arrPath.indexOf(path);

    if (indexPath > -1) {
        if (indexPath > 0 && indexPath < arrPath.length - 1) {
            $(window).on('wheel', function(event) {
                var e = window.event || event.originalEvent;
                if (e.deltaY < 0) {
                    window.location.href = arrPath[indexPath - 1]
                } else {
                    window.location.href = arrPath[indexPath + 1]
                }
            });
        } else if (indexPath == 0) {
            wrap.find('.btn-arrows-left').css({ visibility: 'hidden' });
            $(window).on('wheel', function(event) {
                var e = window.event || event.originalEvent;
                if (e.deltaY > 0) {
                    window.location.href = arrPath[indexPath + 1]
                }
            });
        } else if (indexPath == arrPath.length - 1) {
            wrap.find('.btn-arrows-right').css({ visibility: 'hidden' });
            $(window).on('wheel', function(event) {
                var e = window.event || event.originalEvent;
                if (e.deltaY < 0) {
                    window.location.href = arrPath[indexPath - 1]
                }
            });
        }
    }


    //enable anim-cube
    var animOn = true;
    cube.click(function() {
        var text = cube.find('.cube-text');
        animOn = !animOn;
        $(this).toggleClass('active');
        animOn ? text.html('отключить анимацию') : text.html('включить анимацию');
    });
});
