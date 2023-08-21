const body = document.querySelector('.body');
var count;
function run(){
    count = document.querySelector(".num").value;
    console.log(count);
    if(count!=0){
        let form = document.createElement('form');
        form.classList.add("login");
        let usertext = document.createElement('input');
        usertext.type = "text";
        usertext.placeholder = "UserName";
        let userNumber = document.createElement('input');
        userNumber.type = "number";
        userNumber.placeholder="Number here";
        let btn = document.createElement('button');
        btn.innerText = "Submit";
       btn.addEventListener('click',()=>{
        console.log('hello world');
       })
        form.appendChild(usertext);
        form.appendChild(userNumber);
        form.appendChild(btn);
        body.append(form);
    }

}
/*function submit(count){
    if(count != 0){
        let form = document.createElement('form');
        form.classList.add("login");
        let usertext = document.createElement('input');
        usertext.type = "text";
        usertext.placeholder = "UserName";
        let userNumber = document.createElement('input');
        userNumber.type = "number";
        userNumber.placeholder="Number here";
        let btn = document.createElement('button');
        btn.innerText = "Submit";
        btn.addEventListener('click',submit())
        form.appendChild(usertext);
        form.appendChild(userNumber);
        form.appendChild(btn);
        body.append(form);
        count --;
    }
}*/