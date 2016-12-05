function initMap() {
	var myLatLngAH = {lat: -24.6514719, lng: 25.9295798}; /* Avani Hotel */
	var myLatLngPL = {lat: -24.6514719, lng: 25.9295798}; /* Planet Lodge */
	var myLatLngTL = {lat: -24.6514719, lng: 25.9295798}; /* Trave Lodge */
	var myLatLngGH = {lat: -24.6514719, lng: 25.9295798}; /* Gaborone Hotel */
	var myLatLngCL = {lat: -24.6514719, lng: 25.9295798}; /* Cresta Lodge */
	var myLatLngCP = {lat: -24.6514719, lng: 25.9295798}; /* Cresta President */
	var myLatLngPMT = {lat: -24.6514719, lng: 25.9295798}; /* Peermont Metcourt */
	var myLatLngMH = {lat: -24.6514719, lng: 25.9295798}; /* Masa Hotel*/
	var myLatLngOM = {lat: -24.6514719, lng: 25.9295798}; /* Oasis Motel */
	var myLatLngPMN = {lat: -24.6514719, lng: 25.9295798}; /* Peermont Mondior */
	var myLatLngTWL = {lat: -24.6514719, lng: 25.9295798}; /* Town Lodge */
	var myLatLngIL = {lat: -24.6514719, lng: 25.9295798}; /* Indaba Lodge */
	var myLatLngTH = {lat: -24.6514719, lng: 25.9295798}; /*Tlotle Hotel */

	var map_ah = new google.maps.Map(document.getElementById('map'), {
	  zoom: 18,
	  center: myLatLngAH
	});
	var map_pl = new google.maps.Map(document.getElementById('map-pl'), {
	  zoom: 18,
	  center: myLatLngPL
	});
	var map_tl = new google.maps.Map(document.getElementById('map-tl'), {
	  zoom: 18,
	  center: myLatLngTL
	});
	var map_gh = new google.maps.Map(document.getElementById('map-gh'), {
	  zoom: 18,
	  center: myLatLngGH
	});
	var map_cl = new google.maps.Map(document.getElementById('map-cl'), {
	  zoom: 18,
	  center: myLatLngCL
	});
	var map_cp = new google.maps.Map(document.getElementById('map-cp'), {
	  zoom: 18,
	  center: myLatLngCP
	});
	var map_pmt = new google.maps.Map(document.getElementById('map-pmt'), {
	  zoom: 18,
	  center: myLatLngPMT
	});
	var map_mh = new google.maps.Map(document.getElementById('map-mh'), {
	  zoom: 18,
	  center: myLatLngMH
	});
	var map_om = new google.maps.Map(document.getElementById('map-om'), {
	  zoom: 18,
	  center: myLatLngOM
	});
	var map_pmn = new google.maps.Map(document.getElementById('map-pmn'), {
	  zoom: 18,
	  center: myLatLngPMN
	});
	var map_twl = new google.maps.Map(document.getElementById('map-twl'), {
	  zoom: 18,
	  center: myLatLngTWL
	});
	var map_il = new google.maps.Map(document.getElementById('map-il'), {
	  zoom: 18,
	  center: myLatLngIL
	});
	var map_th = new google.maps.Map(document.getElementById('map-th'), {
	  zoom: 18,
	  center: myLatLngTH
	});

	var markerAH = new google.maps.Marker({
	  position: myLatLngAH,
	  map: map_ah,
	  title: 'Avani Hotel'
	});
	var markerPL = new google.maps.Marker({
	  position: myLatLngPL,
	  map: map_pl,
	  title: 'Planet Lodge'
	});
	var markerTL = new google.maps.Marker({
	  position: myLatLngTL,
	  map: map_tl,
	  title: 'Travel Lodge'
	});
	var markerGL = new google.maps.Marker({
	  position: myLatLngGH,
	  map: map_gh,
	  title: 'Gaborone Hotel'
	});
	var markerCL = new google.maps.Marker({
	  position: myLatLngCL,
	  map: map_cl,
	  title: 'Cresta Lodge'
	});
	var markerCP = new google.maps.Marker({
	  position: myLatLngCP,
	  map: map_cp,
	  title: 'Cresta President'
	});
	var markerPMT = new google.maps.Marker({
	  position: myLatLngPMT,
	  map: map_pmt,
	  title: 'Peermont Metcourt'
	});
	var markerMH = new google.maps.Marker({
	  position: myLatLngMH,
	  map: map_mh,
	  title: 'Masa Hotel'
	});
	var markerOM = new google.maps.Marker({
	  position: myLatLngOM,
	  map: map_om,
	  title: 'Oasis Motel'
	});
	var markerPMN = new google.maps.Marker({
	  position: myLatLngPMN,
	  map: map_pmn,
	  title: 'Peermont Mondior'
	});
	var markerTWL = new google.maps.Marker({
	  position: myLatLngTWL,
	  map: map_twl,
	  title: 'Town Lodge'
	});
	var markerIL = new google.maps.Marker({
	  position: myLatLngIL,
	  map: map_il,
	  title: 'Indaba Lodge'
	});
	var markerTH = new google.maps.Marker({
	  position: myLatLngTH,
	  map: map_th,
	  title: 'Tlotlo Hotel'
	});
}

google.maps.event.addDomListener(window, 'load', initMap);

async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWH7IbgghsDBpO3VYE3syZf7eXyUX5qj8&callback=initMap"