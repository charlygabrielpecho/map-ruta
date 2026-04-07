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
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var miUbicacion = L.latLng(lat, lon);
  L.marker(miUbicacion).bindPopup("<div class='cont-poup'><h4>Nuestro Matrimonio</h4> <img src='./img/matrimonio.png' alt='Matrimonio' width='100px'></div>").openPopup();
  
  L.Routing.control({
  waypoints: [
    
    L.latLng(-11.89802, -75.31815),
     miUbicacion,
   
  ],
   language: 'es', 
    routeWhileDragging: true,
    }).addTo(map);
      }, function(error) {
        console.error("Error al obtener ubicación: " + error.message);
    });
} else {
    alert("La geolocalización no es soportada por este navegador");
}


    

//-12.069619, -75.212724
