$(window).load(function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  var isWheel = true;
  var hC;
  var gallery = wrap.find('.gallery-wrap');
  var imgS = wrap.find('.img-sector');
  var galleryH = 0;
  var galleryW = 0;
  var sector = 0;
  var curX, curY, diffX, diffY, sumX = 0, sumY = 0, prevX, prevY;


  //height content
  sizeTextContent();
  function sizeTextContent() {
    var form = wrap.find('form');
    var h2 = wrap.find('h2');
    var hTop = h2.height() + h2.offset().top + 40;
    var hBot = foot.height() + 80;
    hC = $(window).height() - hTop - hBot;
    content.find('.content-text, .img-sector').css({height: hC});
  }

  content.find('.no-follow').click(function (e) {
    e.preventDefault();
  });

  $(window).on('wheel', function (event) {
    event.preventDefault(event);
    e = window.event || event.originalEvent;
    if (isWheel) {
      isWheel = false;
      //culc height
      if (e.deltaY > 0) {//scroll bot
        galleryH -= imgS.height();
        sector++;
        //hiding mouse img
        wrap.find('.btn-more').css('opacity', '0');
      } else {
        galleryH += imgS.height();
        sector--;
      }

      if (galleryH > 0) {
        sector = 0;
        galleryH = 0
      } else if (galleryH < -(imgS.length - 1) * imgS.height()) {
        galleryH = -(imgS.length - 1) * imgS.height();
        sector = imgS.length - 1;
      }
      //calc width
      sector % 2 === 0 ? galleryW = 0 : galleryW = 1000 / 1170 * imgS.width();
      //translating gallery
      gallery.css({transform: 'translate('+ galleryW +'px, '+ galleryH +'px)'});


      setTimeout(function () {
        isWheel = true;
      }, 1300);
    }
  });

  //scaling images
  scaleImg();
  function scaleImg() {
    if ($(window).width() < 1920 || $(window).height() < 970) {
      wrap.find('.sector-wrap').css({transform: 'scale('+ ($(window).height() / 915 / 3 * 2) +')'})
    } else {
      wrap.find('.sector-wrap').css({transform: 'scale(1)'})
    }
  }

  //parallax
  gallery.mousemove(function (e) {
    curX = e.clientX;
    curY = e.clientY;
    diffX = curX - prevX;
    diffY = curY - prevY;
    if (diffX) {
      sumX += diffX;
    } else if (diffY) {
      sumY += diffY;
    }
    prevX = curX;
    prevY = curY;
    wrap.find('.content-text').css({transform: 'translate('+ sumX / -13 +'px, ' + sumY / -13 +'px)'});
    // gallery.find('.img-sector:eq('+ sector +') .img-wrap:eq(0) .img-shadow').css({transform: 'translate('+ sumX / 140 +'px, ' + sumY / 140 +'px)'});
    gallery.find('.img-sector:eq('+ sector +') .img-wrap:eq(1) .img-shadow').css({transform: 'translate('+ -(sumX / 60) +'px, ' + -(sumY / 60) +'px)'});
    gallery.find('.img-sector:eq('+ sector +') .img-wrap:eq(2) .img-shadow').css({transform: 'translate('+ sumX / 30 +'px, ' + sumY / 30 +'px)'});
  });


  //z-index on images
  for (var i = 0; i < imgS.length; i++) {
    (function (i) {
      wrap.find('.sector-wrap:eq('+ i +') .img-wrap:eq(0)').mouseenter(function () {
        wrap.find('.sector-wrap:eq('+ i +') .img-wrap:eq(2)').css('z-index', '-1');
      });
      wrap.find('.sector-wrap:eq('+ i +') .img-wrap:eq(0)').mouseleave(function () {
        wrap.find('.sector-wrap:eq('+ i +') .img-wrap:eq(2)').css('z-index', '0');
      });
    })(i);
  }


  // window.addEventListener('scrollUp', scrollToTop);
  // window.addEventListener('scrollDown', scrollToDown);

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
    scaleImg()
  });
});

//scrollbar
// (function ($) {
//   $(window).on("load", function () {
//     $(".content-text").mCustomScrollbar({
//       alwaysShowScrollbar: 1
//     });
//   });
// })(jQuery);




