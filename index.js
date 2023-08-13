let btn1 = document.getElementById("bn1");
let btn2 = document.getElementById("bn2");
let btn3 = document.getElementById("bn3");

let classone = document.getElementById("one");
let classtwo = document.getElementById("two");
let classthree = document.getElementById("three");

btn1.addEventListener("click",function() {
    classone.style.display = "flex";
    classtwo.style.display = "none";
    classthree.style.display = "none";

})
btn2.addEventListener("click",function() {
    classone.style.display = "none";
    classtwo.style.display = "flex";
    classthree.style.display = "none";

})
btn3.addEventListener("click",function() {
    classone.style.display = "none";
    classtwo.style.display = "none";
    classthree.style.display = "flex";

})