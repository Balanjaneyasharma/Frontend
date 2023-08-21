const cards = document.querySelectorAll('.card');
const parent = document.querySelector('.parent');
console.log(parent);
console.log(cards);
const observer = new  IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("show",entry.isIntersecting);
    })
},{threshold : 0.8})

const  obs2 = new IntersectionObserver(entries =>{
    const ct = entries[0];
    if(!ct.isIntersecting) return  
    carders();
    obs2.unobserve(ct.target);
    obs2.observe(document.querySelector(".card:last-child"));

})

obs2.observe(document.querySelector(".card:last-child"));

cards.forEach((card)=>{
    observer.observe(card);
})

function carders(){
    for(let i = 0 ;  i < 10 ; i++){
        const carder = document.createElement('div');
        carder.textContent = " its ok lol"
        carder.classList.add('card');
        observer.observe(carder);
        parent.append(carder);
    }
}