// Set the date we're counting down to
var countDownDate = new Date("October 29 , 2020 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    "<div class='p-2'>" +
    hours +
    " <br> <small> hours </small> </div>" +
    "<div class='p-2'>" +
    minutes +
    "<br><small> minutes </small> </div>" +
    "<div class='p-2'>" +
    seconds +
    "<br><small> seconds </small></div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML =
      "<div class='yt-embed'>" +
      // "<iframe class='yt-window' src='https://www.youtube.com/embed/CXLGWnLahdg' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" +
      // "<div class='count-btn'><a href='https://www.youtube.com/watch?v=S5Bt7PUgLL8&ab_channel=Make-a-Ton2020'>Continue watching on Youtube to interact with the speakers!</a></div>" +
      "<div class='click-btn'><a href='https://www.youtube.com/watch?v=oS1BTuuAeCs'>Stream on Youtube</a></div>" +
      "</div>";
    document.getElementById("tuneText").style.display = "none";
  }
}, 1000);
