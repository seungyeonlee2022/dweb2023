const timeContainer = document.querySelector(".header__time");

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    timeContainer.innerText = `${hour<10? "0"+hour:hour}:${minutes<10? "0"+minutes:minutes}`;
}

setInterval(getTime, 10000);