$(window).on('load', function () {
  var wrap = $('.wrapper');
  var items = wrap.find('.menu-item');
  var path = window.location.pathname;

  wrap.find('.left-side, .right-side, .footer').css({opacity: 1});

    //start anim
    if (path == '/') {
      setTimeout(function () {
        $('body').addClass('start-anim');
      }, 1500)
    } else {
      $('body').addClass('start-no');
      items.addClass('visible')
    }
});
