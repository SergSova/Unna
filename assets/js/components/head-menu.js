$(window).on('load', function () {
  var wrap = $('.wrapper');
  var header = wrap.find('.header');
  var items = header.find('.menu-item');
  var startIndex;
  var timeId;


  header.hover(function () {
    wrap.addClass('darken');
  });
  header.mouseleave(function () {
    wrap.removeClass('darken');
  });

  //check to find active
  items.each(function () {
    if ($(this).hasClass('is-active')) {
      startIndex = $(this).index();
      $(this).find('.menu-subitems').addClass('is-active');
    }
  });

  items.hover(function () {
    if ($(this).index() == startIndex && $(this).hasClass('is-active')) {

    } else {
    //   if (startActive) {
    //     startActive = false;
    //     items.eq(startIndex).removeClass('is-active');
    //     timeId = setTimeout(function () {
    //       items.eq(startIndex).find('.menu-subitems').removeClass('is-active')
    //     }, 500);
    //   }
      clearTimeout(timeId);
      $(this)
        .addClass('is-active')
        .find('.menu-subitems').addClass('is-active');
    }
  });

  header.find('.menu-item').mouseleave(function () {
    $(this).removeClass('is-active');
    timeId = setTimeout(function () {
      $(this).find('.menu-subitems').removeClass('is-active')
    }.bind($(this)), 500)
  });
});
