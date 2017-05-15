$(window).load(function () {
  var wrap = $('.wrapper');
  var content = wrap.find('.content-wrap');
  var foot = wrap.find('.footer');
  var text = wrap.find('.content-text');

  //height content
  heightTextContent();
  function heightTextContent() {
    var h2 = wrap.find('h2');
    var hTop = h2.height() + h2.offset().top + 40;
    var hBot = foot.height() + 80;
    text.css({height: $(window).height() - hTop - hBot});
  }

  //alignment images in content
  if (text.find('p images')) {
    text.find('p images').parent().css({paddingRight: 0})
  }

//resing elems
  $(window).resize(function () {
    heightTextContent();
  });

  wrap.find('.docum-load').click(function () {
    $(this).find('i')
      .removeClass('icon-pdf-file-outlined-interface-symbol')
      .addClass('icon-download')
  })
});


//scrollbar
(function ($) {
  $(window).on("load", function () {
    $(".content-text").mCustomScrollbar();
  });
})(jQuery);
