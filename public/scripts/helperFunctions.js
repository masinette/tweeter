const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const days = function(ms) {
  // let day = 18683 - Math.floor(ms / (60 * 60 * 24 * 1000));

  let now = Date.now() - ms;
  
  console.log("NOW",now)


  let day = Math.floor(now / (60 * 60 * 24 * 1000));
  let minutes = Math.floor(now / (60000))

  console.log("DAY", day);
  console.log("minutes", minutes)
  if (day > 1) {
    return `${day} days ago`;
  } else if (day === 1) {
    return `${day} day ago`;
  } 
  else if (day < 1) {
    return `${minutes} minute(s) ago`;
  } 
  else {
    return `today`;
  }
};



module.exports = days;