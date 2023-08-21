const h1 = document.getElementById('h1');
const m1 = document.getElementById('m1');
const s1 = document.getElementById('s1');

setInterval(()=>{
    let date = new Date();
    h1.innerText = date.getHours()%12;
    m1.innerText = date.getMinutes();
    s1.innerText = date.getSeconds();
}
,0);