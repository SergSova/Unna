$(window).on('load', function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  var w = $(window).width();

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
    text.find('img').click(function () {
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
  });


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

  $(".content-text").mCustomScrollbar({
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
    }
  });

});


//scrollbar
(function ($) {
  $(window).on("load", function () {

  });
})(jQuery);
