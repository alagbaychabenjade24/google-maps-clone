mapboxgl.accessToken =
	'pk.eyJ1IjoiYWxhZ2JheWNoYWJlbmphZGUyNCIsImEiOiJja2hkZm9xNngwaWI1MnpzMncwcGR5ems3In0.04QICUpx9yrBsoMY-bqhfg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
	enableHighAccuracy: true
});

function successLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
	setupMap([-2.24, 53.48]);
}

function setupMap(center) {
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: center,
		zoom: 14
	});

	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	var directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken
	});

	map.addControl(directions, 'top-left');
}
