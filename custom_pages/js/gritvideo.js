let container1 = document.querySelectorAll("movieli_container")[0];
let container2 = document.querySelectorAll("movieli_container")[1];
let container3 = document.querySelectorAll("movieli_container")[2];

container1.addEventListener('click', function(){
    var movSrc = 'https://www.youtube.com/embed/'+ 'H14bBuluwB8';
    let sammov = document.getElementsByClassName("sampleMovie");
    sammov.attr('src',movSrc);
    return false;
});
container2.addEventListener('click', function(){
    let movSrc = 'https://www.youtube.com/embed/'+ '19iEEx-2hxk';
    let sammov = document.getElementsByClassName("sampleMovie");
    sammov.src= movSrc;
    return false;
});

container3.addEventListener('click', function(){
    let movSrc = 'https://www.youtube.com/embed/'+ 'fjXZBr07tOo';
    let sammov = document.getElementsByClassName("sampleMovie");
    sammov.src= movSrc;
    return false;
});
