window.onload = () => {
    // team
    var ref = document.getElementById("team");
    ref.innerHTML= '';

    setTimeout(teamInject(), 3000);
    function teamInject(){
      team.forEach((ele) => {
        var card = `
      
           
          <!-- Grid column -->
        
            <div class="avatar mx-auto" style=" width:120px; height:120px; background-image: url('${ele.photo}'); background-repeat: no-repeat; background-size: cover; border-radius: 50%;">
            
            </div>
            <a href="${ele.linkedin}"<h5 class="font-weight-bold mt-4 mb-3">${ele.name}</h5>
        
    
        `;
        let div = document.createElement("div");
        div.className = "col-lg-4 col-md-6 frame";
        div.innerHTML = card;
        ref.appendChild(div);
      })}
    }
