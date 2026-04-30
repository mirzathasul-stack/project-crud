import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme ===
       'light' ? 'dark' : 'light');
  };

  const styles = { 
    backgroundColor: theme === 'light' ? 'lightblue' : '#222', color: theme === 'light' ? 'black' : 'lightblue', height: '100vh',
    padding: '20px', transition: '0.3s'
  };

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={styles}>
        <h1> Theme: {theme}</h1>
        <button onClick={toggleTheme}> Switch to { theme=== 'light'  ? 'Dark' : 'light'} Mode </button>

<childComponent />
      </div>
    </ThemeContext.Provider>
  );

}

function childComponent() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style = {{ marginTop: '20px', border: '1px', padding: '10px' }}>
      <p> Child component</p>
      <p> theme: {theme}</p>
    </div>
  );
}
export default App;