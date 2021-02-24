/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//createTweetElement that takes in a tweet object and is responsible for returning
//a tweet <article> element containing the entire HTML structure of the tweet.



$(document).ready(function () {

  console.log("hello");

  const createTweetElement = function (tweet) {
    const $tweet = $(`<article class="tweet">Hello world</article>`);
    // alert("HELLO");

    return $tweet;
  }







  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }
  const $tweet = createTweetElement(tweetData);








});