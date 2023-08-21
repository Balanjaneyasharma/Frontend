const del = document.querySelector('a.delete');
del.addEventListener('click',(e)=>{
        const ep = `/blogs/${del.dataset.doc}`;
        fetch(ep,{
            method:'DELETE'
        })
        .then((response)=>response.json())
        .then((d)=> window.location.href = d.redirect)
        .catch((e)=>console.log(e));
})