// setting hidden text height
$(window).on('load', function() {
    
// $('.article').each(function() {
//     var hiddenText = $(this).find('.text .full');
//     var shortText = $(this).find('.text .short');
//     shortText.css({
//         'max-height': hiddenText.height(),
//         'height': shortText.height(),
//         'min-height': shortText.height()
//     });
// });

recalculateHeight();

$(window).on('resize', function() {
    recalculateHeight();
});

function recalculateHeight() {
    $('.article').each(function() {
        var that = $(this);
        var hiddenText = $(this).find('.text .full');
        var shortText = $(this).find('.text .short');
        if (!that.hasClass('opened')){
            shortText.css({
                'height': 'auto',
                'min-height': '0',
                'transition': '0s'
            });
            shortText.css({
                'max-height': hiddenText.height(),
                'height': shortText.height(),
                'min-height': shortText.height(),
                'transition': '0.4s linear'
            });   
        } else {
            shortText.css({
                'height': 'auto',
                'min-height': '0',
                'transition': '0s'
            });
            shortText.css({
                'max-height': hiddenText.height(),
                'min-height': shortText.height(),
                'height': hiddenText.height(),
                'transition': '0.4s linear'
            });  
        }
    });
}

var readMore = function () {
    var that = $(this);
    var hiddenText = that.closest('.article').find('.text .full');
    var shortText = that.closest('.article').find('.text .short');
    if (!that.closest('.article').hasClass('opened')){
        that.find('span').html(that.find('span').data('hide-text'));
        that.closest('.article').addClass('opened');
        shortText.css('height', shortText.css('max-height'));
    } else {
        that.find('span').html(that.find('span').data('show-text'));
        that.closest('.article').removeClass('opened');
        shortText.css('height', shortText.css('min-height'));
    }
}

$('.read-more').bind('click', readMore);

var maxArticlesCount = $('.news').data('all');

$('#loadMoreNews').click(function(event) {
    event.preventDefault(event);
    var offset = $('.news .article').length;
    $.ajax({
        url: 'ajax-news.html?limit=3&offset='+offset+'',
        type: 'GET',
        success: function(data) {
            $('.news').append(data);
            recalculateHeight();
            $('.read-more').unbind('click', readMore);
            $('.read-more').bind('click', readMore);
            if ($('.news .article').length == maxArticlesCount){
                $('#loadMoreNews').fadeOut('400');
            }
        }
    });
    
});

});