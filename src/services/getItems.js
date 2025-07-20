let cache = null;

export function getItems({ category = null, id = null, cant = 12 } = {}) {
  return new Promise((resolve) => {
    
    if (cache) {
      resolve(filtrar(cache, { category, id }));
      return;
    }

    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cant}`)
        .then((res) => res.json())
        .then((data) => {
          const productos = data.results.map((p, i) => {
            const idNum = i + 1;
            let tipo = '';
            if ([1, 2, 3].includes(idNum)) tipo = 'hierba';
            else if ([4, 5, 6].includes(idNum)) tipo = 'fuego';
            else if ([7, 8, 9].includes(idNum)) tipo = 'agua';
            else tipo = 'bicho';

            return {
              id: idNum.toString(),
              nombre: p.name,
              precio: parseInt(Math.random() * 10000), 
              imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idNum}.png`,
              category: tipo
            };
          });

          cache = productos;
          resolve(filtrar(productos, { category, id }));
        });
    }, 1000);
  });
}

function filtrar(productos, { category, id }) {
  if (id) {
    return productos.find((prod) => prod.id === id);
  } else if (category) {
    return productos.filter((prod) => prod.category === category);
  } else {
    return productos;
  }
}
