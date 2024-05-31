

  let pokemonRepository = (function(){
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

    function add(pokemon){
    pokemonList.push(pokemon);
     
     }
     
     function getAll(){
     return pokemonList;
    
     } 
    
    return{
      add:add,
      getAll:getAll
      };
})();

  pokemonRepository.add({Name: "WEEDLE" , Height: 0.7 ,Types:["WATER","FIRE"]});
   
  let updatePokemonList= pokemonRepository.getAll();
  
  updatePokemonList.forEach(function(pokemon){
    
       document.write("Name:" + pokemon.Name + "<br>" + " " + "Height:" + pokemon.Height + "<br>" + " " + "Types:" + pokemon.Types + "<br><br>" );
    

    });
 
