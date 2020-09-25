//フェードイン
$(function () {
  $(".fade-in").addClass("inview");
});

//aside/headerのフェードイン
$(window).scroll(function () {
  // this(window要素)がどれだけスクロールしたかをscrollTop()を使って値を取る
  $(this).scrollTop();
  if ($(this).scrollTop() > $(".slider").height()) {
    $("header").css({ cssText: "opacity: 1 !important;" });
    $(".side").addClass("inview");
  } else {
    $("header").css({ cssText: "opacity: 0 !important;" });
    $("body").removeClass("menu-open");
    $(".side").removeClass("inview");
  }
});
