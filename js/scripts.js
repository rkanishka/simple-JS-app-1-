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

      for(let i=0; i<pokemonList.length ; i++)
       {  
         if (pokemonList[i].Height > 1.0)
           {
             document.write("Name:" + pokemonList[i].Name + "<br>"  + " " + "Height:" + pokemonList[i].Height + "(WOW THAT'S BIG)" + "<br>"  + " " + "Types:" +  pokemonList[i].Types + "<br><br>")
           }
         else
           {
             document.write("Name:" + pokemonList[i].Name + "<br>"  + " " + "Height:" + pokemonList[i].Height  + "<br>"  + " " + "Types:" +  pokemonList[i].Types + "<br><br>")
           }
       
      } 
