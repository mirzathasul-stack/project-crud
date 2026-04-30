import { useEffect, useRef, useState } from "react";
function App() {
  const [currentValue,setCurrentValue] = useState('');
  const prevValueRef = useRef('');

  useEffect(() => {
    prevValueRef.current =currentValue;}, [currentValue]);

    return (
      <div>
        <h3>Type Here</h3>
        <input type="text" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}
        />
<p><b>Current value:</b> {currentValue}</p>
<p><b>Previous Value:</b>{prevValueRef.current}</p>

      </div>
    );
  }
export default App;