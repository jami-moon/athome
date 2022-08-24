import "./scss/main.scss";

let totalWidth = 0;
let totalHeight = 0;

// 가로 스크롤 될 수 있게 너비 늘려주기
// 애플 사이트에서 했던 거 이용해서 스크롤 정도에 맞게 트랜스폼

const html = document.getElementsByTagName('html');
const body = document.getElementsByTagName('body');

html.style.height = window.innerHeight;
body.style.height = window.innerHeight;

const boxEl = document.querySelectorAll('.box')

// boxEl.forEach(function(el,idx){
//     el.addEventListener('wheel', (e) => {
//         e.preventDefault;
//         if(e.deltaY > 0) {

//         }
//     })
// })
