$(window).load(function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');
  isWheel = true;
  var w = $(window).width();
  var fbWidth;

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
    var h1 = wrap.find('h1');
    var hTop = h1.height() + h1.offset().top;
    var hBot = foot.height() + indent;
    var hC = $(window).height() - hTop - hBot;
    content.find('.content-text').css({height: hC - 40, paddingTop: '40px'});

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

  content.find('.action-more').click(function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      history.pushState(null, null, window.location.href.split('?').shift());
    } else {
      content.find('.active').removeClass('active');
      $(this).parent().addClass('active');
      var url = window.location.href.split('?').shift() + '?id=' + $(this).parent().attr('data-id') + '';
      history.pushState(null, null, url);
    }
  });

  //open action if instance id
  function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }

  var id = getUrlVars()["id"];
  if (id >= 0) {
    content.find('[data-id="' + id + '"]').addClass('active');
  }


  //fb
  setTimeout(function () {

    $('body').prepend(
    '<div id="fb-root"></div>'+
      '<script>'+
      '(function (d, s, id) {'+
        'var js, fjs = d.getElementsByTagName(s)[0];'+
        'if (d.getElementById(id)) return;'+
        'js = d.createElement(s);'+
        'js.id = id;'+
        'js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.9";'+
        'fjs.parentNode.insertBefore(js, fjs);'+
      '}(document, \'script\', \'facebook-jssdk\'));'+
    '</script>'
    );

    if (w <= 1366) {
      fbWidth = 300
    } else if (w > 1366 && w < 1600) {
      //200 / 234
      fbWidth = Math.round((w - 1366) * (200 / 234) + 300);
    } else if (w > 1600) {
      fbWidth = 500
    }
    wrap.find('.fb-page').attr({'data-height': Math.round($(window).height() * .72), 'data-width': fbWidth});

  }, 3000);
//side definition
  content.on('mouseenter', 'div.ext', function () {
    if ($(this).hasClass('right-content')) {
      wrap.find('.smaller').removeClass('smaller');
      wrap.find('.left-content').addClass('smaller');
    } else if ($(this).hasClass('left-content')) {
      wrap.find('.smaller').removeClass('smaller');
      wrap.find('.right-content').addClass('smaller');
    }
  });

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





