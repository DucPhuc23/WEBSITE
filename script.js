//---------------------Product---------------//
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src=imgItem.src
    })
})
const chitiet=document.querySelector(".chitiet")
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-conten-chitiet")
    })
}
