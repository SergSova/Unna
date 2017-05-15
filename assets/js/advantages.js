$(window).load(function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  var h = $(window).height();
  //slider
  var slider = wrap.find('.slider');
  var sliderLen = slider.find('.slider-container img').length;
  var index;
  //
  var list = wrap.find('.advan-list');
  var sections = wrap.find('.list-section');
  var currentSection = 0;
  isWheel = true;

  //hidding SEO text
  if(h < 800) {
    wrap.find('.advan-text').css('display', 'none');
  }

  //height content
  sizeTextContent();
  function sizeTextContent() {
    var h2 = wrap.find('h2');
    var hTop = h2.height() + h2.offset().top + 40;
    var hBot = foot.height() + 80;
    var hC = $(window).height() - hTop - hBot;
    content.find('.content-text').css({height: hC});
    sectionsDistrib(hC);
    //width
    wrap.find('.advan-content').css({width: text.width() - 185 - 30});
  }

  //height distribution for sections
  function sectionsDistrib(h) {
    var subH = h / 9;
    for (var i = 0; i < sections.length; i++) {
      sections.eq(i).offset({top: list.offset().top + subH * i + 2})
        .find('svg').css({height: (subH - 13) + 'px'})
    }
  }

  //section activation
  sections.click(function () {
    activeSection($(this).index());
  });

  $(document).on('wheel', function (event) {
    event.preventDefault(event);
    e = window.event || event.originalEvent;
    var menu = wrap.find('.left-side').hasClass('big');
    if (isWheel && !menu) {
      isWheel = false;
      if (e.deltaY > 0) {
        currentSection++;
      } else {
        currentSection--;
      }

      //check current
      if (currentSection > 9) {
        //next page
        location.reload()
      } else if (currentSection < 0) {
        //preview page
        location.reload()
      }
      activeSection(currentSection);
      setTimeout(function () {
        isWheel = true;
      }, 1000);
    }
  });

  //change elems
  function activeSection(current) {
    if (!sections.eq(current).hasClass('active')) {
      wrap.find('.advan-list, .advan-content').find('.active').removeClass('active');
      sections.eq(current).addClass('active');
      currentSection = current;
      setTimeout(function () {
        wrap.find('.advan-content-wrap:eq(' + current + ')').addClass('active');
      }, 500)
    }
  }
  //adding active
  wrap.find('.advan-content-wrap:eq(0)').addClass('active');

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
    resizeImg();
  });

  ///slider
  //open slider
  wrap.find('.advan-img').click(function () {
    index = $(this).data('img');
    slider.css('display', 'block');
    slider.find('.slider-container').children('[data-img="'+ index +'"]').addClass('active');
    slider.find('.slider-content').children('[data-img="'+ index +'"]').addClass('active');
    //counter
    slider.find('.count-current').html(index);
    slider.find('.count-max').html(sliderLen);
    resizeImg();

  });
  //close slider
  wrap.find('.slider-close').click(function () {
    slider.css('display', 'none');
    slider.find('.active').removeClass('active');
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
    slider.find('.slider-container').children('[data-img="'+ index +'"]').addClass('active');
    slider.find('.slider-content').children('[data-img="'+ index +'"]').addClass('active');
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
        slider.find('.slider-container').css({display: 'block'}).children('[data-img="'+ index +'"]').removeClass('by-height');
      } else {
        slider.find('.slider-container').css({display: 'inline-block'}).children('[data-img="'+ index +'"]').addClass('by-height');
      }
    } else {
      slider.find('.slider-container').css({display: 'block'}).children('[data-img="'+ index +'"]').removeClass('by-height');
    }
  }

  //adding images in slider head
  wrap.find('.list-img').each(function (i) {
    wrap.find('.slider-logo:eq('+ i +')').html($(this).html())
      .css('color', '#00976f');
  });
  wrap.find('.annotation-head').each(function (i) {
    wrap.find('.slider-head:eq('+ i +')').html($(this).html())
  });
    wrap.find('.annotation-text').each(function (i) {
      wrap.find('.slider-text:eq('+ i +')').html($(this).html())
    });

});

