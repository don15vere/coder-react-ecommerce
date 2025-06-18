import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Categoria from './pages/Categoria';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categoria/:categoryId" element={<Categoria />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;