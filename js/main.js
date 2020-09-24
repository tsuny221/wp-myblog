$(function () {
  // $(".slide").slick({
  //   arrows: false,
  //   dots: false,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   speed: 1500,
  //   fade: true,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: false,
  // });

  // フェードイン
  // リストを非表示
  $(".fadein").hide();
  // 繰り返し処理
  $(".fadein").each(function (i) {
    // 遅延させてフェードイン
    $(this)
      .delay(800 * i)
      .fadeIn(1000);
  });

  // スクロールでトップに戻る
  // #back-to-topを消す
  $("#back-to-top").hide();

  // スクロールが十分された時に#back-to-topを表示。スクロールされたら非表示
  $(window).scroll(function () {
    // this(window要素)がどれだけスクロールしたかをscrollTop()を使って値を取る
    $("#pos").text($(this).scrollTop());
    if ($(this).scrollTop() > 60) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  //#back-to-topがクリックされたら上に戻る
  // animateメソッドを使用
  $("#back-to-top a").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  //ローディング画面
  window.onload = function () {
    const load = document.getElementById("loading");
    load.classList.add("loaded");
  };
});
