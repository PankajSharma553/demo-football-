
// tab selcted
$('.tab').on('click', function (evt) {
  evt.preventDefault();
  $('.tab').removeClass('active');
  $(this).addClass('active');
  var sel = $(this).attr('data-toggle-target');
  $('.tab-content').removeClass('active');
  $(sel).addClass('active');
});
$(".profile").click(function () {
  $(this).find(".dropdown").slideToggle();
});

