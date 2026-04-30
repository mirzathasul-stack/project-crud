
import { createRoot } from 'react-dom/client'

const fruitlist = ['apple', 'banana', 'cherry'];

function App() {
  return (
    <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>
            Name: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
)

                