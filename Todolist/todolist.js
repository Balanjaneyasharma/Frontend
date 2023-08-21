function addMore(){
    document.getElementById('error').innerText="";
    let name = document.getElementById('name').value;
    if(name == ''){
        document.getElementById('error').innerText="please eneter  some value";
    }
    else{
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent=name;
        let a = document.createElement('a');
        let b = document.createElement('button');
        b.innerHTML=' ✎ ';
        b.classList.add('editor');
        a.textContent="X";
        a.href="javascript:void(0)";
        a.className="remove";
        a.addEventListener('click',(e)=>{
            let tgt = e.target.parentNode;
            box.removeChild(tgt);
        })
        b.addEventListener('click',(e)=>{
            document.getElementById('name').focus();
            let content = document.getElementById('name').value;
            if(content != ''){
                e.target.parentNode.innerText=content;
                document.getElementById('name').value="";
                li.appendChild(b);
                li.appendChild(a);
            }
        })
        li.appendChild(b);
        li.appendChild(a);
        box.appendChild(li);   
    }
    document.getElementById('name').value="";
}






//let b = document.createElement('a');
        //b.textContent="Edit";
        //b.className="edit";
        //li.append(b);
//let pos = box.firstElementChild;
        //if(pos == null){
            //}else{
                //  box.insertBefore(li,pos);
              //}

/*
let btn = document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
})
let edit  = document.getElementsByTagName('li');
edit.addEventListener('click',(e)=>{
    let li = e.target;
    li.focus();
})*/
