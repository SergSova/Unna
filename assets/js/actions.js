$(window).on('load', function () {
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

    if(hC > form.height()) {
      form.css({
        top: (hC - form.height()) / 2
      });
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

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
  });

  //redirect with scrollbar
  var links= wrap.find('.foot-line .circ');
  var curHref, prevHref, nextHref;

  links.each(function (i) {
    if ($(this).hasClass('active')) {
      curHref = i;
      prevHref = links.eq(curHref - 1).attr('href');
      nextHref = links.eq(curHref + 1).attr('href');
    }
  });

  $(document).on('wheel', function (event) {
    event.preventDefault(event);
    e = window.event || event.originalEvent;
    if (e.deltaY > 0) {
      if (nextHref) window.location.href = nextHref
    } else {
      window.location.href = prevHref
    }
  });

  $(".right-content").mCustomScrollbar({
    alwaysShowScrollbar: 1,
    callbacks: {
      onTotalScrollBack: function(){
        window.location.href = prevHref
      },
      onTotalScroll: function(){
        if (nextHref) window.location.href = nextHref
      },
      onInit:function(){
        $(document).off('wheel');
      }
    }
  });
});





