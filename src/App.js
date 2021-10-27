import './App.css';
import Home from './pages/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return(
  <>
    <Home />
    <ItemListContainer title='Listado de productos'/>
  </>
  );
}

export default App;
