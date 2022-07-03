
import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <ListContainer  text={"Hola mundo"}/>
     
    </div>
  );
}

export default App;
