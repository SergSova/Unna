$(window).load(function () {
  var menu = $('.header-menu');
  var items = menu.find('.menu-item');
  var startIndex;
  var startActive = true;

  // wrap.find('.header').addClass('header-anim');
  
  var dur = 1800;
  items.each(function (i) {
    setTimeout(function () {
      items.eq(i).addClass('visible');
    }, dur);
    dur +=200
  });


  items.each(function () {
    if ($(this).hasClass('active')) {
      startIndex = $(this).index();
      $(this).find('.menu-subitems').addClass('active');
    }
  });

  items.hover(function () {
    $('.content h1').css({opacity: 0});
    if ($(this).index() == startIndex && $(this).hasClass('active')) {

    } else {
      if (startActive) {
        startActive = false;
        items.eq(startIndex).removeClass('active');
        setTimeout(function () {
          items.eq(startIndex).find('.menu-subitems').removeClass('active')
        }, 500);
      }
      $(this)
        .addClass('active')
        .find('.menu-subitems').addClass('active');
    }
  });

  menu.find('.menu-item').mouseleave(function () {
    $('.content h1').css({opacity: 1});
    $(this).removeClass('active');
    setTimeout(function () {
      $(this).find('.menu-subitems').removeClass('active')
    }.bind($(this)), 500)
  });
});
