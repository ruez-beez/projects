function toggle(){
    var x = document.getElementById("fFact");
    if(x.style.display === "none"){
        x.style.display = "block";
        document.getElementById("button").innerText = "Hide";
    }

    else {
        x.style.display = "none";
         document.getElementById("button").innerText = "Show";
    }
}



