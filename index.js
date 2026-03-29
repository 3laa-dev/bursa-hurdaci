
let contact = document.querySelector(".contact-btn");
contact.addEventListener("click", () => {
    window.location = "contact.html";
})

let home = document.querySelector(".home-btn");
home.addEventListener("click", () => {
    window.location = "index.html";
})
let kurumsal = document.querySelector(".kurumsal-btn");
kurumsal.addEventListener("click", () => {
    window.location = "kurumsal.html";
})
let bar = document.querySelector(".bar-btn");
bar.addEventListener("click" ,()=>{
    let navbar = document.querySelector(".navbar-list")
    navbar.style.display = "block";
}) 

let images = ["Images/img1.jpg", "Images/img2.jpg", "Images/img3.jpg"];

let index = 0;
let slider = document.getElementById("slider");

setInterval(() => {
    index++;

    if (index === images.length) {
        index = 0;
    }

    slider.style.opacity = 0;

setTimeout(() => {
    slider.src = images[index];
    slider.style.opacity = 1;
}, 500);
}, 3000); 

let detay = document.querySelectorAll(".detay-btn");
detay  = Array.from(detay);

detay.map( e =>{
    e.addEventListener("click" , ()=>{
        window.location = "contact.html";
    })
})