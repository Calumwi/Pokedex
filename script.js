const numberInput = document.getElementById('number_input');
let pokéNumber = numberInput.value;
const form = document.querySelector('form');
const textArea = document.getElementById("textArea")

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
    let pokéname = 'Name: ' + `${JSON.stringify(response.data.name)}`;
    let pokétype = 'Type: ' + `${JSON.stringify(response.data.types[0].type.name)}`;

    textArea.textContent = `${pokéname}` + ', ' +`${pokétype}`;
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
