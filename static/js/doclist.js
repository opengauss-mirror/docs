$(function ($) {
  const lang = location.href.split('/')[3];
  $('.h5-right>.icon-lang').click(function (e) {
    $(this).find('.option').show();
    $(document).one('click', function () {
      $(this).find('.option').hide();
    });
    e.stopPropagation();
  });
  $('#LTS-value').click(function () {
    $(this).toggleClass('active');
    if ($(this).attr('class')) {
      $('.doc-box').addClass('active');
      $('.doc-box>.version').not("[key*='LTS']").hide();
      $('.doc-box>.version').removeClass('active');
      $(".doc-box>.version[index='94']").addClass('active');
      $('.doc-catalog>.list').hide();
      $('.doc-catalog').find("[index='94']").show();
    } else {
      $('.doc-box').removeClass('active');
      $('.doc-box>.version').not("[key*='LTS']").show();
    }
  });
  $('.doc-box>.version').click(function () {
    $('.doc-box>.version').removeClass('active');
    $(this).addClass('active');
    var index = $(this).attr('index');
    $('.doc-catalog>.list').hide();
    $('.doc-catalog')
      .find('[index=' + index + ']')
      .show();
  });
  $('.nav-menu .sidebar,.nav-menu .h5-right')
    .find('.home')
    .click(function () {
      let currentUrl = window.location.pathname;
      if (currentUrl == '/' + lang + '/') {
        return false;
      } else {
        window.location.href = '/' + lang + '/';
      }
    });
});
