// function nextJoke() {
//   alert("hoo")
// }

fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jokedata) => {
    const jokeText = jokedata.attachments[0].text;
    const jok = document.getElementById("a");
    jok.innerHTML = jokeText;
  });
document.addEventListener("DOMContentLoaded", function () {
  var btn = this.getElementById("myBtn");
  btn.addEventListener("click", function () {
    fetch("https://icanhazdadjoke.com/slack")
      .then((data) => data.json())
      .then((jokedata) => {
        const jokeText = jokedata.attachments[0].text;
        const jok = document.getElementById("a");
        jok.innerHTML = jokeText;
      });  
  });
});
