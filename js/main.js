var map = L.map('map').setView([-11.89802, -75.31815], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-11.89802, -75.31815]).addTo(map);
var circle = L.circle([-11.89802, -75.31815], {
    color: '#ad4658',
    fillColor: '#e2b168',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
marker.bindPopup("<div class='cont-poup'><h4>Nuestro Matrimonio</h4> <img src='./img/matrimonio.png' alt='Matrimonio' width='100px'></div>").openPopup();
circle.bindPopup("Por favor.");


L.Routing.control({
  waypoints: [
    L.latLng(-12.069619, -75.212724),
    L.latLng(-11.89802, -75.31815)
   
  ],
   language: 'es', 
    showAlternatives: true,
    routeWhileDragging: true,
    
}).addTo(map);
//-12.069619, -75.212724