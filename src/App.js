import './App.css';
import Card from './components/Card';
import { loadUnitList } from './services/api';

function App() {

loadUnitList()
  return (
    <div className="App">
      <h1>War Builder</h1>
      <Card/>
    </div>
  );
}

export default App;
