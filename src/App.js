
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div class="App">
     <NavBar/> 
     <ItemListContainer greeting={"Bienvenido a The Grow"} />    


    </div>
  
  );
}

export default App;
