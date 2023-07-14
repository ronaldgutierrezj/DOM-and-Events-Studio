// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const upButton = document.getElementById("up")
    const downButton = document.getElementById("down")
    const leftButton = document.getElementById("left")
    const rightButton = document.getElementById("right")
    let step = 10
    let altitude = 0
    let p = document.getElementById("flightStatus");
    let height = document.getElementById("spaceShuttleHeight");
    let div = document.getElementById("shuttleBackground");
    let rocket = document.getElementById("rocket")
    let positionX = 0
    let positionY = 0

    takeOff.addEventListener("click", function(){
            let response = confirm ("Confirm that shuttle is ready for takeoff")
            if(response){
                p.innerHTML = "Shuttle in flight";
                div.style.backgroundColor = "blue";
                altitude = 10000
                height.innerHTML = altitude
                upButton.disabled = false
                downButton.disabled = false
                leftButton.disabled = false
                rightButton.disabled = false
            } else{
                console.log("ok, let's try next time")
            }

    })

    landing.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.")
        p.innerHTML = "The shuttle has landed.";
        div.style.backgroundColor = "green";
        altitude = 0
        positionX = 0
        positionY = 0
        height.innerHTML = altitude
        rocket.style.marginLeft = positionX
        rocket.style.marginBottom = positionY
        upButton.disabled = true
        downButton.disabled = true
        leftButton.disabled = true
        rightButton.disabled = true

    })

    abort.addEventListener("click", function(){
        let response = confirm ("Confirm that you want to abort the mission.");
        if(response){
            p.innerHTML = "Mission aborted.";
            div.style.backgroundColor = "green";
            height.innerHTML = 0
            altitude = 0
            positionX = 0
            positionY = 0
            rocket.style.marginLeft = positionX
            rocket.style.marginBottom = positionY
            upButton.disabled = true
            downButton.disabled = true
            leftButton.disabled = true
            rightButton.disabled = true
        }
        
    })
   

    document.addEventListener("click", function(event){
        console.log(event)
        let backgroundWidth = parseInt(window.getComputedStyle(div).getPropertyValue('width'))

        if(event.target.id === "up" && positionY < 250){
            positionY = positionY + step
            rocket.style.marginBottom = positionY + "px"
            altitude += 10000
            height.innerHTML = altitude

        }

        if(event.target.id === "down" && positionY > 0){
            positionY = positionY - step
            rocket.style.marginBottom = positionY + "px"
            altitude -= 10000
            height.innerHTML = altitude
        }

        if(event.target.id === "right" && (backgroundWidth / 2 - 38)> positionX){
            positionX = positionX + step
            rocket.style.marginLeft = positionX + "px"
        }

        if(event.target.id === "left" && -(backgroundWidth / 2 - 38) < positionX){
            positionX = positionX - step
            rocket.style.marginLeft = positionX + "px"
        }


    })
    

})