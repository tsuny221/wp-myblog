//カットアニメーション
$("#scissors").on("click", function () {
  $(".cut").addClass("fall");
  $("#scissors")
    .children("img")
    .attr("src", "images/hasami-close.png")
    .css({ cssText: "width: 15px !important;" });
});
