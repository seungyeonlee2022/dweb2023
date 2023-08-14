$(".YoutubeMovieList ul li button a").click(function(){
     
    var movSrc = 'https://www.youtube.com/embed/'+$(this).data('url')+'?autoplay=1';
    $("#sampleMovie").attr('src',movSrc);
 
    return false;
});

