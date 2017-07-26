$(window).on('load', function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  var w = $(window).width();
  var h = $(window).height();

  var specItems = wrap.find('.spec-item');


  //height content
  heightTextContent();
  function heightTextContent() {
    var indent;
    if (w >= 1800) {
      indent = 70
    } else if (w >= 1400) {
      indent = 50
    } else {
      indent = 30
    }
    var h2 = wrap.find('h2');
    var hTop = h2.height() + h2.offset().top + 40;
    var hBot = foot.height() + indent;
    text.css({height: $(window).height() - hTop - hBot});
  }


  //adding image frame
  var promiseImg = new $.Deferred();
  //frame pattern
  promiseImg.resolve($('body').append('<div class="img-expanded">' +
    '<div class="slider-close"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">' +
    '<path style="fill: none;stroke:#fff;stroke-width:1.5px;" d="M0,0 22,22M22,0 0,22 "></path></svg></div>' +
    '<div class="expanded-wrap"><img src="" alt=""></div></div>'));

  promiseImg.done(function () {
    var imgExp = $('.img-expanded');
    imgExp.click(function (e) {
      if (e.target.classList.contains('img-expanded')) {
        $(this).removeClass('active');
      }
    });
    //add img src
    text.find('img').on('click', function () {
      var src = $(this).attr('src');
      var prom = new $.Deferred();
      prom.resolve(imgExp
        .addClass('active')
        .find('img').attr('src', src));
      //scaling img based screen size
      prom.done(function () {
        if ($(window).height() < imgExp.find('img').height()) {
          imgExp.find('img').addClass('by-height');
        }
        //close button
        imgExp.find('.slider-close')
          .click(function () {
            imgExp.removeClass('active')
          }).offset({
          left: imgExp.find('img').offset().left + imgExp.find('img').width() - 60,
          top: imgExp.find('img').offset().top + 30
        });
      })
    });
    if (wrap.find('.unna-content').length > 0) {
      wrap.find('.unna-content img').off();
    }

  });
  //crutch
  // setTimeout(function () {
  //   if(wrap.find('.unna-content').length > 0) {
  //     console.log('unclick');
  //     wrap.find('.unna-content img').off();
  //   }
  // }, 1000);

  //alignment images in content
  if (text.find('p images')) {
    text.find('p images').parent().css({paddingRight: 0})
  }

//resing elems
  $(window).resize(function () {
    heightTextContent();
  });


  //change images in documents
  wrap.find('.docum-load').click(function () {
    $(this).find('i')
      .removeClass('icon-pdf-file-outlined-interface-symbol')
      .addClass('icon-download')
  });


  //redirect with scrollbar
  // var links = wrap.find('.foot-line .circ');
  // var curHref, prevHref, nextHref;
  //
  // links.each(function (i) {
  //   if ($(this).hasClass('active')) {
  //     curHref = i;
  //     prevHref = links.eq(curHref - 1).attr('href');
  //     nextHref = links.eq(curHref + 1).attr('href');
  //   }
  // });
  //
  // $(document).on('wheel', function (event) {
  //   event.preventDefault(event);
  //   e = window.event || event.originalEvent;
  //   if (e.deltaY > 0) {
  //     if (nextHref) window.location.href = nextHref
  //   } else {
  //     window.location.href = prevHref
  //   }
  // });


  var specArr = [];
  specItems.each(function () {
    var top = $(this)[0].getBoundingClientRect().top;
    specArr.push(top);
  });


  $(".content-text").mCustomScrollbar({
    scrollInertia: 300,
    mouseWheel: { scrollAmount: 60 },
    callbacks: {
      // onTotalScrollBack: function () {
      //   window.location.href = prevHref
      // },
      // onTotalScroll: function () {
      //   if (nextHref) window.location.href = nextHref
      // },
      // onInit: function () {
      //   $(document).off('wheel');
      // }
      whileScrolling: function () {
        //Specifications

        if(specItems.length > 0) {
          specItems.each(function () {
            var top = $(this)[0].getBoundingClientRect().top;
            if (top <= h / 9 * 8) {
              $(this).addClass('anim');
            }
          })
        }
      }
    }
  });

});


//scrollbar
(function ($) {
  $(window).on("load", function () {

  });
})(jQuery);
