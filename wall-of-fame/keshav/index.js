let domain = "";
let ip = "";
let add;
let count = 0;

// MAP JS
const mapFn = (lat, lng) => {
    latit = lat;
    longit = lng;
    if(count == 0) {
        showMap();
    }
    count++;
    L.marker([lat, lng]).addTo(mymap);
    mymap.panTo([lat, lng]);
    loader.style.display = "none";
}

// FETCH FUNCTION 
const fetchFn = () => {

    fetch(`https://geo.ipify.org/api/v1?apiKey=at_hKY1etb9DMbKMhHUZk4RiD9hmQu1p&${add}`)
        .then(response => {
            return response.json();
        })
        .then(result => updateData(result))
        .catch(err => {
            console.log(err);
            loader.style.display = "none";
    });

}

// CHECK IF THE ENTERED VALUE IS VALID DOMAIN OR IP 
const input = (inputText) => {
    
    // CHECKER VARIABLES
    var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(205[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    var domformat = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
    
    // FUNCTION TO DECIDE IP OR DOMAIN 
    if(inputText.match(ipformat)) {
        add = `ipAddress=${inputText}`;
    } else if (inputText == ""){
          add = `ipAddress=${inputText}`;
      } else if(inputText.match(domformat)) {
            add = `domain=${inputText}`; 
        }
    fetchFn();
}

input(domain);

// ALL QUERIES SELECTED HERE AND PUT AS AN OBJECT 
let query = {
    track: document.querySelector('#track'),
    submit: document.querySelector('#submit'),
    ip: document.querySelector('.address .text'),
    city: document.querySelector('.city'),
    country: document.querySelector('.country'),
    isp: document.querySelector('.isp .text'),
    timezone: document.querySelector('.timezone'),
    loader: document.querySelector('#loader')
}

// UPDATE DATA FUNCTION 
const updateData = (data) => {
    let toLoad = {
        ip   : data.ip,
        isp  : data.isp,
        city : data.location.city,
        country : data.location.country,
        timezone : data.location.timezone,
        lat: data.location.lat,
        lng: data.location.lng
    }

    mapFn(toLoad.lat, toLoad.lng);

    query.ip.textContent = toLoad.ip;
    query.isp.textContent = toLoad.isp;
    query.country.textContent = toLoad.country;
    query.city.textContent = toLoad.city;
    query.timezone.textContent = toLoad.timezone;
}



// EVENT LISTENERS

// ENTER EVENT LISTENER 
query.track.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();

        if(!query.track.value == "") {
            loader.style.display = "block";
            input(query.track.value);
        }
    }
});

// SUBMIT EVENT LISTENER 
query.submit.addEventListener('click', () => {

    if(!query.track.value == "") {
        loader.style.display = "block";
        input(query.track.value);
    }
});

let mymap, popup, latlng, marker, latit, longit;

const showMap = () => {

    mymap = L.map('mapid').setView([latit, longit], 13);
            
    marker = L.marker([latit, longit]).addTo(mymap);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoia2VzaGF2YXJvcmEyMDAwIiwiYSI6ImNrcGU3OWRzMDF0aGwyeW9nZmw0aHVnY2wifQ.DEnVlMPl0fnK5AY58rtBNA'
    }).addTo(mymap);
}
