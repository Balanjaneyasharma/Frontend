import { useState } from "react";
import ListGroup from "./ListGroup";

function Message(){
    const [showMovieLsit , setShowMovieLsit] = useState(true);

    return (
    <>
     <h1>
        Hello React {1+9797}
     </h1>
     <button onClick={ ()=> setShowMovieLsit(!showMovieLsit) }>Toogle</button>
     { showMovieLsit &&  <ListGroup name ="its okay"/> }
    </>
    
    )
}
export default Message;