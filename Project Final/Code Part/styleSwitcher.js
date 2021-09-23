
const links=document.querySelectorAll(".alternate-style"),
totallLinks=links.length;


function setActiveStyle(color) {
    for(let i=0;i<totallLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disable"); 
        }
        else{
            links[i].setAttribute("disable","true");  
        }
    }
}
// body skin

const bodySkin=document.querySelectorAll(".bodySkin");
           totallBodySkin=bodySkin.length;

           for(let i=0;i<totallBodySkin;i++){
            bodySkin[i].addEventListener("change",()=>{
                console.log(this)
            })
           }


document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})