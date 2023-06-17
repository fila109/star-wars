import { rendalPage } from "./main.js";

export function render(data) {
  const appContainer = document.getElementById('app');
  const buttonBack = document.createElement('button');
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const episode = document.createElement('h3');
  const director = document.createElement('h5');
  const producer = document.createElement('h5');
  const cardText = document.createElement('p');
  const wrapper = document.createElement('div');
  const wrapperPlanets = document.createElement('div');
  const planetHeader = document.createElement('h3');
  const wrapperSpecies = document.createElement('div');
  const speciesHeader = document.createElement('h3');
  const wrapperStarships = document.createElement('div');
  const starshipsHeader = document.createElement('h3');
  const wrapperCharacters = document.createElement('div');
  const charactersHeader = document.createElement('h3');

  let planetsList;
  let speciesList;
  let starshipsList;
  let charactersList;

  container.classList.add('container', 'text-content', 'text-white');
  header.classList.add('m-3');
  cardText.classList.add('card-text', 'm-3');
  wrapper.classList.add(
    'd-flex',
    'justify-content-between',
    'flex-wrap',
    'py-2'
  );

  wrapperCharacters.append(charactersHeader);
  buttonBack.classList.add('btn', 'mt-3', 'ms-3', 'btn-outline-light');

  buttonBack.textContent = 'Back to episodes';
  header.textContent = data.title;
  episode.textContent = `Episode ${letter(data.episode_id)}`;
  director.textContent = `Director ${data.director}`;
  producer.textContent = `Producer ${data.producer}`;
  cardText.textContent = data.opening_crawl;
  planetHeader.textContent = 'Planets';
  speciesHeader.textContent = 'Species';
  starshipsHeader.textContent = 'Starships';
  charactersHeader.textContent = 'Characters';

  document.body.style.transition = '2s';
  if (data.episode_id === 1) {
    appContainer.style.backgroundImage = 'url(img/episode-1.jpg)';
  }
  if (data.episode_id === 2) {
    appContainer.style.backgroundImage = 'url(img/episode-2.jpg)';
  }
  if (data.episode_id === 3) {
    appContainer.style.backgroundImage = 'url(img/episode-3.jpg)';
  }
  if (data.episode_id === 4) {
    appContainer.style.backgroundImage = 'url(img/episode-4.jpg)';
  }
  if (data.episode_id === 5) {
    appContainer.style.backgroundImage = 'url(img/episode-5.jpg)';
  }
  if (data.episode_id === 6) {
    appContainer.style.backgroundImage = 'url(img/episode-6.jpg)';
  }

  wrapperPlanets.append(planetHeader);
  wrapperSpecies.append(speciesHeader);
  wrapperStarships.append(starshipsHeader);
  wrapper.append(wrapperPlanets, wrapperSpecies, wrapperStarships);

  details(data.planets, planetsList, wrapperPlanets);
  details(data.species, speciesList, wrapperSpecies);
  details(data.starships, starshipsList, wrapperStarships);
  details(data.characters, charactersList, wrapperCharacters);

  appContainer.append(buttonBack);
  container.append(
    header,
    episode,
    director,
    producer,
    cardText,
    wrapper,
    wrapperCharacters
  );

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
    rendalPage(
      './main-info.js',
      `https://swapi.dev/api/films`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
    )
  });
  return container;
}

function letter(x) {
  if (x == 1) {
    x = 'I'
  }
  if (x == 2) {
    x = 'II'
  }
  if (x == 3) {
    x = 'III'
  }
  if (x == 4) {
    x = 'IV'
  }
  if (x == 5) {
    x = 'V'
  }
  if (x == 6) {
    x = 'VI'
  }
  return x;
}

function details(options, optionsList, wrapperOptions) {
  if (options) {
    options.forEach((option) => {
      fetch(option)
        .then((res) => res.json())
        .then((data) => {
          optionsList = document.createElement('span');
          optionsList.classList.add('p-2');
          optionsList.textContent = ` ${data.name} `;
          wrapperOptions.classList.add('m-2');
          wrapperOptions.append(optionsList);
        });
    });
  }
}
