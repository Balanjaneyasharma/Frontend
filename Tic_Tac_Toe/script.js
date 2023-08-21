let i=0;
const btnclick=document.querySelectorAll('.tile');
btnclick.forEach(function(btnc){
btnc.addEventListener('click',function(e){
    let tracks=e.currentTarget;
    if(i%2==0)
    {
        if(btnc.textContent!="O" && btnc.textContent!= "X"){
    tracks.textContent="X";
    tracks.style.color="white;"  
    
    i++;  
      }
    }
    else{
        if(btnc.textContent!="X" && btnc.textContent!= "O"){
        tracks.textContent="O";
    tracks.style.color="white;" 
    i++;
        }
    }
   
    if((win1.textContent=="X" && win2.textContent=="X" && win3.textContent=="X")|| 
    (win1.textContent=="X" && win4.textContent=="X" && win7.textContent=="X")||
    (win1.textContent=="X" && win5.textContent=="X" && win9.textContent=="X") ||   
    (win2.textContent=="X" && win5.textContent=="X" && win8.textContent=="X") || 
    (win3.textContent=="X" && win6.textContent=="X" && win9.textContent=="X") ||
    (win7.textContent=="X" && win8.textContent=="X" && win9.textContent=="X") ||
    (win3.textContent=="X" && win5.textContent=="X" && win7.textContent=="X")||
    (win4.textContent=="X" && win5.textContent=="X" && win6.textContent=="X"))
        {
             if(!((win1.textContent=="O" && win2.textContent=="O" && win3.textContent=="O")|| 
    (win1.textContent=="O" && win4.textContent=="O" && win7.textContent=="O")||
    (win1.textContent=="O" && win5.textContent=="O" && win9.textContent=="O") ||   
    (win2.textContent=="O" && win5.textContent=="O" && win8.textContent=="O") || 
    (win3.textContent=="O" && win6.textContent=="O" && win9.textContent=="O") ||
    (win7.textContent=="O" && win8.textContent=="O" && win9.textContent=="O") ||
    (win3.textContent=="O" && win5.textContent=="O" && win7.textContent=="O")||
    (win4.textContent=="O" && win5.textContent=="O" && win6.textContent=="O")))
      
                tiles.textContent="X won the match";   
    }
        
    else if((win1.textContent=="O" && win2.textContent=="O" && win3.textContent=="O")|| 
    (win1.textContent=="O" && win4.textContent=="O" && win7.textContent=="O")||
    (win1.textContent=="O" && win5.textContent=="O" && win9.textContent=="O") ||   
    (win2.textContent=="O" && win5.textContent=="O" && win8.textContent=="O") || 
    (win3.textContent=="O" && win6.textContent=="O" && win9.textContent=="O") ||
    (win7.textContent=="O" && win8.textContent=="O" && win9.textContent=="O") ||
    (win3.textContent=="O" && win5.textContent=="O" && win7.textContent=="O")||
    (win4.textContent=="O" && win5.textContent=="O" && win6.textContent=="O"))
    {
                tiles.textContent="O won the match";
             
    }
              
})

    
})
function resetbutton()
{
    win1.textContent=""
    win2.textContent=""
    win8.textContent=""
    win3.textContent=""
    win4.textContent=""
    win5.textContent=""
    win6.textContent=""
    win7.textContent=""
    win9.textContent=""
    tiles.textContent=""

}
