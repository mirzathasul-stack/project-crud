import {useState } from 'react';
function App() {
const fruitlist = ['Apple', 'Banana', 'Orange'];
const [selectFruit, setselectFruit] = useState('');
const handleshowFruit= () => { alert('Selected Fruit is ' +selectFruit);
};

return (
  <div>
    <ul>
      {fruitlist.map((fruit) => (
        <li key={fruit}>
          <label>
            <input type="radio" name="fruit" value={fruit}
            checked={selectFruit === fruit} onChange={(e) => setselectFruit(e.target.value)}
            /> {fruit}
          </label>
        </li>
      ))}
    </ul>
    <button onClick={handleshowFruit}>Shows Selected Fruit </button>
  </div>
);
}
export default App;