import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hi! good morning again!</h1>
      <Button text={"Continue"} /> 
    </div>
  );
}

export default App;
