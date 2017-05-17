$(window).on('load', function() {


$('.info h2').click(function() {
    var that = $(this);
    var infoBlock = that.closest('.info');
    if (!infoBlock.hasClass('active')){
        that.siblings('.hidden').show('400');
        infoBlock.prev().addClass('active').next().addClass('active').next().addClass('active');
        if (infoBlock.index() == 5){
            setTimeout(function() {
                recalculateHeight();
            }, 500);
        }
    } else {
        that.siblings('.hidden').hide('400');
        infoBlock.removeClass('active');
        if (infoBlock.next().next().length > 0 && !infoBlock.next().next().hasClass('active') || infoBlock.next().next().length == 0){
            infoBlock.next().removeClass('active');
        }
        if (infoBlock.prev().prev().length > 0 && !infoBlock.prev().prev().hasClass('active') || infoBlock.prev().prev().length == 0){
            infoBlock.prev().removeClass('active');
        }
    }
}); 


// setting hidden text height
$(window).on('resize', function() {
    recalculateHeight();
});

function recalculateHeight() {
    $('.article').each(function() {
        var that = $(this);
        var hiddenText = that.find('.text .full');
        var shortText = that.find('.text .short');
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

var maxArticlesCount = $('.actions').data('all');

if (maxArticlesCount < 4){
    $('#loadMoreNews').fadeOut('400');
}

$('#loadMoreNews').click(function(event) {
    event.preventDefault(event);
    var offset = $('.actions .article').length;
    $.ajax({
        url: 'ajax-actions.html?limit=3&offset='+offset+'',
        type: 'GET',
        success: function(data) {
            $('.actions').append(data);
            recalculateHeight();
            $('.read-more').unbind('click', readMore);
            $('.read-more').bind('click', readMore);
            if ($('.actions .article').length == maxArticlesCount){
                $('#loadMoreNews').fadeOut('400');
            }
        }
    });
    
});

var urlHash = window.location.hash;
if (urlHash.length > 0){
    $(''+urlHash+' > h2').click();
}


});