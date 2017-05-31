$(window).on('load', function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  var w = $(window).width();
  var isWheel = true;
  var hC;
  var gallery = wrap.find('.gallery-wrap');
  var imgS = wrap.find('.img-sector');
  var galleryH = 0;
  var galleryW = 0;
  var sector = 0;
  var curX, curY, diffX, diffY, sumX = 0, sumY = 0, prevX, prevY;

  //redirect
  var links= wrap.find('.foot-line .circ');
  var curInd, prevHref, nextHref;

  links.each(function (i) {
    if ($(this).hasClass('active')) {
      curInd = i;
      prevHref = links.eq(curInd - 1).attr('href');
      nextHref = links.eq(curInd + 1).attr('href');
    }
  });

  //height content
  sizeTextContent();
  function sizeTextContent() {
    var indent;
    if (w >= 1800) {
      indent = 70
    } else if (w >= 1400) {
      indent = 50
    } else {
      indent = 30
    }
    var form = wrap.find('form');
    var h2 = wrap.find('h2');
    var hTop = h2.height() + h2.offset().top + 40;
    var hBot = foot.height() + indent;
    hC = $(window).height() - hTop - hBot;
    content.find('.content-text, .img-sector').css({height: hC});
  }

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
        wrap.find('.scr-more').css('opacity', '0');
      } else {
        galleryH += imgS.height();
        sector--;
      }
      //redirection
      if (sector < 0) {
        window.location.href = prevHref
      } else if (sector > (imgS.length - 1)) {
        if (nextHref) window.location.href = nextHref
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

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
    scaleImg()
  });



  ///slider

  var slider = wrap.find('.slider');
  var sliderLen = wrap.find('.img-wrap').length;

  //slider filling
  var galleryList = '';
  wrap.find('.img-wrap .img-data').each(function () {
    galleryList += $(this).html();
  });
  wrap.find('.slider-container').prepend('<div class="gallery-list">' + galleryList + '</div>');

  //open slider

  var index;
  wrap.find('.img-wrap').click(function () {
    index = $(this).data('img');
    slider.find('.slide:eq('+ (index - 1) +')').addClass('active');
    slider.css('display', 'block');

    //align elems
    setTimeout(function () {
      slider.find('.slide-text').offset({
        left: slider.find('img').offset().left + 30
      });
      slider.find('.slider-close').offset({
        left: slider.find('img').offset().left + slider.find('img').width() - 60
      })
    });


    //counter
    slider.find('.count-current').html(index);
    slider.find('.count-max').html(sliderLen);
    resizeImg();

  });

  //close slider if miss click
  wrap.find('.slider-wrap').click(function (e) {
    if (e.target.classList.value == 'slider-wrap') {
      slider.css('display', 'none').find('.slide.active').removeClass('active');
    }
  });

  //close slider
  wrap.find('.slider-close').click(function () {
    slider.css('display', 'none').find('.slide.active').removeClass('active');
  });
  //paging
  wrap.find('.slider-right').click(function () {
    index++;
    sliding();
  });
  wrap.find('.slider-left').click(function () {
    index--;
    sliding();
  });
  function sliding() {
    // check index
    if (index > sliderLen) {
      index = 1
    } else if (index < 1) {
      index = sliderLen
    }
    // change image
    slider.find('.count-current').html(index);
    slider.find('.active').removeClass('active');
    slider.find('.slide').eq(index - 1).addClass('active');
    resizeImg();
  }

  //resize slider image
  function resizeImg() {
    var w = $(window).width();
    var h = $(window).height();
    var imgRatio = 1400 / 940;
    var windowRatio = w / h;

    if (w < 1400 || h < 940) {
      if(imgRatio > windowRatio) {
        slider.find('.slider-container').css({display: 'block'}).find('img').removeClass('by-height');
      } else {
        slider.find('.slider-container').css({display: 'inline-block'}).find('img').addClass('by-height');
      }
    } else {
      slider.find('.slider-container').css({display: 'block'}).find('img').removeClass('by-height');
    }
  }

});





