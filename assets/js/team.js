window.onload = () => {
    // team
    var ref = document.getElementById("team");
    ref.innerHTML= '';

    setTimeout(teamInject(), 3000);
    function teamInject(){
      team.forEach((ele) => {
        var card = `
      
      
          <!-- Grid column -->
        
            <div class="avatar mx-auto">
              <img src="${ele.photo}" class="rounded-circle z-depth-1"
                alt="Sample avatar">
            </div>
            <a href="${ele.linkedin}"<h5 class="font-weight-bold mt-4 mb-3">${ele.name}</h5>
        
    
        `;
        let div = document.createElement("div");
        div.className = "col-lg-4 col-md-6 frame";
        div.innerHTML = card;
        ref.appendChild(div);
      })}
    }
