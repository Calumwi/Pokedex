const numberInput = document.getElementById('number_input');
let pokéNumber = numberInput.value;
const form = document.querySelector('form');
const textArea = document.getElementById("textArea")
const image = document.getElementById("frontImage");

numberInput.addEventListener('input', function(e) {
    pokéNumber = e.target.value;
  })


form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Submitted');


  axios.get('https://pokeapi.co/api/v2/pokemon/' + pokéNumber)
  .then(function(response) {
   
    textArea.textContent = ''
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
  
    image.src = response.data.sprites.front_default;
    textArea.textContent = `${pokéName}` + ', \n'  +`${pokéType}` + ', \n' +`${pokéHeight}` + 'm, \n' +`${pokéWeight}` + 'kg, \n' + `${abilitiesFinal}`;
    

  })
  .catch(function(error) {
    console.log(error);
  })
  return false;  
})


numberInput.value = '';
