
const map1 = document.getElementsByClassName('map');
const map2 = document.getElementsByClassName('map_current');
const map3 = document.getElementsByClassName('map_ulruru');

const button1 = document.getElementById('m1');
const button2 = document.getElementById('m2');
const button3 = document.getElementById('m3');

function see_map1(){
  map1.classList.remove('map-hide');
  map2.setAttribute('class','map-hide');
  map3.setAttribute('class','map-hide');
}
function see_map2(){
  map2.classList.remove('map-hide');
  map1.setAttribute('class','map-hide');
  map3.setAttribute('class','map-hide');
}
function see_map3(){
  map3.classList.remove('map-hide');
  map2.setAttribute('class','map-hide');
  map1.setAttribute('class','map-hide');
}
button1.addEventListener("click", see_map1);
button2.addEventListener("click", see_map2);
button3.addEventListener("click", see_map3);
