

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
   
   function addListItem(pokemon){
     let pokemonListnode = document.querySelector('.pokemon-list');
     let listItem = document.createElement('li');
     let button = document.createElement('button');
     button.innerText = pokemon.Name;
     button.classList.add(pokemon.Name);
     listItem.append(button);
     pokemonListnode.append(listItem);


     //Event listener
     addListener(button,pokemon);
   }     
   
   function showDetails(pokemon){
     console.log(pokemon);
   } 
   
   function addListener(button,pokemon){
     button.addEventListener('click',function(event){
     console.log(pokemon)});
   }  

   return{
     add:add,
     getAll:getAll,
     addListItem:addListItem,
     showDetails:showDetails
   };

})();

  pokemonRepository.add({Name: "WEEDLE" , Height: 0.7 ,Types:["WATER","FIRE"]});
  let i = 0;
  let updatePokemonList = pokemonRepository.getAll();
  updatePokemonList.forEach( function(pokemon)
  {
    pokemonRepository.addListItem(pokemon);
  });
 
