



/* SCROLL TO TOP FUNCTION */


let toUP = document.querySelector(".scrollTop");

window.onscroll = function() {scrollFunction()};

 function scrollFunction(){
if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050){
    toUP.style.display = "block";
}else {
    toUP.style.display = "none";
}
};
scrollFunction();

toUP.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) =>{
scrollFunction();
})








