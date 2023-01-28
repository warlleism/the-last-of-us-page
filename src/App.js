import Header from "./components/header";
import './App.css'
import Interpreter from "./components/interpreter";
import History from './components/history/index';

function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <Interpreter />
    </div>
  );
}

export default App;
