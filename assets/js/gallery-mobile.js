$('.gallery-history span').click(function() {
    var that = $(this);
    if (!that.parent().hasClass('active')){
        that.parent().addClass('active');
        that.siblings('.hidden').show(400);
        $('.slider').slick('setPosition');
        if (that.parent().hasClass('month')){
            setTimeout(function() {
                that.parent().addClass('sliderShow');
            }, 400);
        }
    } else {
        that.parent().removeClass('active sliderShow').find('.hidden').each(function() {
            $(this).parent().removeClass('active sliderShow');
            $(this).hide(400);
        });
    }
});

$('.section2 li > a').click(function(event) {
    var that = $(this);
    if (that.siblings('.hidden').length > 0){
        event.preventDefault(event);
        if (!that.parent().hasClass('active')){
            that.closest('li').addClass('active').siblings('li').each(function() {
                $(this).removeClass('active sliderShow');
                $(this).find('.hidden').hide('400').find('div').removeClass('active sliderShow');
            });
            that.siblings('.hidden').show('400', function () {
                $('.slider').slick('setPosition');
            });
            if(that.siblings('.hidden').children().hasClass('slider')){
                setTimeout(function() {
                    that.closest('li').addClass('sliderShow');
                }, 400);
            }
        } else {
            that.closest('li').removeClass('active sliderShow');
            that.siblings('.hidden').hide('400').find('.hidden').hide('400');
            that.siblings('.hidden').find('div').removeClass('active sliderShow');
        }
    }
});

$(window).on('load', function() {
    var urlHash = window.location.hash;
    if (urlHash.length > 0){
        $(''+urlHash+' > a').click();
    }
});

$('#mobile-menu a').click(function(event) {
    if ($(this).closest('.sub').length > 0 && $(this).closest('.sub').siblings('a').find('span').hasClass('active')){
        var urlHash = $(this).attr('href').replace($(this).closest('.sub').siblings('a').attr('href'),'');
        $(''+urlHash+' > a').click();
    }
});