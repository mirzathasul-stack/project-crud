import styles from './Mymodules.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
      <p className={styles.myparagraph}>
        My Paragraph
      </p>
    </div>
  );
}

export default App;

               