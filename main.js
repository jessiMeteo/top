/*  L. steht für Leaflet, View([long, lat], zoomfaktor) */
var map = L.map('map').setView([52.088889, 5.115556], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([52.088889, 5.115556]).addTo(map);
        marker.bindPopup("<b>Hello Utrecht!</b><br>I am a popup.").openPopup();