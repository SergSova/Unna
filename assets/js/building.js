$(window).on('load', function () {
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
  var index = 1;
  wrap.find('.img-wrap').click(function () {
    slider.css('display', 'block');
    //insert images with text
    var data = $(this).find('.img-data').html();
    slider.find('.slider-container').prepend(data);

    slider.find('.slide:eq(0)').addClass('active');
    sliderLen = $(this).find('.slide').length;

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
  //close slider
  wrap.find('.slider-close').click(function () {
    slider.css('display', 'none');
    slider.find('.gallery-list').remove();
    index = 1;
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






