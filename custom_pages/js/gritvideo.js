const s = document.querySelector(".sampleMovie");

 function f1() { 
    s.src = 'https://www.youtube.com/embed/H14bBuluwB8';
    s.load();
    s.play();
 }

 function f2() { 
    s.src = 'https://www.youtube.com/embed/19iEEx-2hxk';
    s.load();
    s.play();
 }
 function f3() { 
    s.src = 'https://www.youtube.com/embed/fjXZBr07tOo';
    s.load();
    s.play();
 }

 document.getElementById("g1").onclick=f1;       
 document.getElementById("g2").onclick=f2; 
 document.getElementById("g3").onclick=f3; 
