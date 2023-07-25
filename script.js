const pokémonInput = document.getElementById('pokémon_input');
let pokéInput = pokémonInput.value;
const form = document.querySelector('form');
const textArea = document.getElementById("textArea")
const image = document.getElementById("frontImage");

// const imageChange = () => {
//   image.src = response.data.sprites.front_shiny;
// }



pokémonInput.addEventListener('input', function(e) {
  pokéInput = e.target.value

  if(pokéInput === "Giratina" || pokéInput === "giratina"){
    pokéInput = '487';
  }

})


form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Submitted');

 

  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokéInput.toLowerCase())
  .then(function(response) {
   
    textArea.textContent = ''
    image.src = response.data.sprites.front_default;
    image.onmouseover = () => {
      image.src = response.data.sprites.front_shiny;
    }
    image.onmouseout = () => {
      image.src = response.data.sprites.front_default;
    }

    let abilitiesArray = []
    let abilitiesResponse = Object(response.data.abilities)
    let abilitiesFinal = 'Abilities: ' + `${abilitiesArray[0]}` + `, ${abilitiesArray[1]}`

    for (i = 0; i <=1 ; i++){
      if (abilitiesResponse[i] != undefined){
      abilitiesArray.push(`${abilitiesResponse[i].ability.name}`);
      abilitiesFinal = 'Abilities: ' + `${abilitiesArray[0]}` + `, ${abilitiesArray[1]}`;

      }else{
      abilitiesArray.push('');
      abilitiesFinal = 'Abilities: ' + `${abilitiesArray[0]}`;
    }}
    
    

    let pokéName = 'Name: ' + `${JSON.stringify(response.data.name)}`;
    let pokéType = 'Type: ' + `${JSON.stringify(response.data.types[0].type.name)}`;
    let pokéHeight = 'Height: ' + `${JSON.stringify((response.data.height))/10}`;
    let pokéWeight = 'Weight: ' + `${JSON.stringify((response.data.weight))/10}`;
  
    
    textArea.textContent = `${pokéName}` + ', \n'  +`${pokéType}` + ', \n' +`${pokéHeight}` + 'm, \n' +`${pokéWeight}` + 'kg, \n' + `${abilitiesFinal}`;
    pokéInput.value = ''

  })
  .catch(function(error) {
    console.log(error);
  })
  return false;  
})




