// ページトップボタン
$(function () {
  const pageTop = $(".cta-fixed");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
// フッター手前でストップ
$(document).ready(function () {
  $(".cta-fixed").hide();
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    contantHeight = $(".copyright").innerHeight() + 510;
    footHeight = contantHeight;
    if (scrollHeight - scrollPosition <= footHeight) {
      $(".cta-fixed").css({
        position: "absolute",
        bottom: footHeight,
      });
    } else {
      $(".cta-fixed").css({
        position: "fixed",
        bottom: "0",
      });
    }
  });
});
