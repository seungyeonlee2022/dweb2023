const s = document.querySelector(".sampleMap");

 function f1() { 
    s.src = 'https://www.google.com/maps/embed?pb=!4v1691645951075!6m8!1m7!1sCAoSLEFGMVFpcFBCUDd4WmptY0ZEUWhVNHU1d29SRHJJTDJMd2lFV3RPQmFDUDV0!2m2!1d-34.9843226!2d150.2400185!3f359.396393333968!4f-7.771446495413954!5f0.8160813932612223';
    s.load();
    s.play();
 }

 function f2() { 
    s.src = 'https://seungyeonlee2022.github.io/dweb2023/googlemaps/map_ulruru';
    s.load();
    s.play();
 }
 function f3() { 
    s.src = 'https://seungyeonlee2022.github.io/dweb2023/googlemaps_se2/map_search';
    s.load();
    s.play();
 }

 document.getElementById("m1").onclick=f1;       
 document.getElementById("m2").onclick=f2; 
 document.getElementById("m3").onclick=f3; 
