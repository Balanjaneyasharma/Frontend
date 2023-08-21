const h1 = document.getElementById('h1');
const m1 = document.getElementById('m1');
const s1 = document.getElementById('s1');
const mer = document.getElementById('meridian');
const d1 = document.getElementById('d1');
const mo1 = document.getElementById('mo1');
const y1 = document.getElementById('y1');

setInterval(()=>{
    let date = new Date();
    if(date.getHours()>12){
        mer.innerText = 'PM';
    }else mer.innerText = 'AM';
    if(date.getHours()%12 < 10){
        h1.innerText = "0"+date.getHours()%12;;
    }else h1.innerText = date.getHours()%12; 
    if(date.getMinutes()<10){
        m1.innerText = "0"+date.getMinutes();
    }else m1.innerText = date.getMinutes(); 
    if(date.getSeconds()<10){
        s1.innerText = "0"+date.getSeconds();
    }else s1.innerText = date.getSeconds(); 
    d1.innerText = date.getDate();
    mo1.innerText = date.getMonth()+1;
    y1.innerText = date.getFullYear();

}
,0);