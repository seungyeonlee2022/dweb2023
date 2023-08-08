const menuHeader = document.querySelector(".menu__header");
const menuContent = document.querySelector(".menu__content");

const headerBtn = document.querySelector(".menu__header__btn ");
const headerText = document.querySelector(".menu__header__text");

const menuHome = document.querySelector(".menu-home");
const menuCurrent = document.querySelector(".menu-currnent");
const menuGrit = document.querySelector(".menu-grit");
const menuVertical = document.querySelector(".menu__vertical");
menuHeader.addEventListener("click", onClickMenuHeader);
menuContent.addEventListener("click",onClickMenuContent)

let clicked = false;
let duration = 0;

function onClickMenuHeader(event) {
    const target = event.target;
    const dataset = target.dataset;
    const key = dataset.key;
    if (key === undefined) {
        return;
    } else {
        if (!clicked) {
            changeHeader("down");
            menuDown(menuVertical);
            menuDown(menuHome);
            menuDown(menuCurrent);
            menuDown(menuGrit);
            clicked = true;
        } else {
            changeHeader("up");
            menuUp(menuVertical);
            menuUp(menuHome);
            menuUp(menuCurrent);
            menuUp(menuGrit);
            clicked = false;
        }
    }
}

function menuUp(item) {
    item.style.opacity = '0';
    item.style.transitionDelay = `${duration}ms`;
    duration -= 80;
}

function menuDown(item) {
    item.style.opacity = `1`;
    item.style.transitionDelay = `${duration}ms`;
    duration += 80;
}

function onClickMenuContent(event) {
    const target = event.target;
    const dataset = target.dataset;
    const value = dataset.value;
    if (value === undefined) {
        return;
    }
    switch (value) {
        case "Home":
            const header = document.querySelector(".header");
            header.scrollIntoView({ behavior: "smooth" });
            break;
        case "Current":
            const current = document.querySelector(".current");
            const currentRect = current.getBoundingClientRect();
            const currentTop = currentRect.top;
            const currentHeight = currentRect.height; /*todoRect 변수 위치 찾기 +수정 :current*/
            window.scrollBy({
                top: currentTop-currentHeight/12, /*todo 변수에 들어간 Top,  Height 값 확인*/
                behavior: "smooth",
                left: 0
            });
            break;
        case "Grit":
            const todo = document.querySelector(".Grit");
            const todoRect = todo.getBoundingClientRect();
            const todoTop = todoRect.top;
            const todoHeight = todoRect.height;
            window.scrollBy({
                top: todoTop-todoHeight/12,
                behavior: "smooth",
                left: 0
            });
            break;
        /*case "Scene": 갤러리 메뉴
            const movie = document.querySelector(".movie");
            const movieRect = movie.getBoundingClientRect();
            const movieTop = movieRect.top;
            const movieHeight = movieRect.height;
            window.scrollBy({
                top: movieTop-movieHeight/50,
                behavior: "smooth",
                left: 0
            });
            break;*/
        default:
            throw Error(`Click Wrong Button`);
    }
}

function changeHeader(text) {
    if (text === "down") {
        headerBtn.innerHTML = `<i class="fas fa-times" data-key="header-icon" data-value="scroll" ></i>`
        headerText.innerText = `Close`;
    } else {
        headerBtn.innerHTML = `<i class="fas fa-bars" data-key="header-icon" data-value="scroll" ></i>`
        headerText.innerText = `Menu`;
    }
}
