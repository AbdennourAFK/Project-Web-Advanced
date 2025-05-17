const searchInput = document.getElementById('search');
const continentFilter = document.getElementById('continentFilter');
const countryTable = document.getElementById('countryTable').getElementsByTagName('tbody')[0];
const searchBtn = document.getElementById('searchBtn');

let favoriteCountries = JSON.parse(localStorage.getItem('favorites')) || [];
let countries = [];

const fetchData = async () => {
  if (sessionStorage.getItem('cachedCountries')) {
    countries = JSON.parse(sessionStorage.getItem('cachedCountries'));
    displayCountries(countries);
  } else {
    const response = await fetch('https://restcountries.com/v3.1/all');
    countries = await response.json();
    sessionStorage.setItem('cachedCountries', JSON.stringify(countries));
    displayCountries(countries);
  }
};

const displayCountries = (countries) => {
  countryTable.innerHTML = '';
  countries.forEach(country => {
    const row = countryTable.insertRow();
    const flagCell = row.insertCell();
    const nameCell = row.insertCell();
    const capitalCell = row.insertCell();
    const populationCell = row.insertCell();
    const regionCell = row.insertCell();
    const languagesCell = row.insertCell();

    const isFavorite = favoriteCountries.includes(country.name.common);
    const label = isFavorite ? '[Favoriet]' : '[Toevoegen]';

    flagCell.innerHTML = `<img src="${country.flags.png}" alt="Flag" style="width: 50px;">`;
    nameCell.innerHTML = `${country.name.common} <button class="fav-btn" data-name="${country.name.common}">${label}</button>`;
    capitalCell.textContent = country.capital ? country.capital[0] : 'N/A';
    populationCell.textContent = country.population.toLocaleString();
    regionCell.textContent = country.region;
    languagesCell.textContent = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  });

  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleFavorite(btn.dataset.name));
  });
};

const toggleFavorite = (name) => {
  if (favoriteCountries.includes(name)) {
    favoriteCountries = favoriteCountries.filter(c => c !== name);
  } else {
    favoriteCountries.push(name);
  }
  localStorage.setItem('favorites', JSON.stringify(favoriteCountries));
  displayCountries(countries);
};

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const continent = continentFilter.value.toLowerCase();
  let filtered = countries;

  if (continent) {
    filtered = filtered.filter(c => c.region && c.region.toLowerCase() === continent);
  }

  filtered = filtered.filter(c =>
    c.name.common.toLowerCase().includes(searchTerm)
  );

  displayCountries(filtered);
});

const sortCountries = (key) => {
  countries.sort((a, b) => {
    if (key === 'name') {
      return a.name.common.localeCompare(b.name.common);
    } else if (key === 'population') {
      return b.population - a.population;
    } else if (key === 'region') {
      return a.region.localeCompare(b.region);
    }
  });
  displayCountries(countries);
};

const addThemeSwitcher = () => {
  const themeBtn = document.createElement('button');
  themeBtn.textContent = 'Thema wisselen';
  themeBtn.style.margin = '10px';
  document.body.insertBefore(themeBtn, document.body.firstChild);

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.body.className = currentTheme;

  themeBtn.addEventListener('click', () => {
    const newTheme = document.body.className === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
};

const addSortControls = () => {
  const sortContainer = document.createElement('div');
  sortContainer.innerHTML = `
    <button id="sortName">Sorteer op naam</button>
    <button id="sortPopulation">Sorteer op populatie</button>
    <button id="sortRegion">Sorteer op regio</button>
  `;
  document.body.insertBefore(sortContainer, document.getElementById('countryTable'));

  document.getElementById('sortName').addEventListener('click', () => sortCountries('name'));
  document.getElementById('sortPopulation').addEventListener('click', () => sortCountries('population'));
  document.getElementById('sortRegion').addEventListener('click', () => sortCountries('region'));
};

fetchData();
addThemeSwitcher();
addSortControls();

document.getElementById('showFavoritesBtn').addEventListener('click', () => {
  const favoriteData = countries.filter(c => favoriteCountries.includes(c.name.common));
  displayCountries(favoriteData);
});

document.getElementById('showAllBtn').addEventListener('click', () => {
  displayCountries(countries);
});
