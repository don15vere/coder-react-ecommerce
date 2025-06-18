import ItemListContainer from '../components/ItemListContainer';
import { withLogging } from '../hoc/withLogging';

const Home = withLogging(() => (
  <ItemListContainer saludo="¡Bienvenido a Random Experience!" cant='10'/>
));

export default Home;