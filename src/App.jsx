import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a Random Experience!" />
    </>
  );
}

export default App;