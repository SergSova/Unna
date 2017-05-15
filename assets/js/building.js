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
      sector % 2 === 0 ? galleryW = 0 : galleryW = -760 / 1200 * imgS.width();
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

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
    scaleImg()
  });



  ///slider
  //open slider
  var slider = wrap.find('.slider');
  var sliderLen;
  var index;
  var indexIn;
  wrap.find('.img-wrap').click(function () {
    index = $(this).find('img').data('img');
    indexIn = slider.find('.slider-container').children('[data-img="'+ index +'"]').find('img:eq(0)').data('img-in');
    sliderLen = slider.find('.slider-container').children('[data-img="'+ index +'"]').find('img').length;

    slider.css('display', 'block');
    slider.find('.slider-container')
      .children('[data-img="'+ index +'"]').addClass('active')
      .find('img:eq(0)').addClass('active-in');
    slider.find('.slider-top').children('[data-img="'+ index +'"]').addClass('active')
      .children('[data-img-in="'+ indexIn +'"]').addClass('active-in');
    //counter
    slider.find('.count-current').html(indexIn);
    slider.find('.count-max').html(sliderLen);
    resizeImg();

  });
  //close slider
  wrap.find('.slider-close').click(function () {
    slider.css('display', 'none');
    slider.find('.active').removeClass('active');
    slider.find('.active-in').removeClass('active-in');
  });
  //paging
  wrap.find('.slider-right').click(function () {
    indexIn++;
    sliding();
  });
  wrap.find('.slider-left').click(function () {
    indexIn--;
    sliding();
  });
  function sliding() {
    // check index
    if (indexIn > sliderLen) {
      indexIn = 1
    } else if (indexIn < 1) {
      indexIn = sliderLen
    }
    console.log(indexIn);
    // change image
    slider.find('.count-current').html(indexIn);
    slider.find('.active-in').removeClass('active-in');
    slider.find('.slider-container').children('[data-img="'+ index +'"]').addClass('active')
      .find('[data-img-in="'+ indexIn +'"]').addClass('active-in');
    slider.find('.slider-top').children('[data-img="'+ index +'"]').addClass('active')
      .children('[data-img-in="'+ indexIn +'"]').addClass('active-in');
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






