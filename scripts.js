// Write your JavaScript code here.
// Remember to pay attention to page loading!
function takeOff (){
   let response = confirm ("Confirm that shuttle is ready for takeoff")

   if(response){
    let p = document.getElementById("flightStatus");
    p.innerHTML = "Shuttle in flight";
    let div = document.getElementById("shuttleBackground");
    div.style.backgroundColor = "blue";
    let height = document.getElementById("spaceShuttleHeight")
    height.innerHTML = Number(height.innerHTML) + 10000
   } else{
    console.log("ok, let's try next time")
   }
}

function land(){
    alert("The shuttle is landing. Landing gear engaged.")
    let p = document.getElementById("flightStatus");
    p.innerHTML = "The shuttle has landed.";
    let div = document.getElementById("shuttleBackground");
    div.style.backgroundColor = "green";
    let height = document.getElementById("spaceShuttleHeight")
    height.innerHTML = 0
}

