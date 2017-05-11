function filterApart(curr){
    var form = $(curr).closest('form'),
        elem = $(curr);
    if(elem.is('input')) {
        $('input[name=price-from]').val('');
        $('input[name=price-to]').val('');
        $('input[name=full-area-from]').val('');
        $('input[name=full-area-to]').val('');
    }
    var data = form.serialize();
    $.ajax({
        url: '/test/ajax-apartments.html',
        data: data,
        success: function(res){
            var leng = $(res).length,
                list = $('.aparts_list .mCSB_container');
            if(leng != 0) {
                setTimeout(function(){
                    $('.range-slider').removeClass('disabled');
                }, 300);
            }
            list.html(res);
            var prices = [],
                sizes = [];
            list.find('.apart').each(function(){
               var price = parseInt($(this).find('.apart_info tr:nth-child(1) .num').html()),
                    size = parseInt($(this).find('.apart_info tr:nth-child(3) .num').html());
                prices.push(price);
                sizes.push(size);
            });
            var minPrice = getMinOfArray(prices),
                maxPrice = getMaxOfArray(prices),
                minSize = getMinOfArray(sizes)/1000,
                maxSize = getMaxOfArray(sizes)/1000;
            if(elem.is('input')) {
                if(isFinite(minPrice) || isFinite(maxPrice) || isFinite(minSize) || isFinite(maxSize)) {
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
                } else {
                    $('.range-slider').addClass('disabled');
                }
                initRangeFilter();
            }
        }
    });
}
$('.aparts_filter input[type=radio]').on('click', function(){
    filterApart(this);
});
$('.range-slider .ui-slider-handle').on('click', function(e){
    e.preventDefault();
});
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function initRangeFilter(){
    var leftLine = $('.ui-slider-range-left'),
        rightLine = $('.ui-slider-range-right'),
        centerLine = $('.ui-slider-range'),
        leftHandle = $('.left-handle'),
        rightHandle = $('.right-handle'),
        limitL = $('.left-limit-value'),
        limitR = $('.right-limit-value');

    leftHandle.removeClass('moved');
    rightHandle.removeClass('moved');


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
    LHwidthProc = leftHandle.outerWidth()*100/$('.range-slider').width();
    RHwidthProc = rightHandle.outerWidth()*100/$('.range-slider').width();

    rightHandle.css('left', 100 - RHwidthProc + '%');

    leftLine.width(0).css('left', '0%');
    rightLine.width(0).css('left', '100%');
    limitL.hide();
    limitR.hide();

    centerRangeProc = 100 - LHwidthProc - RHwidthProc;
    centerLine.width(centerRangeProc + '%').css('left', leftHandle.outerWidth());
}