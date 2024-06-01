

  let pokemonRepository = (function(){
  let pokemonList=[];  

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
     button.innerText = pokemon.name;
     button.classList.add(pokemon.name);
     listItem.append(button);
     pokemonListnode.append(listItem);


     //Event listener
     addListener(button,pokemon);
   }     
   
   function showDetails(pokemon){
     loadDetails(pokemon).then(function(response){console.log(pokemon)});
   } 
   
   function addListener(button,pokemon){
     button.addEventListener('click',function(event){
     showDetails(pokemon)});
   }  
   
   function loadList(){
    return  fetch("https://pokeapi.co/api/v2/pokemon/?limit)=150").then(function(response)
       {
         return response.json();})
         .then(function(pokemon){
           pokemon.results.forEach(function(item){
           let poke = {
                       name: item.name,
                       detailsUrl: item.url};
             add(poke);
           })
         }).catch(function(error){console.log(error);});  
   }
   

   // ek load detrails function banao
   function loadDetails(pokemon){
     return fetch(pokemon.detailsUrl).then(function(response){
       return response.json();}).then(function(pokedetails){
        pokemon.height = pokedetails.height;
        pokemon.imageUrl = pokedetails.sprites.front_default; })
        .catch(function(error){});
     }
   
   return{
     add:add,
     getAll:getAll,
     addListItem:addListItem,
     showDetails:showDetails,
     loadList:loadList,
     loadDetails:loadDetails
   };

})();
     //READ DATA FROM API
    //ADD DATA IN ARRAY
     pokemonRepository.loadList().then(function(response){

      //GET DATA FROM ARRAY
      let updatePokemonList = pokemonRepository.getAll();
      // MAKE BUTTON OF EACH POKEMON
      updatePokemonList.forEach(function(pokemon){
       pokemonRepository.addListItem(pokemon);
      })
    });
    
   


      
