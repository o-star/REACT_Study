import Counter from './component/Counter';
import Todolist from './component/Todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        Hello
      </div>
      <Counter />
      <br/><br/><br/>
      <Todolist />
    </div>
  );
}

export default App;
