

// /* Section for Naseem */



// /* End of Section for Naseem */

// /* Section for Kiran */



// /* End of Section for Kiran */

// /* Section for Abhinav */



window.onload=()=>{     
    // team
    team.forEach(ele => {
      console.log(ele.name)
        var card=`
  
  
      <!-- Grid column -->
    
        <div class="avatar mx-auto">
          <img src="${ele.photo}" class="rounded-circle z-depth-1"
            alt="Sample avatar">
        </div>
        <h5 class="font-weight-bold mt-4 mb-3">${ele.name}</h5>
      
        <ul class="list-unstyled mb-0">
          <!-- Facebook -->
          <a class="p-2 fa-lg fb-ic" href="${ele.facebook}">
            <i class="fa fa-facebook blue-text"> </i>
          </a>
          <!-- Twitter -->
          <a class="p-2 fa-lg tw-ic" href="${ele.twitter}">
            <i class="fa fa-twitter blue-text"> </i>
          </a>
          <!-- Instagram -->
          <a class="p-2 fa-lg ins-ic">
            <i class="fa fa-instagram blue-text" href="${ele.instagram}"> </i>
          </a>
          <a class="p-2 fa-lg ins-ic" href="${ele.linkedin}">
            <i class="fa fa-linkedin blue-text"> </i>
          </a>
        </ul>
    

    `
    let div=document.createElement('div')
    div.className="col-lg-4 col-md-6 frame"
    var ref=document.getElementById('team')
    div.innerHTML = card;
    ref.appendChild(div);

    document.getElementById('hero-sponsors-container').innerHTML = generateSponsorsHeroSection(sponsorsList);
    

        
    });
    


// for contact
   
        
    
    contact.forEach(ele => {
        var card=`
  
  
      <!-- Grid column -->
    
        <div class="avatar mx-auto">
          <img src="${ele.photo}" class="rounded-circle z-depth-1"
            alt="Sample avatar">
        </div>
        <h5 class="font-weight-bold mt-4 mb-3">${ele.name}</h5>
      
        <ul class="list-unstyled mb-0">
          <!-- Facebook -->
          <a class="p-2 fa-lg fb-ic" href="${ele.facebook}">
            <i class="fa fa-facebook blue-text"> </i>
          </a>
          <!-- Twitter -->
          <a class="p-2 fa-lg tw-ic" href="${ele.twitter}">
            <i class="fa fa-twitter blue-text"> </i>
          </a>
          <!-- Instagram -->
          <a class="p-2 fa-lg ins-ic">
            <i class="fa fa-instagram blue-text" href="${ele.instagram}"> </i>
          </a>
          <a class="p-2 fa-lg ins-ic" href="${ele.linkedin}">
            <i class="fa fa-linkedin blue-text"> </i>
          </a>
        </ul>
    

    `
    let div=document.createElement('div')
    div.className="col-lg-4 col-md-6 frame"
    var ref=document.getElementById('contact');
    div.innerHTML = card;
    ref.appendChild(div);

    

        
    });

  // for faq
  faq.forEach(ele => {
    var card=`


    
    <div class="toggle-title ">
        <h3 class="title-name accordion">
            ${ele.ques}
        </h3>
    </div>
    <div class="toggle-inner panel" id="panel">
        <p>${ele.ans}</p>
    </div>
    

`
let div=document.createElement('div')
div.className="toggle"
let ref=document.getElementById('faqq');
div.innerHTML = card;
ref.appendChild(div);



    
});

    

// accordian start
var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
           
            var panel = this.parentElement.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }


// accordian end

// init faq


// faq end



}
    




// /* End of Section for Abhinav */

// /* Section for Ajal */

function generateSponsors () {

    let html = ''; 
    sponsorsList.forEach(doc => {
        html += `
        <div class="avatar mx-auto my-3 col-lg-4 col-md-6 col-xl-3">
             <img src="${doc.photo}" class="img-fluid rounded-circle z-depth-1"
                 alt="${doc.name}">
             </div>
        `
    });
    return html;
}

function generateSponsorsHeroSection () {

  let html = ''; 
  html+=`<p class="made-possible mx-auto">Made possible by</p> <div class="hero-sponsor-item-container">`  
  sponsorsList.forEach(doc => {
    html += `
      
        <img src="${doc.photo}" class="hero-sponsor-item" alt="${doc.name}">
      
      `
  });
  html+="</div>"
  return html;
}

// /* End of Section for Ajal */