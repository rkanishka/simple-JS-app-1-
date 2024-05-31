
// What does this function do
// Parameter: Type: object/array
function myPokemonFunction(Pokemon) {
  document.write(Pokemon.name)
}

Function hoisting

let print_list = function(list){ 
                  list.forEach(myPokemonFunction)};

list.forEach(myPokemonFunction) == for(i = 0; i < list.length; i++) {
                                         myPokemonFunction(list[i])
                                    }
printlist()


let my_pokemon = {Name : Gadha};
myPokemonFunction(my_pokemon);
