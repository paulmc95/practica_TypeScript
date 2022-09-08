(()=>{
  let userID:number|string;
  userID=1212;
  userID='asas';

  // Permite que envie string o number
  function greeting(myText: string | number){
    // Permite que tome un camina si el tipo es sring y si el tipo es number que tome otro camino
    if(typeof myText==='string'){
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      console.log(`number ${myText.toFixed(4)}`);
    }
  }

  greeting('Nicolas');
  greeting(1212.1231242543);
})();
