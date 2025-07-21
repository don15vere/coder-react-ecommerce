# 🛒 ProyectoFinal+Palacios

**Random Experience** es una aplicación web de e-commerce desarrollada con React. Permite a los usuarios navegar un catálogo de productos, ver el detalle de cada uno, agregarlos al carrito y completar una compra, cuyos datos se almacenan en Firebase.

---

## 🚀 Funcionalidades principales

- Listado de productos con carga dinámica desde Firestore
- Filtro por categorías con React Router
- Vista de detalle con información ampliada e imagen grande
- Carrito de compras con estado global usando Context API
- Modal de carrito + Modal de checkout
- Formulario de compra con generación de orden en Firestore
- Renderizado condicional de loaders y mensajes

---

## 🧱 Stack y herramientas utilizadas

- **React**: Vite + JSX + Hooks
- **React Router DOM**: Navegación SPA
- **Bootstrap**: Estilos base
- **Firebase (Firestore)**: Base de datos en la nube
- **Context API**: Manejo de estado global del carrito

---

## 📁 Estructura de carpetas relevante

```
/src
 ├── components/        # Componentes visuales
 ├── context/           # CartContext con Provider
 ├── pages/             # Vistas como CartView o ItemDetailContainer
 ├── services/          # getItems y createOrder con Firestore
 ├── utils/             # Funciones
/public
 └── assets/imgs/       # Imágenes del catálogo
```

---

## ⚙️ Cómo ejecutar este proyecto

1. Cloná el repositorio:
```bash
git clone https://github.com/don15vere/coder-react-ecommerce.git
```

2. Instalá las dependencias:
```bash
npm install
```

3. Ejecutá el servidor local:
```bash
npm run dev
```

4. Abrí en tu navegador:
```
http://localhost:5173
```

---

## 📬 Contacto
Luciano Palacios — [lucianonpalacios@gmail.com]

---

_Proyecto desarrollado para la entrega final del curso **React JS** – Coderhouse._
