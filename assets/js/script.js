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
      <p>${ele.Right.Event}</p>
    </div>
  </div>
  <div class="containernew rightnew lax" data-lax-preset="fadeIn blurIn-5">
    <div class="contentnew">
    <h2>${ele.left.Date}</h2>
    <p>${ele.left.Event}</p>
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
      hideAll(this)
      
      // this.classList.toggle("active");

      var panel = this.parentElement.nextElementSibling;
      hideAll(this)
      if (panel.style.maxHeight === "100%") {
        panel.style.maxHeight = 0;
      } else {
        panel.style.maxHeight = "100%";
      }
      hideAll(this)
    });
  }
  
  function hideAll(exceptThis) {
    for (var i = 0; i < acc.length; i++) {
      if (acc[i] !== exceptThis) {
        acc[i].classList.remove("active");
        acc[i].parentElement.nextElementSibling.style.maxHeight=0
      }
    }
  }

  // accordian end

  // init faq

  // faq end
};

// /* End of Section for Abhinav */

// /* Section for Ajal */

function generateSponsors() {
  let html = "";
  sponsorsList.forEach((doc) => {
    html += `
      <div class="avatar mx-auto my-3 col-lg-4 col-md-6 col-xl-3">
           <img src="${doc.photo}" class="img-fluid rounded-circle z-depth-1 sponsorsImage"
               alt="Sample avatar">
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
