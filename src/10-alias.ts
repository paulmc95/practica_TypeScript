(()=>{
  // Esto permite que el UserID pueda usarse como una variable de tipado, cosa que si se tiene que cambiar el tipado se cambiaria solo a esa variable
  type UserID = string | number;
  let userId: UserID;

  function greeting(userId: UserID){
    if(typeof userId==='string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting('Paul');

  // Literal types
  type Sizes= 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes; //Esto permite reducir el conjunto de string a una cadena de caracteres especificos
  shirtSize='M';
  shirtSize='L';
  shirtSize='XL';
  shirtSize='S';

  // Como se redujo a esas 4 variables esa variable no aceptará ningun otro string
  // shirtSize='DSADSA';

  // Aca esta recibiendo 2 parametros con sus identificadores de su grupo de tipos
  // UserID = string | number
  // Sizes = 'S' | 'M' | 'L' | 'XL'
  function greeting2(userId: UserID, size: Sizes){
    if(typeof userId==='string'){
      console.log(`string ${userId.toLowerCase()} size ${size.toLowerCase()}`);
    }else{
      console.log(`number ${userId.toFixed(1)} size ${size.toLowerCase()}`);
    }
  }

  greeting2(11.3435, 'M');
  greeting2('qwewrr', 'XL');

  // El 2do parametro no recibe porque tiene que ser alguno de los tipos de tamaño(S,M,L,XL)
  // greeting2('dasd', 'dasqweq');

})();
