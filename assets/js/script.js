// /* Section for Naseem */



// /* End of Section for Naseem */

// /* Section for Kiran */



// /* End of Section for Kiran */

// /* Section for Abhinav */
window.onload=()=>{
    var data;
    fetch('../team.json')
    .then((result)=>{
        return result.json()
    })
    .then((res)=>{
        console.log(res)
        data=res;
        console.log(data)
        
    
    data.forEach(ele => {
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
    div.className="col-lg-4 col-md-6 "
    ref=document.getElementById('team');
    div.innerHTML = card;
    ref.appendChild(div);

    
    

        
    });
    
})

// for contact
var data;
    fetch('../team.json')
    .then((result)=>{
        return result.json()
    })
    .then((res)=>{
        console.log(res)
        data=res;
        console.log(data)
        
    
    data.forEach(ele => {
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
    div.className="col-lg-4 col-md-6 "
    ref=document.getElementById('contact');
    div.innerHTML = card;
    ref.appendChild(div);

    

        
    });
    
})

// By Ajal
var sponsors;
fetch('../sponsors.json')
.then((response)=>{
    return response.json()
})
.then((res)=>{
    console.log(res)
    sponsors=res;
    console.log(sponsors)
    

sponsors.forEach(doc => {
    var card=`


  <!-- Grid column -->

    <div class="avatar mx-auto my-3">
      <img src="${doc.photo}" class="rounded-circle z-depth-1"
        alt="Sample avatar">
    </div>

`
let div=document.createElement('div')
div.className="col-lg-4 col-md-6 col-xl-3"
ref=document.getElementById('sponsors');
div.innerHTML = card;
ref.appendChild(div);




    
});

})

}
    




// /* End of Section for Abhinav */

// /* Section for Ajal */



// /* End of Section for Ajal */