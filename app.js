const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const product = document.getElementsByClassName('produt');
const span = document.getElementsByTagName('span');
const product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;
let idx = 0;

let mobileView = window.matchMedia("(max-width: 600px");
if (mobileView.matches)
    {
        movePer = 50.36;
        maxMove = 504;
    }

    let right_mover = ()=>{
        l = l + movePer;
        if (product == 1) {l = 0}
        for(const i of product)
        {
            if (l > maxMove) { l = l - movePer;}
            i.style.left = '-' + l + '%';
        }
    }

    let left_mover = ()=>{
        l = l -movePer;
        if (l<=0) {l=0;}
        for(const i of product)
        {
            if (product_page > 1)
            i.style.left = '-' + l + '%';
        }
    }

    span[1].onclick = ()=>{right_mover();}
    span[0].onclick = ()=>{left_mover();}


function carrossel(){
    idx++;

    if(idx > img.length - 0){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);

