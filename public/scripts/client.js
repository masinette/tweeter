/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//createTweetElement that takes in a tweet object and is responsible for returning
//a tweet <article> element containing the entire HTML structure of the tweet.



$(document).ready(function () {

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
  };

  // const data =
  //  test data
  // Fake data taken from initial-tweets.json

  //  test

  //take in an array of tweet objects and then appending each one to the #tweets-container
  const renderTweets = function (tweetObjArr) {
    //loop through tweets
    for (let tweetObj of tweetObjArr) {
      //call createTweetElement for each tweet
      const $tweet = createTweetElement(tweetObj);
      //append returned $tweet to #tweetContainer
      $('#tweetContainer').append($tweet);
    }
  };
  // renderTweets(data);

  // ------ form $ -------//
  $('form').on('submit', function (event) {
    //prevent default form submission behaviour
    event.preventDefault();
    //turn form data into query string (so the data format is readable to this server)
    const tweetEntry = $(this).serialize();
    // console.log(tweetEntry);

    //send AJAX POST request to send form data to the server
    const url = '/tweets';
    $.ajax({
      url,
      method: 'POST',
      data: tweetEntry
    }).done(() => {
      // createTweetElement()
      console.log('ajax callback called');
    }).fail(err => {
      console.log('ajax error caught');
      console.log(err);
    });

});



    //fetch tweets from http://localhost:8080/tweets
    const loadTweets = function () {
      $.ajax({
        url: 'http://localhost:8080/tweets',
        method: 'GET'
      }).done((result) => {
        // console.log(result);
        renderTweets(result);
        console.log('ajax callback called');
      }).fail(err => {
        console.log('ajax error caught');
        console.log(err);
      });
    };
    loadTweets();












  // const $button = $('#load-more-posts');
  // $button.on('click', function () {
  //   console.log('Button clicked, performing ajax call...');
  //   $.ajax('more-posts.html', { method: 'GET' })
  //   .then(function (morePostsHtml) {
  //     console.log('Success: ', morePostsHtml);
  //     $button.replaceWith(morePostsHtml);
  //   });
  // });

});