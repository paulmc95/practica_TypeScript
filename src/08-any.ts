(()=>{
  //El tipado any, puede recibir o cambiar a cualquier tipo, no se sugiere usar
  let myDynamicVar:any;
  myDynamicVar=100;
  myDynamicVar=null;
  myDynamicVar={};
  myDynamicVar='';

  myDynamicVar='Hola';
  // Hacer un casting a string
  const rta=(myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar=1212;
  // Otra forma de hacer un casting
  const rta2=(<number>myDynamicVar ).toFixed();
  console.log(rta2);
})();
