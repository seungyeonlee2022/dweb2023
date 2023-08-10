const images = [ 고른 배경사진들 ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url("img/${chosenImage}")`; /*쿼리*/
