import logo from './logo.svg';
import './App.css';
import FruitContainer from './FruitContainer';

function App() {
  const fruitArr = ['Apple', 'Banana', 'Grapes', 'Kiwi', 'Pineapple', 'Dragonfruit', 'Mango'];
  return (
    <div className="App">
      <FruitContainer fruits={fruitArr} />
    </div>
  );
}

export default App;
