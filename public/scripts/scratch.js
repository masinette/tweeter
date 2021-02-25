const days = function (ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // const answer = ms / (seconds / (minutes / (hours / days)));



  const answer = days;

  console.log("ANSWER", answer);
};
days(1614206440561);

// let day = Math.floor(1614206440561/1000.0)
let day = 18683 - Math.floor(1614206440561 / (60 * 60 * 24 * 1000));
console.log("DAY", day);