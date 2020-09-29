$(window).scroll(function () {
  $(".scroll-up").each(function () {
    var elemOffset = $(this).offset().top, //指定した要素の位置
      scrollPos = $(window).scrollTop(), //スクロール量
      wh = $(window).height(); //ウィンドウの高さ

    if (scrollPos > elemOffset - wh + 100) {
      $(this).addClass("up");
    }
  });

  //aside/headerのフェードイン

  // this(window要素)がどれだけスクロールしたかをscrollTop()を使って値を取る
  $(this).scrollTop();
  if ($(this).scrollTop() > $(".main-visual").height() / 3.5) {
    $("header").css({ cssText: "opacity: 1 !important;" });
    $(".mobile-menu__btn").css({ cssText: "opacity: 1 !important;" });
    $(".side").addClass("inview");
  } else {
    $("header").css({ cssText: "opacity: 0 !important;" });
    $(".mobile-menu__btn").css({ cssText: "opacity: 0 !important;" });
    $("body").removeClass("menu-open");
    $(".side").removeClass("inview");
  }
});
