$(window).load(function () {
  var wrap = $('.wrapper');

  wrap.find('.left-side, .right-side, .footer').css({opacity: 1});

  // wrap.find('.header').addClass('header-anim');

  var items = wrap.find('.menu-item');
  var dur = 1800;
  items.each(function (i) {
    setTimeout(function () {
      items.eq(i).addClass('visible');
    }, dur);
    dur +=200
  });

});
