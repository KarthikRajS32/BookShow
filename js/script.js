const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener('click', () =>{
    menu.classList.toggle("hidden");
});


const signin = document.getElementById("signin");
signin.addEventListener('click',()=>{
    alert("You are signed in");
})