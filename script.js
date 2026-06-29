const imgs = document.querySelectorAll(".header-slider ul img");
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next");

console.log(imgs);

let n = 0;
prevBtn.addEventListener("click", (e)=>{
   if(n > 0){
    n--;
   }
   else{
    n = imgs.length - 1;
   }
changeSlide();
});
nextBtn.addEventListener("click", ()=>{
    if(n < imgs.length -1){
    n++;
   }
   else{
    n = 0;
   }
changeSlide();
});

function changeSlide(){
    for(i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

const scrollContainer = document.querySelectorAll(".scroll-products");
for (const item of scrollContainer){
    item.addEventListener('wheel', (event)=>{
        event.preventDefault();
        item.scrollLeft += event.deltaY;
    });
}