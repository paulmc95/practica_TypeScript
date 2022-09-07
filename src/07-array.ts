(()=>{
  // Array de solo number
  let prices=[1,2,2,1,1,212];

  // No permite agregar otra cosa al array
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);
  prices = [1,2,2];


  // Este array no es solo de numeros sino tambien acepta string y number, si posiciona el mouse sobre la variabla aparece el tipado que tiene
  let variados=[1,2,2,1,1,212,'hola',true];

  //Este array si permite adicionar string y boolen porque es parte de su tipado
  variados.push('asas');
  variados.push(true);
  // variados.push({});
  variados.push(121212);
  variados = [1,2,2];

  // Con esto puedo tener un array que acepte 3 tipos de datos(string| boolean| number), aunque al declarar use solo 2 tipos(string| boolean)
  let mixed: (string| boolean| number)[] =['hola',true];
  // Si acepta numeros(number) porque declaramos que tambien debia aceptar
  mixed.push(123);

  // Con esto puedo tener un array que acepte 4 tipos de datos(string| boolean| number| Object), aunque al declarar use solo 2 tipos(string| boolean)
  // Tener en cuenta que Object puede permitir ingresar array, y objetos
  let mixed2: (string| boolean| number | object)[] =['hola',true];
  // Si acepta objetos y arrays porque el tipado "object" acepta eso
  mixed2.push(123);
  mixed2.push('as');
  mixed2.push(true);
  mixed2.push({});
  mixed2.push([]);

  let numbers=[1,2,2,1,1,212];
  numbers.map(item=>item*2);


})();
