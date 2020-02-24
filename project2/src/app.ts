import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const address = addressInput.value;
    console.log(address);
    const coordinates = {lat: 40.756670, lng: -73.978570}; // Can't fetch coordinates from Google API, use dummy ones
    document.getElementById('map')!.innerHTML = ''; // clear <p> from <div id="map">
    new Map({
        target: 'map',
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: new View({
            center: [coordinates.lng, coordinates.lat],
            zoom: 16
        })
    });
}

form.addEventListener('submit', searchAddressHandler);
