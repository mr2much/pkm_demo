// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon
const cont = document.querySelector('#container');
const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

for (let i = 0; i < 151; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const label = document.createElement('span');
  label.innerText = `#${i + 1}`;
  const newImg = document.createElement('img');
  newImg.src = `${baseURL}/${i + 1}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(label);

  cont.appendChild(pokemon);
}
