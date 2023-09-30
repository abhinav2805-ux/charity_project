btn = document.querySelector(".tglBtn")
nav = document.querySelector("nav")
content = document.querySelector(".smDisplay")
tabs = document.querySelectorAll(".smTab")
function manageNav(){
    if (content.classList.contains("active")) {
        nav.style.cssText = "height:22vh"
        content.style.cssText="display:flex ; opacity:100%"
    }
    else{
        nav.style.cssText = "height:6vh  ; padding-bottom:0 "
        content.style.cssText="display:flex ; opacity:0% ; transition-delay:0ms"
    }
}
btn.addEventListener("click",()=>{
    content.classList.toggle("active")
    btn.classList.toggle("fa-bars")
    btn.classList.toggle("fa-x")
    manageNav()
   
})
tabs.forEach(element => {
    element.addEventListener("click",()=>{
        content.classList.toggle("active")
        btn.classList.toggle("fa-bars")
        btn.classList.toggle("fa-x")
        manageNav()
    })
});