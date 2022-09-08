(()=>{
  // let myNumber: number= undefined;
  // let myString: string= null;

  let myNull:null =null;
  let myUndefined: undefined =undefined;

  let myNumber: number| null =null; //Eso sirve si en algun momento cuando se inicializa una variable acepte el null y luego ya tome un valor designado
  myNumber=12;

  let myString: string | undefined= undefined;
  myString='asas';

  function hi(name: string | null){
    let hello='Hola ';
    if(name){
      hello+=name;
    }else{
      hello+='nobody';
    }
    console.log(hello);
  }

  hi('Nicolas');
  hi(null);

  function hi2(name: string | null){
    let hello='Hola ';
    // ?->Optional Change
    // name? -> Si 'name' no existe toda esa expresion devolverá un nulo(null), y como no puede ejecutar eso, ire a otro lado y ejecutará el 'nobody'
    hello+=name?.toLowerCase() || 'no existe es nobody';
    console.log(hello);
  }

  hi2('Paul')
  hi2(null);

})();
