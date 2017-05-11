$(window).load(function () {
  var wrap = $('.wrapper');
  var w = $(window).width();

  //width content
  widthContent();
  function widthContent() {
    w = $(window).width();
    if (w >= 1920) {
      wrap.find('.scale-js-1, .scale-js-2, .scale-js-3').css({transform: 'scale(1)'});

    } else {
      wrap.find('.scale-js-1').css({transform: 'scale(' + (w / 1920) + ')'});
      wrap.find('.scale-js-17').css({transform: 'scale(' + ((w / 1920) + ((1 - w / 1920) / 1.7)) + ')'});
      wrap.find('.scale-js-2').css({transform: 'scale(' + ((w / 1920) + ((1 - w / 1920) / 2)) + ')'});
      wrap.find('.scale-js-3').css({transform: 'scale(' + ((w / 1920) + ((1 - w / 1920) / 3 * 2)) + ')'});
      wrap.find('.scale-js-4').css({transform: 'scale(' + ((w / 1920) + ((1 - w / 1920) / 4 * 3)) + ')'});
      wrap.find('.scale-js-5').css({transform: 'scale(' + ((w / 1920) + ((1 - w / 1920) / 5 * 4)) + ')'});

    }
  }

  //footer-right
  footRight();
  function footRight() {
    var pointZ = (1800 - 992) / 400;
    if (w < 1800) {
      wrap.find('.foot-scale').css('transform', 'perspective(500px) translateZ(' + (-400 + (w - 992) / pointZ) + 'px)')
    } else {
      wrap.find('.foot-scale').css('transform', 'perspective(500px) translateZ(0)')
    }
  }


  //resing elems
  $(window).resize(function () {
    widthContent();
    footRight();
  });

});


