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
    // const pokéResponse = response.data;
    textArea.textContent = ''
    let pokéName = 'Name: ' + `${JSON.stringify(response.data.name)}`;
    let pokéType = 'Type: ' + `${JSON.stringify(response.data.types[0].type.name)}`;
    let pokéHeight = 'Height: ' + `${JSON.stringify((response.data.height))/10}`;
    let pokéWeight = 'Weight: ' + `${JSON.stringify((response.data.weight))/10}`;
    let pokéAbilities = 'Abilities: ' + `${JSON.stringify(response.data.abilities)}`;
    // let pokéAbilities2 = 'Ability 2: ' + `${JSON.stringify(response.data.abilities[1].ability.name)}`;
    image.src = response.data.sprites.front_default;

    // if (pokéAbilities2 == undefined ){
    //   textArea.textContent = `${pokéName}` + ', \n'  +`${pokéType}` + ', \n' +`${pokéHeight}` + 'm, \n' +`${pokéWeight}` + 'kg, \n' + `${pokéAbilities1}`;
    // }
    // else{
      textArea.textContent = `${pokéName}` + ', \n'  +`${pokéType}` + ', \n' +`${pokéHeight}` + 'm, \n' +`${pokéWeight}` + 'kg, \n' + `${pokéAbilities}`;
    
    // console.log(response.data.name)

  })
  .catch(function(error) {
    console.log(error);
  })
  return false;  
})

// const displayReturn = (response) => {
//   return response.data
// }

numberInput.value = '';
