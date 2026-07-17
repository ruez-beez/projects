function toggle(){
    var x = document.getElementById("fFact"); //makes the funfact section show up on button click//
    if(x.style.display === "none"){
        x.style.display = "block";
        document.getElementById("button").innerText = "Hide";
    }

    else {
        x.style.display = "none";
         document.getElementById("button").innerText = "Show";//on button click makes funfact section hidden//
    }
}



