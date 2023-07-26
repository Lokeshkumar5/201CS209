import { useState } from 'react';
import numbers from './number/num';
import './App.css';
const DATA = [
  {
    id: 'prime',
    numbers:[2,3,5,7,11,13] },
  { id: 'odd', 
  numbers:[1,3,5,7,9,11,13,15,17,19,21,23] },
  {
    id: 'fibo',
    numbers:[1,1,2,3,5,8,13,21] },
  {
    id: 'rand',
    numbers:[5,17,3,19,76,24,1,5,10,34,8,27,7] },
];
function App() {
    const[num,setnumber]= useState(DATA)
    const onAddnumber=(newvalue)=>{
        setnumber((prev)=>[newvalue,...prev])
    }
}
export default App;
