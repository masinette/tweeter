/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


//createTweetElement that takes in a tweet object and is responsible for returning
//a tweet <article> element containing the entire HTML structure of the tweet.



$(document).ready(function () {

  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const days = function (ms) {
    let day = 18683 - Math.floor(ms / (60 * 60 * 24 * 1000));
    if (day > 1) {
      return `${day} days ago`;
    } else if (day === 1) {
      return `${day} day ago`;
    } else {
      return `today`;
    }
  };
  days(1614206440561);


  const createTweetElement = function (tweetObj) {
    const $tweet = $(`<article class = "tweet">

    <header>
      
    <div class = "userNameWrap">
      <div class = "userIcon">
        <div><img src = "${tweetObj.user.avatars}"></i></div>
      </div>

      <div>
        <p>${escape(tweetObj.user.name)}</p>
      </div>
    </div>

      <div>
        <p class = "handle">${escape(tweetObj.user.handle)}</p>
      </div>

    </header>

      <p>${escape(tweetObj.content.text)}</p>
    <footer>
      <div>
      <p>${days(tweetObj.created_at)}</p>
     </div>
      <div class = "socialLinks">
        <div class = "hidden">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
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


    // console.log($(this).children('div').children('.counter').val());



    //implement validation before sending form data to the server
    //check: tweet message length, not too long or blank
    if ($(this).children('div').children('.counter').val() < 0) {
      //If validation is not met, notify the user by rendering a message on the page.
      // alert("Tweet is too long.");
      // $(this).siblings('.errorMessage').css({'display': 'inline-block'});
      $(this).siblings('.errorMessage').slideUp(0, function () { });
      $(this).siblings('.errorMessage').empty().append(`\u{26A0} ERROR: Tweet is too long. \u{26A0}`);
      $(this).siblings('.errorMessage').slideDown("slow", function () { });


    } else if ($(this).children('div').children('.counter').val() > 139) {
      // alert("Tweet is empty");
      $(this).siblings('.errorMessage').slideUp(0, function () { });
      $(this).siblings('.errorMessage').empty().append(`\u{26A0} ERROR: Tweet is empty. \u{26A0}`);
      $(this).siblings('.errorMessage').slideDown("slow", function () { });

    } else {

      $(this).siblings('.errorMessage').slideUp(0, function () { });

      // $(this).children("#tweet-text").css({'color':'purple'});


      //send AJAX POST request to send form data to the server
      const url = '/tweets';
      $.ajax({
        url,
        method: 'POST',
        data: tweetEntry
      }).done(() => {
        $(this).children("textarea").val("");
        // console.log("TWEETENTRY", tweetEntry.length)
        ($(this).children('div').children('.counter').val(140));
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