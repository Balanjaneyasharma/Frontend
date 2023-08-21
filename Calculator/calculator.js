let flg = 0,mflg = 0;
let input = document.querySelector(".inputBox");
let ele = document.querySelectorAll(".grid-Container .btn");
let mb = document.querySelector(".mainbox");
let theme = document.querySelector(".circle");
let clr = document.getElementById('clearScreen');
let ans = document.getElementById('answer');
theme.addEventListener('click',()=>{
    if(mflg === 0){
        theme.style.transform = 'translateX(20px)';
        theme.style.backgroundColor = '#383838';
        document.body.style.backgroundColor = '#202020';
        mb.style.backgroundColor = '#202020';
        mb.style.borderColor = '#202020';
        mb.style.boxShadow =" -2px -2px 5px  #000000, 2px 2px 4px  #000000";
        input.style.backgroundColor= "#383838";
        input.style.color = 'whitesmoke';
        input.style.boxShadow="inset -2px -2px 5px  #000000,inset 0px 0px 4px  #000000";
        ele.forEach((item)=>{
            item.style.backgroundColor = '#202020';
            item.style.color = 'white';
            item.style.boxShadow=" -2px -2px 5px  #000000, 2px 2px 4px  #000000";
        })
        ans.style.backgroundColor='#202020';
        ans.style.boxShadow=" -2px -2px 5px  #000000, 2px 2px 4px  #000000";
        ans.style.color = 'white';
        clr.style.color='white';
        clr.style.boxShadow=" -2px -2px 5px  #000000, 2px 2px 4px  #000000";
        clr.style.backgroundColor='#202020';
        mflg = 1;
    }
    else {
        theme.style.transform = 'translateX(0px)';
        theme.style.backgroundColor = 'lightgrey';
        document.body.style.backgroundColor = 'lightgray';
        mb.style.backgroundColor = 'lightgrey';
        mb.style.borderColor = 'lightgray';
        mb.style.boxShadow =" -1px 1px 15px 4px whitesmoke";
        input.style.backgroundColor= "lightgrey";
        input.style.color = 'black';
        input.style.boxShadow="inset -2px -2px 10px #fffefe, inset  2px 2px 10px #4e4e4e70";
        ele.forEach((item)=>{
            item.style.backgroundColor = 'lightgray';
            item.style.color = 'black';
            item.style.boxShadow="-2px -2px 10px #fffefe, 2px 2px 10px #4e4e4e70";
        })
        ans.style.backgroundColor='lightgray';
        ans.style.boxShadow=" -2px -2px 10px #fffefe, 2px 2px 10px #4e4e4e70";
        ans.style.color = 'black';
        clr.style.color='black';
        clr.style.boxShadow="-2px -2px 10px #fffefe, 2px 2px 10px #4e4e4e70";
        clr.style.backgroundColor='lightgray';
        mflg =0;
    }
})
const audio = new Audio("ClickSound.mp3");
const btn = document.querySelectorAll("button");
btn.forEach((item)=>{
    item.addEventListener('click',()=>{
        audio.play();
    })
})
ele.forEach((item)=>{
    console.log(item.innerText);
    item.addEventListener('click',()=>{
        if(flg === 1 || input.innerText === "Infinity" || input.innerText === "NaN") {
            input.innerText = item.innerText;
            flg = 0;
        }
        else  input.innerText+=item.innerText;
    })
})
ans.addEventListener('click',()=>{
    if(input.innerText === "") {
        input.innerText ="";
    }
    else{
        try{
            let res = input.innerText.replaceAll('×','*');
            let ans = eval(res);
            input.innerText = ans;
        }
        catch(err){
            input.innerHTML="<h4 id = 'warn'>Bad Expression</h4>";
            flg = 1;
        }
    }
})
clr.addEventListener('click',()=>{
    input.innerText="";
})