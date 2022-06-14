import FetchWrapper from './fetch-wrapper.js';
import { endpoint, getPosition } from './utils.js';
//enable before build
import './style.css';

//-----------------URL--------------//
const base_URL = 'https://api.openbrewerydb.org/breweries';
//----------------global variables-------------/
//global map so that we can remove it after clicking close with the close handler
let map;
//global location of the user
let myLocation;

//global flag to indicate that map has to be loaded showing myLocation and than flying to brewery > true
//or map has to be loaded only showing brewery after hoosing city or random > false
let aroundMyLocation = true;

//new class of the fetchWrapper(a bit of overkill in this simple app as we do not post, put or delete)
const fetchBreweries = new FetchWrapper(base_URL);

//elements
const list = document.querySelector('.menu');
const mapPage = document.querySelector('.map-page-container');
const mapEl = document.querySelector('.map-container');
const close = document.querySelector('.close'); 
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit-btn');
const random = document.querySelector('#random');
const details = document.querySelector('.details-container');
const cityInput = document.querySelector('#city-input');
const aroundMe = document.querySelector('#around-me-btn');
const footerBtns= [random, aroundMe, submitBtn, cityInput];

const fetchBreweriesHandler = async endpoint => {
    //create list of breweries and give each an eventlistener
    try {
        const data = await fetchBreweries.get(endpoint);
        let html = '';
        if (data.length === 0) {
            list.innerHTML = '<p>Sorry no breweries found in this area</p>'
            return;
        }
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
    //try to fetch city
    event.preventDefault();
    try{
        fetchBreweriesHandler(endpoint(cityInput.value));
        cityInput.value = '';
        aroundMyLocation = false;
    }catch(err){
        console.error(err, 'city');
    };    
};

const randomHandler = event => {
    event.preventDefault();
    try{
        fetchBreweriesHandler('/random');
        aroundMyLocation = false;
    }catch(err){
        console.error(err, 'random');
    };
};

const aroundMeHandler = event => {
    event.preventDefault();
    aroundMyLocation = true;
    try{
        location();
    }catch(err){
        console.error(err, 'around');
    };
};

const location = async() => {
    try {
        const position = await getPosition();
        myLocation =
            {   
                lat: position.coords.latitude,
                lng: position.coords.longitude 
            };
        // make first fetch of all breweries around my location    
        fetchBreweriesHandler(endpoint(myLocation));      
    } catch(error) {
        console.error(error, 'location')
        alert('No location found, please make sure location is on and restart the app');
    }    
}

const mapHandler = async id => {
    let brewery;
    if (id) {
        //get brewery details and check if it has coordinates
        brewery = await fetchBreweries.get('/' + id);
        if (!brewery.latitude || !brewery.longitude) {
            alert('Sorry, this entry has no coordinates.');
            return;
        };
    };
    if (!id) {
        //no id means we are clicking the closehandler, so enable buttons in footer and remove the map
        footerBtns.map(btn => btn.disabled = false);
        //remove it before toggling classes or it will throw the can't find it error
        if (map && map.remove){
            map.eachLayer(layer => map.removeLayer(layer));
            map.remove();
            mapEl.innerHTML = '<div id="map"></div>';            
        }
    };  
    mapPage.classList.toggle('visible');
    list.classList.toggle('visible');
    if (!id) return;
    //there is an id, so we are going to build the map to show it
    //disable buttons in the footer so we cannot click on them when the map is shown
    footerBtns.map(btn => btn.disabled = true);
    if (aroundMyLocation) {
        //if above flag is true than we want to build the map, show own location and then fly to brewery location
        buildMap(myLocation);
        setTimeout(() => {
            map.flyTo([brewery.latitude, brewery.longitude], 12, {duration: 3})
        }, 800);
        setTimeout(() => {
            L.marker([brewery.latitude, brewery.longitude])
                .addTo(map)
                .bindPopup(brewery.name)
                .openPopup();
        }, 1200);
    } else {
        //flag is false so we only want to show the brewery location
        buildMap({lat: brewery.latitude, lng: brewery.longitude});
        L.marker([brewery.latitude, brewery.longitude])
            .addTo(map)
            .bindPopup(brewery.name)
            .openPopup();
    };
    //show brewery details in bottom right box
    details.innerHTML = `
        <h3>${brewery.name}</h3>
        <p>${brewery.phone || 'number unknown'}</p>
        <p>${brewery.street || 'street unknown'}</p>
        <p>${brewery.city || 'city unknown'}</p>
    `;   
};

const buildMap = (position = {lat: 51.505, lng: -0.09}) => {
    map = L.map('map').setView([position.lat, position.lng], 8);

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


