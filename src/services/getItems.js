export function getItems({ category = null, id = null, cant = 12 } = {}) {
  return new Promise((resolve) => {
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
              precio: (Math.random() * 10000).toFixed(0),
              imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idNum}.png`,
              category: tipo
            };
          });

          if (id) {
            resolve(productos.find((prod) => prod.id === id));
          } else if (category) {
            const filtrados = productos.filter((prod) => prod.category === category);
            resolve(filtrados);
          } else {
            resolve(productos);
          }
        });
    }, 1000);
  });
}