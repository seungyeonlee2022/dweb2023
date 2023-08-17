const s = document.querySelector(".sampleMovie");

 function gg1() { 
    s.src = 'https://www.youtube.com/embed/H14bBuluwB8';
    s.load();
    s.play();
 }

 function gg2() { 
    s.src = 'https://www.youtube.com/embed/19iEEx-2hxk';
    s.load();
    s.play();
 }
 function gg3() { 
    s.src = 'https://www.youtube.com/embed/fjXZBr07tOo';
    s.load();
    s.play();
 }

 document.getElementById("g1").onclick=gg1;       
 document.getElementById("g2").onclick=gg2; 
 document.getElementById("g3").onclick=gg3; 
