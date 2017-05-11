$(window).load(function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  isWheel = true;

  //height content
  sizeTextContent();
  function sizeTextContent() {
    var form = wrap.find('form');
    var h2 = wrap.find('h2');
    var hTop = h2.height() + h2.offset().top + 40;
    var hBot = foot.height() + 80;
    var hC = $(window).height() - hTop - hBot;
    content.find('.content-text').css({height: hC});

    if ($(window).height() < 920) {
      form.css({transform: 'scale('+ hC / 416 +')'});
    } else {
      form.css({transform: 'scale(1)'});
    }
  }

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

  // $(document).on('wheel', function (event) {
  //   event.preventDefault(event);
  //   e = window.event || event.originalEvent;
  //   if (isWheel) {
  //     isWheel = false;
  //     if (e.deltaY > 0) {
  //       currentSection++;
  //     } else {
  //       currentSection--;
  //     }
  //
  //     //check current
  //     if (currentSection > 9) {
  //       //next page
  //       location.reload()
  //     } else if (currentSection < 0) {
  //       //preview page
  //       location.reload()
  //     }
  //     activeSection(currentSection);
  //   }
  //   setTimeout(function () {
  //     isWheel = true;
  //   }, 1000);
  // });
  // window.addEventListener('scrollUp', scrollToTop);
  // window.addEventListener('scrollDown', scrollToDown);

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




