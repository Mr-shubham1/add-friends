

function addfriend(){
    var card = document.querySelector("#card");
    var istatus = document.querySelector("#card h4");
    card.addEventListener("click",function(dets){
        console.log();
        if(dets.target.innerHTML == "Add friend")
        {
        istatus.innerHTML = "friends";
        istatus.style.color = "green";
        document.querySelector("#card .btn").innerHTML = `<button id="remove_btn">Remove</button>`;
        }
        
    })
}

function removefriend(){
    var card = document.querySelector("#card");
    var istatus = document.querySelector("#card h4");
    card.addEventListener("click",function(dets){
        if(dets.target.innerHTML == "Remove")
        {
        istatus.innerHTML ="Stranger";
        istatus.style.color = "red";
        document.querySelector("#card .btn").innerHTML = `<button id="add_btn">Add friend</button>`;
        }
        
    })
}




addfriend();
removefriend();
