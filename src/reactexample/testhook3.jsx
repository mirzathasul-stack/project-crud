import { useMemo, useState } from "react";
function App(){
  const [number , setNumber] = useState(1);
const [text, setText] = useState('');

const factorial = useMemo(() => {
  console.log('Calculating factorial..');
  if (number <0 ) return 'no factorial value for negative numbers';
  if (number ===0) return 1;
  
  let result = 1;
  for (let i = 2; i <=number; i++) {
    result *= i;
  }
  return result;
}, [number]);

return(
  <div>
    <h3> Factorial calculation</h3>

    <div>
      <label> Enter Number: </label>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
    </div>
    <p><b> Factorial of  {number}</b> is: {factorial}</p>
    <div>
      <label> Type number to test the output:</label>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
      placeholder="This wont recalculate factorial"
      />
      <p>Text: {text}</p>
    </div>
  </div>

);
}

export default App;