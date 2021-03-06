$(window).on('load', function () {
  var wrap = $('.wrapper');
  if (wrap.find('.foot-menu').length) {
    var content = wrap.find('.content');
    var foot = wrap.find('.footer');
    var circles = foot.find('.circ');

    //alignment elems in footer
    var numActive = foot.find('.circ.active').index();
    setTimeout(footerMenu);
    function footerMenu() {
      for (var i = 0; i < circles.length; i++) {
        var circ = circles.eq(i);
        circ.find('span').offset({
          left: circ.offset().left - ((circ.find('span').width() - circ.width()) / 2),
          top: wrap.find('.segment').offset().top
        });
        //adding pre-active
        if (i < numActive / 2) {
          foot.find('.circ:eq('+ i +'), .segment:eq('+ i +')').addClass('pre-active');
        }
      }
    }

    //get size of foot-menu segment
    //w = 1750 -> 140
    //w = 992 -> 73
    var pointSeg = (1750 - 992) / (140 - 73);
    segmentSize();
    function segmentSize() {
      var w = $(window).width();
      if (w < 1750) {
        console.log(w - 992);
        foot.find('.segment').css({width: (w - 992) / pointSeg + 73 + 'px'});
      } else {
        foot.find('.segment').css({width: '140px'});
      }
    }


    wrap.find('.circ:eq(0) span').offset({
      left: wrap.find('.circ:eq(0)').offset().left
    });

    //deactive reload if elem is active
    circles.on('click', function () {
      if ($(this).hasClass('active')) {
        return false
      }
    });

//resing elems
    $(window).resize(function () {
      footerMenu();
      segmentSize();
    });

    //crutch for tehnicheskie harakteristiki
    circles.each(function () {
      if ($(this).find('span').html().toLowerCase() === 'технические характеристики') {
        // var arrSplit = $(this).find('span').html().split(' ');
        // $(this).find('span').html(arrSplit.join('<br>'));
        $(this).find('span').html('Тех. характеристики')
      }
    })
  }
});


