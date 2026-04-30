import {useState } from 'react';
function App() {
const fruitlist = ['Apple', 'Banana', 'Orange'];
const [selectFruit, setselectFruit] = useState('');
const handleChange = (e) => { setselectFruit(e.target.value);
  };
const handleshowFruit= () => { if (!selectFruit){
alert("Please select a fruit");
}
else{
alert('You Selected' + selectFruit );
}
};

return (
  <div>
    <ul>
      {fruitlist.map((fruit,index) => (
        <li key={index}>
          <input type="radio" name="fruit" value={fruit}
            checked={selectFruit === fruit} onChange={handleChange}
            /> {fruit}
        </li>
      ))}
    </ul>
    <button onClick={handleshowFruit}> SUBMIT</button>
  </div>
);
}
export default App;