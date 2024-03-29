$(document).ready(function () {
  document.getElementById(
    "hero-sponsors-container"
  ).innerHTML = generateSponsorsHeroSection(sponsorsList);
  sponsorsHeroAnimtaion();

  document.getElementById("timelinenew").innerHTML = before_day(
    before_day_events
  );

  document.getElementById("sponsorsRoot").innerHTML = generateSponsors(
    sponsorsList
  );

  faq.forEach((ele) => {
    var card = `


    
    <div class="toggle-title ">
        <h3 class="title-name accordion">
            ${ele.ques}
        </h3>
    </div>
    <div class=" panel" id="panel">
        <p>${ele.ans}</p>
    </div>
    

`;
    let div = document.createElement("div");
    div.className = "toggle";
    let ref = document.getElementById("faqq");
    div.innerHTML = card;
    ref.appendChild(div);
  });

  // accordian start
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      let ActivePanels = document.getElementsByClassName("panel-active");

      var panel = this.parentElement.nextElementSibling;
      panel.style = "";

      panel.classList.toggle("panel");
      panel.classList.toggle("panel-active");

      hideAll(ActivePanels, panel);
    });
  }
  function hideAll(ActivePanels, exceptThis) {
    var arr = Array.from(ActivePanels);
    arr.forEach((panel) => {
      if (panel != exceptThis) {
        panel.classList.toggle("panel");
        panel.classList.toggle("panel-active");
      }
    });
  }
});

// /* Section for Naseem */

// /* End of Section for Naseem */

// /* Section for Kiran */
// events
function events_day1() {
  let html = "";
  schedule_day1.forEach((ele) => {
    html += `
      <div class="event-left">
        <div class="dot-right"></div>
          <p class="time">${ele.Time}</p>
          <p class="event-info">${ele.Event}</p>
        </div>
        <div class="space-div"></div>
      `;
  });
  return html;
}

function events_day2() {
  let html = "";
  schedule_day2.forEach((ele) => {
    html += `
      <div class="event-right">
        <div class="dot-left"></div>
          <p class="time">${ele.Time}</p>
          <p class="event-info">${ele.Event}</p>
        </div>
      </div>
      <div class="space-div"></div>
      `;
  });
  return html;
}

function before_day() {
  let html = "";
  before_day_events.forEach((ele) => {
    html += `
    <div class="containernew leftnew lax" data-lax-preset="fadeIn blurIn-5">
    <div class="contentnew">
      <h2>${ele.Right.Date}</h2>
      <h3>${ele.Right.Event}</h3>
      <h4 style = 'color: white;'>${ele.Right.by}</h4>
      <p>${ele.Right.time}</p>
    </div>
  </div>
  <div class="containernew rightnew lax" data-lax-preset="fadeIn blurIn-5">
    <div class="contentnew">
    <h2>${ele.left.Date}</h2>
      <h3>${ele.left.Event}</h3>
      <h4 style = 'color: white;'>${ele.left.by}</h4>
      <p>${ele.left.time}</p>
    </div>
  </div>
      `;
  });
  return html;
}

// /* End of Section for Kiran */

// /* Section for Abhinav */

window.onload = () => {
  // for faq
  faq.forEach((ele) => {
    var card = `


    
    <div class="toggle-title ">
        <h3 class="title-name accordion">
            ${ele.ques}
        </h3>
    </div>
    <div class=" panel" id="panel">
        <p>${ele.ans}</p>
    </div>
    

`;
    let div = document.createElement("div");
    div.className = "toggle";
    let ref = document.getElementById("faqq");
    div.innerHTML = card;
    ref.appendChild(div);
  });

  // accordian start
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      hideAll(this);

      // this.classList.toggle("active");

      var panel = this.parentElement.nextElementSibling;
      hideAll(this);
      if (panel.style.maxHeight === "100%") {
        panel.style.maxHeight = 0;
      } else {
        panel.style.maxHeight = "100%";
      }
      hideAll(this);
    });
  }

  // accordian end

  // init faq

  // faq end
};

function hideAll(exceptThis) {
  for (var i = 0; i < acc.length; i++) {
    if (acc[i] !== exceptThis) {
      acc[i].classList.remove("active");
      acc[i].parentElement.nextElementSibling.style.maxHeight = 0;
    }
  }
}

// /* End of Section for Abhinav */

// /* Section for Ajal */

function generateSponsors() {
  let html = "";
  sponsorsList.forEach((doc) => {
    html += `
      <div class="my-3 col-lg-4 col-md-6 col-xl-3 align-content-center">
           <img src="${doc.photo}" class="img-fluid z-depth-1 sponsorsImage"
               alt="${doc.name}">
           </div>
      `;
  });
  return html;
}

function generateSponsorsHeroSection() {
  let html = "";
  html += `<p class="made-possible mx-auto">Made possible by</p> <div class="hero-sponsor-item-container">`;
  sponsorsList.forEach((doc) => {
    html += `
      
        <img src="${doc.photo}" class="hero-sponsor-item" alt="${doc.name}">
      
      `;
  });
  html += "</div>";
  return html;
}

// /* End of Section for Ajal */
