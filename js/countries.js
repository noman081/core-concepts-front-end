const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countriesList = countries.map(country => displayUI(country));
    const countryContainer = document.getElementById('countries');
    // console.log(countriesList[0]);
    countryContainer.innerHTML = countriesList.join(' ');
}

const displayUI = country => {
    return `
        <div class='country'>
            <h2>${country.name.common}</h2>
            <img src = "${country.flags.png}">
        </div>
    `;
}
loadCountries();