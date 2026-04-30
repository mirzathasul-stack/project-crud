import { createContext, useEffect, useRef, useState } from "react";
const ThemeContext = createContext();

function App() {

  const renderCount = useRef(1);
const [count, setCount] = useState(0);
  useEffect(() => {
    renderCount.current += 1;
   console.log('Rendered:', renderCount.current);
   } );
  
  return(
    <div>
      <h2>Component Render Count</h2>
      <p> Rendered :{renderCount.current} times</p>
      <button onClick ={() => setCount(count + 1)}>
        Rerendered count: {count}
      </button>
    </div>
  );
}

export default App;