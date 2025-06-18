import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { withLogging } from './hoc/withLogging';

const ItemListContainerWithLogging = withLogging(ItemListContainer);

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainerWithLogging saludo="¡Bienvenido a la tienda Pokémon!" />
    </>
  );
}

export default App;