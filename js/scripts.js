 
let pokemonRepository = (function () {
let pokemonList=[
  {
    Name   : "BABLASUR",
    Height : 7,
    Types  : ["GRASS","POISON"]
  },
  {
    Name   : "PIKACHU",
    Height : 0.4,
    Types  : ["ELECTRIC"]
  },
  {
    Name   : "ZUBAT",
    Height : 0.8,
    Types  : ["POISON","FLYING"]
  },
  {
    Name   : "MEOWTH",
    Height : 0.4,
    Types  : ["NORMAL"]
  },
  {
    Name   : "SEEL",
    Height : 1.1,
    Types  : ["WATER"]
  },
  {
    Name   : "DODUO",
    Height : 1.4,
    Types  : ["FLYIN","NORMAL"]
  } 
 ];
    function add(Pokemon){
    pokemonList.push(Pokemon);
      }
    function getAll(){
    return pokemonList;
      }
      
     function myPokemonFunction(Pokemon)
    {
      document.write("Name:" + Pokemon.Name + "<br>" + " " + "Height:" + Pokemon.Height + "<br>" + " " + "Types:" + Pokemon.Types + "<br><br>" );
    } 
         //ADD A NEW POKEMON
      add({"Name":"KAKUNA" , "Height":0.6 , "Types":["BUG","POISON"] });     
         
     pokemonList.forEach(myPokemonFunction); 
       
           return{
             add:add,
             getAll:getAll
                };
})();
        

    
