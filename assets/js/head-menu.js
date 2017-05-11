// $(window).load(function () {
//   var head = $('.header');
//   var subI = head.find('.menu-subitems');
//   var liArr = [];
//
//   subI.each(function (i) {
//     liArr[i] = [];
//     $(this).find('.menu-li').each(function (j) {
//       liArr[i][j] = $(this).offset().top;
//     })
//   });
//
//   head.find('.menu-li').offset({
//     top: head.find('.menu-item-lum').offset().top
//   });
//
//   subI.each(function (i) {
//     liArr[i].reverse();
//     del = 0;
//     $($(this).find('.menu-li').get().reverse()).each(function (j) {
//       $(this).delay(del).offset({top: liArr[i][j]});
//       del += 200;
//     })
//   })
// });
