(()=>{
  let isEnable=true;
  // isEnable='as';
  // isEnable=1212;
  // isEnable=undefined;
  isEnable=false;

  let isNew: boolean= false;
  console.log('isNew',isNew);
  isNew=true;
  console.log('isNew',isNew);

  const random=Math.random();
  console.log('random',random);
  // Condicional (isNew =random >=0.5 ? 'as': 'asasd';) isNew recibe as o asasd si random>=0.5 y como isNew es boleano bota error, porque solo puede reciber caracteres booleanos
  isNew =random >=0.5 ? true: false;
  console.log('isNew',isNew);

  const myBoolean : boolean =true;
})();
