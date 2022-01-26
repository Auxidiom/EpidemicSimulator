// --------------------------------------------------------------------------------- #
// SEIR MODEL COVID
//
// Henriest Benjamin, Eldada Lyne, Giliberto Nicolas, 08 October 2021
// Latest Revision: 09 December 2021
//
//
//
// If there is any problem in our code you can contact
// us at :
//
// benjamin.henriest@etu.unice.fr
//
//
// --------------------------------------------------------------------------------- #

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

// Fonctions utilisant l'API de Leaflet
function destroyMap() {
    myMap.remove(0);
}
function refreshMap() {
    if(getCases() > 400000) {
        // Script utilisé dans la documentation de LeafLet pour utiliser leur API
        // https://leafletjs.com/
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.8}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.8}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
         // Fin du script
    }
    else if (getCases() > 800000) {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.6}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.6}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
    else if (getCases() > 1000000) {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.4}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.4}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
    else if (getCases() > 1200000) {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.2}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.2}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
    else if (getCases() > 1400000) {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.1}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.1}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
    else if (getCases() > 1600000) {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.05}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.05}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
    else if (getCases() > 1800000) {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 0.03}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 0.03}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
    else {
        myMap = L.map("mapid").setView([47, 3], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red",fillColor: "red",fillOpacity: 0.5,radius: d.Confirmed * 1}).addTo(myMap)});
        data.filter(d => d.Confirmed > 50).forEach(d => {const marker = L.circle([d.Lat, d.Long_], {color: "red", fillColor: "red", fillOpacity: 0.5,radius: d.Confirmed * 1}).addTo(myMap);
        marker.bindPopup(`<h2>${d.Province_State || d.Country_Region}</h2><p class="popup"><br>Cas actifs:${parseInt(d.Confirmed)}<br>Guéries:${parseInt(d.Recovered)}</p>`
        );
        });
    }
        
}
// Fin des fonctions utilisant l'API de Leaflet


// Initialisation des variables

// Jours
jour = 0;

// Taux d'incubation
alpha = 0.75;

// Taux de guérison
gamma = 0.05;

// Taux de transmission
beta = 3;

// Taux de mortalité
mu = 0.02;

//Taux de natalité
nu = 0.009;

deltaT = 0.1;

In = 0.000001;
en = 0;
sn = 0.999999;
rn = 0;

n = rn + en + In + sn

n = 1;
temps = 60;
t = 0;
confinement = false;
masques = false;
ecoles = false;
commerces = false;
frontieres = false;
preventions = false;

for(var i = 0; i < data.length; i++) {
    data[i].Deaths = 0;  
    data[i].Recovered = 0;
}
// Fin initialisation des variables

refreshMap();
refreshDonnes();



// Texte qui s'affiche à droite
jourHTML = document.getElementById('jour').innerHTML = "Jour " + (jour);
casHTML = document.getElementById('totalCases').innerHTML = "Cas : " + parseInt(getCases());
deadHTML = document.getElementById('totalDead').innerHTML = "Personnes décédés par jour : 0";
// Fin du texte qui s'affiche à droite

// Evenements disponibles changeant le taux de contamination 
document.querySelector("#confinement").addEventListener("change", () => {
    if(confinement == false) {
        confinement = true;
        beta = beta / 22;
    }
    else {
        confinement = false;
        beta = beta * 22;
    }
    
 });
 document.querySelector("#masques").addEventListener("change", () => {
    if(masques == false) {
        masques = true;
        beta = beta / 6;
    }
    else {
        masques = false;
        beta = beta * 6;
    }
    
 });
 document.querySelector("#ecoles").addEventListener("change", () => {
    if(ecoles == false) {
        ecoles = true;
        beta = beta / 3;
    }
    else {
        ecoles = false;
        beta = beta * 3;
    }
    
 });
 document.querySelector("#commerces").addEventListener("change", () => {
    if(commerces == false) {
        commerces = true;
        beta = beta / 3;
    }
    else {
        commerces = false;
        beta = beta * 3 ;
    }  
 });
 document.querySelector("#frontieres").addEventListener("change", () => {
    if(frontieres == false) {
        frontieres = true;
        beta = beta / 3;
    }
    else {
        frontieres = false;
        beta = beta * 3;
    }  
 });
 document.querySelector("#preventions").addEventListener("change", () => {
    if(preventions == false) {
        preventions = true;
        beta = beta / 3;
    }
    else {
        preventions = false;
        beta = beta * 3;
    }  
 });
// Fin evenements disponibles changeant le taux de contamination 


// Getters pour travailler sur les données
function getCases() {
    totalCases = 0;
    for(var i = 0; i < data.length; i++) {
       totalCases += data[i].Confirmed;
    }
    return totalCases;
}

function getDead(In) {
    totalDead = 0;
    for(var i = 0; i < data.length; i++) {
        totalDead += data[i].Deaths;
    }
    return totalDead;
}


function getPopulation() {
    population = 0;
    for(var i = 0; i < data.length; i++) {
        population += data[i].Population;
     }
     return population;
}

/* function getCasesByDay() { 
    repos = getPopulation() * rn;
    cases24Hours = cases24Hours - totalCases()
    return getPopulation() * rn;
} */
// Fin des getters pour travailler sur les données



function plusSept() {
    for(var i = 0; i < 7; i++) {
        refreshDonnes();
    }
}

// Fonction permettant d'avancer d'un jour la simulation
function refreshDonnes() { 

        sn = ((-beta * sn * In) * deltaT + sn); // Nouveau s

        In = (alpha * en - gamma * In - mu * In) * deltaT + In // Nouveau i

        en = (beta * sn * In - alpha * en - mu * en) * deltaT + en; // Nouveau e

        rn = ((gamma * In - mu * rn) * deltaT + rn); // Nouveau r 
        
        n = rn + en + In + sn;
       
        t += deltaT;

    // Actualisation du fichier JSON
    for(var i = 0; i < data.length; i++) {
        data[i].Confirmed = data[i].Population * In;
        data[i].Deaths = data[i].Confirmed * mu;
        data[i].Recovered = data[i].Population * rn;
    }
    console.log(rn);
     jour += 1;
    
     // Changement graphique de la carte et des textes
     destroyMap();
     refreshMap();
     getCases();
     jourHTML = document.getElementById('jour').innerHTML = "Jour " + jour;
     casHTML = document.getElementById('totalCases').innerHTML = "Cas : " + parseInt(getCases());
     deadHTML = document.getElementById('totalDead').innerHTML = "Personnes décédés par jour : " + parseInt(getDead(sn) / 14);
     
}