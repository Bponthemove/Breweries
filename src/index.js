import FetchWrapper from './fetch-wrapper.js';
// import './style.css';

const base_URL = 'https://api.openbrewerydb.org/breweries';
const endpoint = query => {
    if (typeof(query) === 'string') return `?by_city=${query.trim().replace(/ /g,"_")}&per_page=20`;
    else return `?by_dist=${query.lat},${query.long}&per_page=20`;
};
let map;
const fetchBreweries = new FetchWrapper(base_URL);
const list = document.querySelector('.menu');
const mapEl = document.querySelector('.map-container');
const close = document.querySelector('.close'); 
const form = document.querySelector('#form');
const random = document.querySelector('#random');
const details = document.querySelector('.details-container');
const cityInput = document.querySelector('#city-input');
const aroundMe = document.querySelector('#around-me-btn');

const fetchBreweriesHandler = async endpoint => {
    try {
        const data = await fetchBreweries.get(endpoint);
        let html = '';
        data.forEach(brewery => {
           html += `
           <div class='card' id=${brewery.id}>
                <h3>${brewery.name}</h3>
                <div>${brewery.city}</div>
           </div>` 
        });
        list.innerHTML = html;
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', event => mapHandler(event.currentTarget.id))
        });
    }catch(err){
        console.error(err, 'fetch');
    };
};

const cityHandler = event => {
    event.preventDefault();
    try{
        fetchBreweriesHandler(endpoint(cityInput.value));
        cityInput.value = '';
    }catch(err){
        console.error(err, 'city');
    };    
};

const randomHandler = event => {
    event.preventDefault();
    try{
        fetchBreweriesHandler('/random');
    }catch(err){
        console.error(err, 'random');
    };
};

const aroundMeHandler = event => {
    event.preventDefault();
    try{
        location(false);
    }catch(err){
        console.error(err, 'around');
    };
};

const getPosition = (options) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);       
    });
}

const location = async(build = true) => {
    try {
        const position = await getPosition();
        let location =
            {   
                lat: position.coords.latitude,
                lng: position.coords.longitude 
            };
        fetchBreweriesHandler(endpoint(location));
        if (build) buildMap(location);
        else {
            map.setView(location, 13, {animate: true, duration: 5});
        }        
    } catch(error) {
        console.error(error, 'location')
    }    
}

const mapHandler = async id => {
    console.log(id)
    mapEl.classList.toggle('not-visible');
    list.classList.toggle('not-visible');
    mapEl.classList.toggle('visible');
    list.classList.toggle('visible');
    if (id) {
        const brewery = await fetchBreweries.get('/' + id);
        if (brewery.latitude && brewery.longitude){
            map.setView({lat: brewery.latitude, lng: brewery.longitude}, 13, {animate: true, duration: 5});
            L.marker([brewery.latitude, brewery.longitude]).addTo(map)
            .bindPopup(brewery.name)
            .openPopup();
            map.invalidateSize()
            details.innerHTML = `
                <h3>${brewery.name}</h3>
                <p>${brewery.phone || 'number unknown'}</p>
                <p>${brewery.street || 'street unknown'}</p>
                <p>${brewery.city || 'city unknown'}</p>
            `
        }
    }
}

const buildMap = (position = {lat: 51.505, lng: -0.09}) => {
    console.log(position)
    map = L.map('map').setView([position.lat, position.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([position.lat, position.lng]).addTo(map)
        .bindPopup('You are here')
        .openPopup();
}

aroundMe.addEventListener('click', aroundMeHandler);
random.addEventListener('click', randomHandler);
form.addEventListener('submit', cityHandler);
close.addEventListener('click', () => mapHandler());
location();


