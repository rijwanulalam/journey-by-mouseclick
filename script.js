fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div'); // create div
        countryDiv.className = 'country';  // create class
        const countryInfo = `<h3 class = 'country-name'>${country.name}</h3>
                            <p>${country.capital}</p>
                            <button onclick = "displayCountriesInfo('${country.name}')">Details</button>
                            `;
        countryDiv.innerHTML = countryInfo; // set inner html on countryDiv

        countriesDiv.appendChild(countryDiv);
    });
}


const displayCountriesInfo = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderInfo(data[0]))
}

// function for country country details
const renderInfo = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `<h1>${country.name}</h1>
    <p>Capital : ${country.capital}</p>
    <p>Population : ${country.population}
    <p>Area : ${country.area}
    <img src="${country.flag}">`
}