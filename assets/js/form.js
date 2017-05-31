var wrap = $('.wrapper');
wrap.find('textarea').parent().append('<div class="hide-textarea"><span></span></div>');

$(window).on('load', function () {
  var hideText = wrap.find('.hide-textarea span');
  //change height in textarea
  wrap.find('textarea').keyup(function () {
    hideText.html($(this).val());
    $(this).css({height: hideText.height() + 'px'});
  });
});
