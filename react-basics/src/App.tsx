import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Message from './Message';
import { Button } from './Button';

function App() {
  const [count, setCount] = useState(0);
  const flexStyle = {
    display : 'flex',
    marginTop : '20px',
    justifyContent : 'space-evenly',
    width : '90vw',
    outline : 'none',
    border: 'none'
  }
  return (
    <>
      <Message/>
      <div style={flexStyle}>
        <Button count={count} handleClick={()=> setCount(count+1)}/>
        <Button count={count} handleClick={()=> setCount(count+1)}/>
        <Button count={count} handleClick={()=> setCount(count+1)}/>
        <Button count={count} handleClick={()=> setCount(count+1)}/>
        <Button count={count} handleClick={()=> setCount(count+1)}/>
        <Button count={count} handleClick={()=> setCount(count+1)}/>
      </div>
    </>
  )
}

export default App
