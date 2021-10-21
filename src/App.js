import './App.css';
import Home from './pages/Home';

function App() {
  const styles = {};
  
  return(
  <>
    {/* Acá llamo a Home, como no recibe hijos coloco la barra */}
    <Home />
  </>
  );
}

export default App;
