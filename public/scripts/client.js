/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//createTweetElement that takes in a tweet object and is responsible for returning
//a tweet <article> element containing the entire HTML structure of the tweet.



$(document).ready(function () {

  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function (tweetObj) {
    const $tweet = $(`<article class = "tweet">

    <header>
      
      <div class = "userIcon">
        <p><img src = "${tweetObj.user.avatars}"></i></p>
      </div>
      <div>
        <p>${escape(tweetObj.user.name)}</p>
      </div>
      
      <div class="mention">
        <p>${escape(tweetObj.user.handle)}</p>
      </div>

    </header>

      <p>${escape(tweetObj.content.text)}</p>
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

  //take in an array of tweet objects and then appending each one to the #tweets-container
  const renderTweets = function (tweetObjArr) {
    //loop through tweets
    for (let tweetObj of tweetObjArr) {
      //call createTweetElement for each tweet
      const $tweet = createTweetElement(tweetObj);
      //append returned $tweet to #tweetContainer
      $('#tweetContainer').prepend($tweet);
    }
  };
  // renderTweets(data);

  // ------ form $ -------//
  $('form').on('submit', function (event) {
    //prevent default form submission behaviour
    event.preventDefault();
    //turn form data into query string (so the data format is readable to this server)
    const tweetEntry = $(this).serialize();


    console.log($(this).children('div').children('.counter').val());


    //implement validation before sending form data to the server
    //check: tweet message length, not too long or blank
    if ($(this).children('div').children('.counter').val() < 0) {
      //If validation is not met, notify the user by rendering a message on the page.
      alert("Tweet is too long.");
    } else if ($(this).children('div').children('.counter').val() > 139) {
      alert("Tweet is empty");
    } else {
      //send AJAX POST request to send form data to the server
      const url = '/tweets';
      $.ajax({
        url,
        method: 'POST',
        data: tweetEntry
      }).done(() => {
        // console.log("TWEETENTRY", tweetEntry.length)
        loadTweets();
        console.log('ajax callback called');
      }).fail(err => {
        console.log('ajax error caught');
        console.log(err);
      });

    }

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
  // loadTweets();












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