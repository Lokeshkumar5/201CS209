import React, { useState } from "react";
import  number from '.App';
const App=()=>{
    const [number,setNumber]=useState(0);
    const[text,setText]=useState('Hello');
    return (<div>
        {number}
        NEW APP
        {text}
        <button onClick={()=>setNumber(Math.random())}>Update Number</button>
    </div>);
}

export default App;