import Header from "./components/header";
import './App.css'
import Interpreter from "./components/interpreter";
import History from './components/history/index';
import Awards from "./components/awards";

function App() {
  return (
    <div className="App">
      <Header />
      <History />
      <Interpreter />
      <Awards />
    </div>
  );
}

export default App;
