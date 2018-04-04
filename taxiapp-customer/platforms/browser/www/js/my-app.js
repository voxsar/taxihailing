var $$ = Dom7;
var remote = "http://127.0.0.1/fw7electron/membershipCardApp/";
var db;
var app = new Framework7({
  // App root element
  root: '#dgo',
  // App Name
  name: 'DGO',
  // App id
  id: 'org.wavehunt.dgo',
  // Enable swipe panel
  panel: {
	swipe: 'left',
  },
  // Add default routes
  routes: [
		{
			name: 'Home',
			path: '/',
			url: 'main.html',
		}
  	],
  // ... other parameters
});

var mainView = app.views.create('.view-main', {url: '/'});

// Option 1. Using one 'page:init' handler for all pages
var map;
$$(document).on('page:init', function (e) {
	// Do something here when page loaded and initialized
  	var swiper = app.swiper.create('.swiper-container', {
		speed: 400,
		spaceBetween: 100
	});
	initMap();
});

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
		style: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#d6e2e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#cddbe0"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#7492a8"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"lightness":25}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#d6e2e6"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#cddbe0"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#dae6eb"}]},{"featureType":"landscape.natural","elementType":"labels.text.fill","stylers":[{"color":"#7492a8"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#d6e2e6"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#588ca4"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"saturation":-100}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#cae7a8"}]},{"featureType":"poi.park","elementType":"geometry.stroke","stylers":[{"color":"#bae6a1"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#c6e8b3"}]},{"featureType":"poi.sports_complex","elementType":"geometry.stroke","stylers":[{"color":"#bae6a1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#41626b"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"saturation":-45},{"lightness":10},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#f7fdff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#beced4"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#eef3f5"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#cddbe0"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#edf3f5"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#cddbe0"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"saturation":-70}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#588ca4"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#008cb5"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"saturation":-100},{"lightness":-5}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#a6cbe3"}]}],
		disableDefaultUI: true,
	});
}