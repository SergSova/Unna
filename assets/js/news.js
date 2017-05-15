$(window).load(function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  isWheel = true;
  var w = $(window).width();
  var fbWidth;

  //height content
  sizeTextContent();
  function sizeTextContent() {
    var form = wrap.find('form');
    var h1 = wrap.find('h1');
    var hTop = h1.height() + h1.offset().top;
    var hBot = foot.height() + 40;
    var hC = $(window).height() - hTop - hBot;
    content.find('.content-text').css({height: hC - 40, paddingTop: '40px'});

    if ($(window).height() < 920) {
      form.css({transform: 'scale('+ hC / 416 +')'});
    } else {
      form.css({transform: 'scale(1)'});
    }

    if(hC > form.height()) {
      form.css({
        top: (hC - form.height()) / 2
      });
    }

  }

  //fb
  if (w <= 1366) {
    fbWidth = 300
  } else if (w > 1366 && w < 1600) {
    //200 / 234
    fbWidth = Math.round((w - 1366) * (200 / 234) + 300);
  } else if (w > 1600) {
    fbWidth = 500
  }
  wrap.find('.fb-page').attr({'data-height': Math.round($(window).height() * .72), 'data-width': fbWidth});

//side definition
  content.on('mouseenter', 'div.ext', function () {
    if ($(this).hasClass('right-content')) {
      wrap.find('.smaller').removeClass('smaller');
      wrap.find('.left-content').addClass('smaller');
    } else if ($(this).hasClass('left-content')) {
      wrap.find('.smaller').removeClass('smaller');
      wrap.find('.right-content').addClass('smaller');
    }
  });


  content.find('.action-more').click(function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
  });

  content.find('.no-follow').click(function (e) {
    e.preventDefault();
  });

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
  });

});

//scrollbar
(function ($) {
  $(window).on("load", function () {
    $(".right-content").mCustomScrollbar({
      alwaysShowScrollbar: 1
    });
  });
})(jQuery);





