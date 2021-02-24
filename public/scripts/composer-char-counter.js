$(document).ready(function () {

  //Using jQuery and an appropriate selector, register an event handler
  //to the textarea element for the form inside of the .new-tweet section.

  $("#tweet-text").on('input', function () {
    let charLimit = 140;
    let count = this.value.length;
    let remainingChar = charLimit - count;
    
    //update counter every time user inputs a character
    $(this).siblings("div").children(".counter").val(remainingChar);


    //if inputted characters are beyond limit, turn counter red, else turn grey
    if (remainingChar < 1) {
      $(this).siblings("div").children(".counter").css({ "color": "red" });
    } else {
      $(this).siblings("div").children(".counter").css({ "color": "#545149" });
    }
    
  });





});