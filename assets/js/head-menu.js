$(window).on('load', function () {
  var header = $('.header');
  var items = header.find('.menu-item');
  var startIndex;
  var startActive = true;
  var timeId


  //check to find active
  items.each(function () {
    if ($(this).hasClass('active')) {
      startIndex = $(this).index();
      $(this).find('.menu-subitems').addClass('active');
    }
  });

  items.hover(function () {
    if ($(this).index() == startIndex && $(this).hasClass('active')) {

    } else {
      if (startActive) {
        startActive = false;
        items.eq(startIndex).removeClass('active');
        timeId = setTimeout(function () {
          items.eq(startIndex).find('.menu-subitems').removeClass('active')
        }, 500);
      }
      clearTimeout(timeId);
      $(this)
        .addClass('active')
        .find('.menu-subitems').addClass('active');
    }
  });

  header.find('.menu-item').mouseleave(function () {
    $(this).removeClass('active');
    timeId = setTimeout(function () {
      $(this).find('.menu-subitems').removeClass('active')
    }.bind($(this)), 500)
  });
});
