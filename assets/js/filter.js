function testFun() {
    var list = $('.aparts_list .mCSB_container');
    var arr = [];
    list.find('.apart').each(function() {
        var price = parseInt($(this).find('.apart_info tr:nth-child(3) .num').html());
        if (price) {
            arr.push(price)
        }
    });
    if (arr.length) {
        $('.range-slider.prices').parent().css('display', 'block');
    } else {
        $('.range-slider.prices').parent().css('display', 'none');
    }
}

function filterApart(curr) {
    var form = $(curr).closest('form'),
        elem = $(curr);
    if (elem.is('input')) {
        $('input[name=price-from]').val('');
        $('input[name=price-to]').val('');
        $('input[name=full-area-from]').val('');
        $('input[name=full-area-to]').val('');
    }
    var data = form.serialize();
    $.ajax({
        url: '/test/ajax-apartments.html',
        data: data,
        success: function(res) {
            var leng = $(res).length,
                list = $('.aparts_list .mCSB_container');
            if (window.matchMedia("(max-width: 1024px)").matches) {
                list = $('.aparts_list');
            }
            // if (leng != 0) {
            //     setTimeout(function() {
            //         $('.range-slider').removeClass('disabled');
            //     }, 300);
            // }
            //crutch:check on missing price
            testFun();
            list.html(res);
            var prices = [],
                sizes = [];
            list.find('.apart').each(function() {
                var size = parseInt($(this).find('.apart_info tr:nth-child(1) .num').html()),
                    price = parseInt($(this).find('.apart_info tr:nth-child(3) .num').html());
                prices.push(price);
                sizes.push(size);
            });
            if (window.matchMedia("(max-width: 1024px)").matches) {
                $('.apart .media').each(function() {
                    $(this).slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        arrows: true,
                        speed: 600
                    });
                });

                $('.more_button').on('click', function() {
                    var apart = $(this).closest('.apart'),
                        moreInfo = apart.find('.more_info');
                    $(this).toggleClass('opened');
                    if ($(this).hasClass('opened')) {
                        $(this).html('<span>Свернуть</span><span class="arrow"></span>');
                    } else {
                        $(this).html('<span>Подробнее</span><span class="arrow"></span>');
                    }
                    moreInfo.slideToggle();
                });
            }
            var minPrice = getMinOfArray(prices) / 1000,
                maxPrice = getMaxOfArray(prices) / 1000,
                minSize = getMinOfArray(sizes),
                maxSize = getMaxOfArray(sizes);
            if (elem.is('input')) {
                if (isFinite(minPrice) || isFinite(maxPrice) || isFinite(minSize) || isFinite(maxSize)) {
                    //handles
                    $('.range-slider.prices .left-handle').attr('data-value', minPrice);
                    $('.range-slider.prices .right-handle').attr('data-value', maxPrice);
                    $('.range-slider.sizes .left-handle').attr('data-value', minSize);
                    $('.range-slider.sizes .right-handle').attr('data-value', maxSize);
                    //limits
                    $('.range-slider.prices .left-limit-value').attr('data-value', minPrice);
                    $('.range-slider.prices .right-limit-value').attr('data-value', maxPrice);
                    $('.range-slider.sizes .left-limit-value').attr('data-value', minSize);
                    $('.range-slider.sizes .right-limit-value').attr('data-value', maxSize);

                    $('.range-slider.prices .left-limit-value').data('value', minPrice);
                    $('.range-slider.prices .right-limit-value').data('value', maxPrice);
                    $('.range-slider.sizes .left-limit-value').data('value', minSize);
                    $('.range-slider.sizes .right-limit-value').data('value', maxSize);
                    // } else {
                    //     $('.range-slider').addClass('disabled');
                }
                initRangeFilter();
            }
        }
    });
}

function checkedRadio(curr) {
    var elem = $(curr),
        filter = elem.closest('.filter');
    filter.find('input[type=radio]').prop('checked', false);
    elem.prop('checked', true);
}

$('.aparts_filter input[type=radio]').on('click', function() {
    checkedRadio(this);
    filterApart(this);
});
$('.filter_aparts input[type=radio]').on('click', function() {
    checkedRadio(this);
    filterApart(this);
});
$('.range-slider .ui-slider-handle').on('click', function(e) {
    e.preventDefault();
});

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function initRangeFilter() {
    var leftLine = $('.ui-slider-range-left'),
        rightLine = $('.ui-slider-range-right'),
        centerLine = $('.ui-slider-range'),
        leftHandle = $('.left-handle'),
        rightHandle = $('.right-handle'),
        limitL = $('.left-limit-value'),
        limitR = $('.right-limit-value');

    leftHandle.removeClass('moved');
    rightHandle.removeClass('moved');

    if (window.matchMedia("(max-width: 1024px)").matches) {
        leftHandle.css('left', '0%').css({
            'width': '7.2vmin',
            'height': '7.2vmin',
            'margin-top': '-3.6vmin'
        });
        rightHandle.css({
            'width': '7.2vmin',
            'height': '7.2vmin',
            'margin-top': '-3.6vmin'
        });
    } else {
        leftHandle.css('left', '0%').css({
            'width': '2.61vw',
            'height': '2.61vw',
            'margin-top': '-1.305vw'
        });
        rightHandle.css({
            'width': '2.61vw',
            'height': '2.61vw',
            'margin-top': '-1.305vw'
        });
    }

    LHwidthProc = leftHandle.outerWidth() * 100 / $('.range-slider').width();
    RHwidthProc = rightHandle.outerWidth() * 100 / $('.range-slider').width();

    rightHandle.css('left', 100 - RHwidthProc + '%');

    leftLine.width(0).css('left', '0%');
    rightLine.width(0).css('left', '100%');
    limitL.hide();
    limitR.hide();

    centerRangeProc = 100 - LHwidthProc - RHwidthProc;
    centerLine.width(centerRangeProc + '%').css('left', leftHandle.outerWidth());
}

/*==================================== filter premises ================================================*/
$('.filter_premises input[type=radio]').on('click', function() {
    var floor = $(this).attr('data-floor');
    $('.floors .floor').hide();
    $('.floors .floor').eq(floor - 1).fadeIn();
    $('.premises_list').hide();
    var floorTop = $('.floors .floor').eq(floor - 1).offset().top;
    $('body').animate({ scrollTop: floorTop }, 500, 'swing');
});

$('.floor polygon, floor path, .floor rect').on('click', function() {
    var linkNum = $(this).data('link'),
        link = $(this).closest('div').find('a[data-link=' + linkNum + ']'),
        resource = link.data('resource');
    if (link.length != 0) {
        premiseAjax(resource);
    } else {
        var floorTop = $('.floors .floor').offset().top;
        $('body').animate({ scrollTop: floorTop }, 500, 'swing');
        $('.premises_list .premise').fadeOut(500);
    }
});

function premiseAjax(resource) {
    $.ajax({
        url: 'ajax-premises.html',
        type: 'GET',
        data: { 'id': resource },
        success: function(res) {
            var leng = res.length,
                list = $('.premises_list');
            console.log(res);
            if (leng != 0) {
                $('.premises_list').hide()
                    .html(res).fadeIn();
                var floorTop = $('.premises_list .premise').offset().top - 80;
                $('body').animate({ scrollTop: floorTop }, 500, 'swing');
            }
        }
    });
}
