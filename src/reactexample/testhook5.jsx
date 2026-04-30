import { createContext, useEffect, useRef, useState } from "react";


function App() {
const [count, setCount] = useState(0);
 const [calculation, setCalculation] = useState(0);
 const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });
    useEffect(() => {
      setCalculation(count * 2);
  }, [count]);
  
  return(
    <div>
      <h2>Component Render Count</h2>
    <p>Rendered : {renderCount.current} times</p>  
      <button onClick ={() => setCount((count) => count + 1)}> + Increment Count</button>
        <p> count: {count}</p>
        <p>calculation: {calculation}</p>    
    </div>
  );
}

export default App;