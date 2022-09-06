(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i];
    }
    return total;
  }
  function addProduct(index) {
    let total=0;
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person.name +  limit;
  console.log(rta);
});


// npx tsc src/01-hello.ts --target es6 --outDir dist
// --target es6 ->Permite pasar el archivo ts a un js con es6 mas actualizado, porque ts lo envia a es3 y tal vez algunas cosas no reconoce
// --outDir dist ->Donde se sugiere guardar, es una carpeta separada
