//fetch data from PokeAPI (https://pokeapi.co/api/v2/pokemon/{name})
let input = document.querySelector("#pokemon-input");
let submit = document.querySelector("#query-button");
let pokemonCard = document.querySelector(".pokemon-card");

submit.addEventListener("click", () => {
  if (input.value) {
    fetchPokemon();
  } else {
    alert("please insert a pokémon's name or number");
  }
});

async function fetchPokemon() {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`);
    const resJson = await res.json();
    console.log(resJson);
    pokemonCard.innerHTML = "";
    pokemonCard.innerHTML = `<h5 class="card-title">${resJson.name}</h5>
    <img class="card-img" src='${resJson.sprites.front_default}' alt='${resJson.name}'/>`;
    pokemonCard.classList.remove("hidden");
  } catch (error) {
    alert("invalid name or number");
  }
}

// Set the copyright dynamically in the footer
const copyrightYear = document.querySelector("#copyright-year");

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with the ID "copyright-year"
copyrightYear.innerText = currentYear;
