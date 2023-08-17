const sm = document.querySelector(".sampleMovie");

 function gg1() { 
    sm.src = 'https://www.youtube.com/embed/H14bBuluwB8';
    sm.load();
    sm.play();
 }

 function gg2() { 
    sm.src = 'https://www.youtube.com/embed/19iEEx-2hxk';
    sm.load();
    sm.play();
 }
 function gg3() { 
    sm.src = 'https://www.youtube.com/embed/fjXZBr07tOo';
    sm.load();
    sm.play();
 }

 document.getElementById("g1").onclick=gg1;       
 document.getElementById("g2").onclick=gg2; 
 document.getElementById("g3").onclick=gg3; 
