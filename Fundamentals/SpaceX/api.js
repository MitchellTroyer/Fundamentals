const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e)
{
    e.preventDefault();
    fetch(baseURL)//gets the infromation
    .then(result =>
    {
        return result.json();//json formats results and makes it look nice
    })
    .then(json =>
    {
        displayRockets(json);//setup that creates an array of objects^^
        console.log(json);
    }); 
}

function displayRockets(json)
{
    let rockets = json.forEach(r => 
        {
            let rocket = document.createElement('li');
            let firstFLight = document.createElement('li');
            let engines = document.createElement('li');
            rocket.innerText = r.name;
            firstFLight.innerText = r.first_flight;
            engines.innerText = r.type;
            spaceShips.appendChild(rocket);//grab names
            spaceShips.appendChild(firstFLight);
            spaceShips.appendChild(engines);
        })
}