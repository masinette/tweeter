$(document).ready(function () {



  // $(this).siblings("div").children(".counter").val(remainingChar);

  
  $("#tweetContainer").hover(
    function () {
      $(this).children("article").children("header").children(".mention").css({ "color": "rgb(148, 170, 209)" });
    },
    function () {
      $(this).children("article").children("header").children(".mention").css({ "color": "#f4f1ec" });
    }
  );




});