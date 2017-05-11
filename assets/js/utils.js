lightbox.option({
   'albumLabel': '%1/%2',
    'positionFromTop': 0,
    'wrapAround': true,
    'resizeDuration': 300
});
$('a').on('click',function(){
   if($(this).attr('data-lightbox')) {
       $('.wrapper').addClass('lightboxOpened');
   }
});
$(window).on('resize', function(){
   $('#lightboxOverlay').hide();
   $('#lightbox').hide();
   $('.wrapper').removeClass('lightboxOpened');
});
$('#lightbox, #lightbox .lb-close').on('click', function(){
    $('.wrapper').removeClass('lightboxOpened');
});