const btn2=document.querySelector('.btn2');
const btn22=document.querySelector('.btn22');
const packet2=document.querySelector(".packet2");



btn2.addEventListener('click',(e)=>{
    e.preventDefault();
    packet2.classList.add("moveleft");
    packet2.classList.remove("moveright");
})
btn22.addEventListener('click',(e)=>{
    e.preventDefault();
    packet2.classList.remove("moveleft");
    packet2.classList.add("moveright");
})