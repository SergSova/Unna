$(window).on('load', function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  var w = $(window).width();

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
    var hC = $(window).height() - hTop - hBot;
    content.find('.content-text').css({height: hC});

    if ($(window).height() < 920) {
      form.css({transform: 'scale(' + hC / 416 + ')'});
    } else {
      form.css({transform: 'scale(1)'});
    }

    if (hC > form.height()) {
      form.css({
        top: (hC - form.height()) / 2
      });
    }

  }

  //make side smaller or bigger
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
    if($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      history.pushState(null, null, window.location.href.split('?').shift());
    } else {
      content.find('.active').removeClass('active');
      $(this).parent().addClass('active');
      var url = window.location.href.split('?').shift() + '?id='+ $(this).parent().attr('data-id') +'';
      history.pushState(null, null, url);
    }
  });

  //open action if instance id
  function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

  var id = getUrlVars()["id"];
  if (id >= 0) {
    content.find('[data-id="'+ id +'"]').addClass('active');
  }

  //resing elems
  $(window).resize(function () {
    sizeTextContent();
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

  //scrollBar
  $(".right-content").mCustomScrollbar({
    alwaysShowScrollbar: 1,
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

  //form controller
  wrap.find('textarea').parent().append('<div class="hide-textarea"><span></span></div>');


  var hideText = wrap.find('.hide-textarea span');
  //change height in textarea
  wrap.find('textarea').keyup(function () {
    hideText.html($(this).val());
    $(this).css({height: hideText.height() + 'px'});
  });


});





