$(".text-animation").each(function () {
  var newText = "";
  //文字列を取得し、余白を削除、さらに一文字づつ分割
  var text = $(this).text().trim().split("");
  //配列を格納する箱を用意

  //for文で一文字づつタグへに変換する
  for (let i = 0; i < text.length; i++) {
    newText += "<span>" + text[i] + "</span>";
  }
  // $(".text-animation").innerHTML = newText;これをjQueryでは以下のようにかける
  $(this).html(newText); //thisにしないと全ての".text-animation"に反映されてしまう！！
});
