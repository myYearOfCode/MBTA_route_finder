//geolocation code from stack overflow

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
	alert(
		"It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
	);
}

function errorFunction() {
	console.log("ruh roh -> something bad happened");
}

function successFunction(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	console.log("Your latitude is :" + lat + " and longitude is " + long);
}

//next up would be to iterate through the stops and calculate the closest few stops. I guess that would be the square root of ((lat-lat2)^2 + (lon-lon2)^2)

//I wonder how long it will take to iterate over all 8563 stops...
