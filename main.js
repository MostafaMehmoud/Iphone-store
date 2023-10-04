// find the elements from html pages
// let images=[
//     [document.querySelector(".one"),"#fed668"],
//     [document.querySelector(".two"),"#90a8c0"],
//     [document.querySelector(".three"),"#464541"],
//     [document.querySelector(".four"),"#e6d1b4"],
//     [document.querySelector(".five"),"#e40605"],
// ]
let replaceImg=document.querySelector(".image img")
let images=document.querySelectorAll("ul li img")
let body=document.querySelector("body")
images.forEach((img)=>{
    img.addEventListener("click",function(){
        replaceImg.src=img.src
        body.style.backgroundColor=img.id
    })

})

