//ハンバーガーメニュー
$(".mobile-menu__btn").on("click", function () {
  $("body").toggleClass("menu-open");
});

$(window).scroll(function () {
  // this(window要素)がどれだけスクロールしたかをscrollTop()を使って値を取る
  $(this).scrollTop();
  if ($(this).scrollTop() > 300) {
    $(".mobile-menu__btn").fadeIn();
  } else {
    $(".mobile-menu__btn").fadeOut();
  }
});
