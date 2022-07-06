
import './App.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <ListContainer  text={"Items"}/>
    <ItemCount/>
    </div>
  );
}

export default App;
