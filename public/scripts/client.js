/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//createTweetElement that takes in a tweet object and is responsible for returning
//a tweet <article> element containing the entire HTML structure of the tweet.



$(document).ready(function () {

  console.log("hello");

  const createTweetElement = function (tweetObj) {
    const $tweet = $(`<article class = "tweet">

    <header>
      
      <div class = "userIcon">
        <p><img src = "${tweetObj.user.avatars}"></i></p>
      </div>
      <div>
        <p>${tweetObj.user.name}</p>
      </div>
      
      <div class="mention">
        <p>${tweetObj.user.handle}</p>
      </div>

    </header>

      <p>${tweetObj.content.text}</p>
    <footer>
      <div>
      <p>${tweetObj.created_at} days ago</p>
     </div>
      <div>
        <p>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </p>
      </div>
    </footer>

    </article>`);

    return $tweet;
  }





  //  test data
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  //  test



  //taking in an array of tweet objects and then appending each one to the #tweets-container
  const renderTweets = function (tweetObjArr) {
    //loop through tweets
    for (let tweetObj of tweetObjArr) {
      //call createTweetElement for each tweet
      const $tweet = createTweetElement(tweetObj);
      //append returned $tweet to #tweetContainer
      $('#tweetContainer').append($tweet);
    }
  }
  renderTweets(data);



});