const numberInput = document.getElementById('number_input');
let pokéNumber = numberInput.value;
numberInput.addEventListener('input', function(e) {
    pokéNumber = e.target.value;
  })


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Submitted');


axios.get('https://pokeapi.co/api/v2/pokemon/' + pokéNumber)
.then(function(response) {
  console.log(response.data);
})
.catch(function(error) {
  console.log(error);
})
})

numberInput.value = '';
