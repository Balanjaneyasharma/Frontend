import { MouseEventHandler } from "react"

interface button{
    count : number,
    handleClick: MouseEventHandler
}

export const Button = ({count,handleClick} : button)=>{

    return (
        <>
         <button onClick={handleClick} >Clicked me  {count}</button>
        </>
    )
    
}