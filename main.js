const pokemonContainer = document.querySelector(".pokemon-container");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let limit = 14;
let offset = 1;

previous.addEventListener("click", () => {
if (offset != 1) {
    offset -= 15;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
}
});

next.addEventListener("click", () => {
offset += 15;
removeChildNodes(pokemonContainer);
fetchPokemons(offset, limit);
});

function fetchPokemon(id) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
    createPokemon(data);
    });
}

function fetchPokemons(offset, limit) {
for (let i = offset; i <= offset + limit; i++) {
    fetchPokemon(i);
}
}

function createPokemon(pokemon) {
const Cardt = document.createElement("div");
Cardt.classList.add("cardt");
Cardt.classList.add("expm");

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

Cardt.appendChild(cardContainer);

const card = document.createElement("div");
card.classList.add("pokemon-block");

const spriteContainer = document.createElement("div");
spriteContainer.classList.add("img-container");

const sprite = document.createElement("img");
sprite.src = pokemon.sprites.front_default;

spriteContainer.appendChild(sprite);

const number = document.createElement("p");
number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

const name = document.createElement("p");
name.classList.add("name");
name.textContent = pokemon.name;

const abilities = document.createElement("p");
abilities.classList.add("abilities");
abilities.textContent = pokemon.abilities;


card.appendChild(spriteContainer);
card.appendChild(number);
card.appendChild(name);
card.appendChild(abilities);


cardContainer.appendChild(card);
pokemonContainer.appendChild(Cardt);
}



function removeChildNodes(parent) {
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}

fetchPokemons(offset, limit);