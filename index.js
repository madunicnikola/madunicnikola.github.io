// PRELOADER \\
'use strict';
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

// NAVLINK MENI \\
var navlinks = document.getElementById("nav-links");
    function showMenu(){
        navlinks.style.right = "0";
    }
    function hideMenu(){
        navlinks.style.right = "-200px";
    }

// REFRESH ONTOP \\
window.onbeforeunload = function(){
    window.scrollTo(0, 0);
  }
  
// BURGERMENU MOBILE \\
function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// GOOGLE MAPS \\
function initMap(){
  var lokacija = {lat: 43.844520, lng: 18.343630};
  var map = new google.maps.Map(document.getElementById("map"),
{ zoom: 13, 
  center: lokacija
    }
  );
    var markerLokacije = new google.maps.Marker(
{
      position: lokacija,
      map: map
    }
  );
}

// ANIMIRANA SLOVA ZA LOKACIJU \\
var omotac = document.querySelector('.animatedLocationText');
omotac.innerHTML = omotac.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animatedLocationText .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animatedLocationText .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

  // O NAMA \\
