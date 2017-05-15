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