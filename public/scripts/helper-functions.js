


//convert epoch time to day and minutes
const days = function (ms) {

  let now = Date.now() - ms;

  let day = Math.floor(now / (60 * 60 * 24 * 1000));
  let minutes = Math.floor(now / (60000));

  if (day > 1) {
    return `${day} days ago`;
  } else if (day === 1) {
    return `${day} day ago`;
  } else if (day < 1) {
    return `${minutes} minute(s) ago`;
  } else {
    return `today`;
  }
};

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//create a tweet element from data returned from user input
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

export { loadTweets, renderTweets, createTweetElement, escape, days };