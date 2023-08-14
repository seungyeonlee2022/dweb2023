let container1 = document.querySelectorAll("movieli_container")[0];
let container2 = document.querySelectorAll("movieli_container")[1];
let container3 = document.querySelectorAll("movieli_container")[2];

container1.addEventListener('click', f1);
container2.addEventListener('click', f2);
container3.addEventListener('click', f3);

function f1(){
    var movSrc = 'https://www.youtube.com/embed/'+ 'H14bBuluwB8';
    let sammov = document.getElementsByClassName("sampleMovie");
    sammov.src = movSrc;
}
function f2(){
    let movSrc = 'https://www.youtube.com/embed/'+ '19iEEx-2hxk';
    let sammov = document.getElementsByClassName("sampleMovie");
    sammov.src= movSrc;
}
function f3(){
    let movSrc = 'https://www.youtube.com/embed/'+ 'fjXZBr07tOo';
    let sammov = document.getElementsByClassName("sampleMovie");
    sammov.src= movSrc;
}
