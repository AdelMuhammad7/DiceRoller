let photo = document.querySelector(".display img")
let btn = document.querySelector("button")

let data = [
    "images/one.png",
    "images/two.png",
    "images/three.png",
    "images/four.png",
    "images/five.png",
    "images/six.png"
]

btn.onclick = function (){

    photo.classList.add("active")
    setTimeout(() => {
        
        let x = Math.floor(Math.random() * data.length) 
        console.log(x)
        photo.setAttribute("src" , data[x])
        photo.classList.remove("active")
    }, 1000);
}   
