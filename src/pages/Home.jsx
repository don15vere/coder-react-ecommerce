import ItemListContainer from '../components/ItemListContainer';
import { withLogging } from '../hoc/withLogging';

const Home = withLogging(() => (
  <ItemListContainer greeting="¡Bienvenido a la tienda Pokémon!" />
));

export default Home;