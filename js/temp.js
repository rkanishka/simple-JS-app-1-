//Syntax for fetch or any promise
fetch("URL").then(function(response) {
  response.json(); 
}).catch(function(error) {
  console.log(error)
});
