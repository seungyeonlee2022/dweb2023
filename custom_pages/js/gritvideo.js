let sammov = document.querySelector(".sampleMovie");
function changeMovie(i){
    var movSrc = 'https://www.youtube.com/embed/'+ i;
    sammov.src = movSrc;
}
