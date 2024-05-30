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

     function myPokemonFunction(Pokemon)
    {
      document.write("Name:" + Pokemon.Name + "<br>" + " " + "Height:" + Pokemon.Height + "<br>" + " " + "Types:" + Pokemon.Types + "<br><br>" );
    } 
     pokemonList.forEach(myPokemonFunction);
