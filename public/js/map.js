/*! Google Maps scripts */
function initialize() {
	var myLatLngPL = new google.maps.LatLng(-24.622317,25.909032); /* Planet Lodge  */
	var myLatLngPL1 = new google.maps.LatLng(-24.658059,25.912315); /* Planet Lodge 1 */
	var myLatLngTL = new google.maps.LatLng(-24.630740,25.901989); /* Travel Lodge */
	var myLatLngGH = new google.maps.LatLng(-24.659693,25.903991); /* Gaborone Hotel */
	var myLatLngCL = new google.maps.LatLng(-24.682314,25.908284); /* Cresta Lodge */
	var myLatLngCP = new google.maps.LatLng(-24.658547,25.915980); /* Cresta President */
	var myLatLngPMT = new google.maps.LatLng(-24.639890,25.879899); /* Peermont Metcourt Inn */
	var myLatLngPMN = new google.maps.LatLng(-24.669968,25.927627); /* Peermont Mondior */
	var myLatLngMH = new google.maps.LatLng(-24.652545,25.904010); /* Masa Hotel*/
	var myLatLngOM = new google.maps.LatLng(-24.683400,25.955270); /* Oasis Motel */
	var myLatLngTWL = new google.maps.LatLng(-24.606336,25.929119); /* Town Lodge */
	var myLatLngIL = new google.maps.LatLng(-24.675754,25.931463); /* Indaba Lodge */
	var myLatLngTH = new google.maps.LatLng(-24.644734,25.862346); /* Tlotlo Hotel */
  
	var mapOptionsPL = {
		zoom: 18,
		center: myLatLngPL,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsPL1 = {
		zoom: 18,
		center: myLatLngPL1,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsTL = {
		zoom: 18,
		center: myLatLngTL,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsGH = {
		zoom: 18,
		center: myLatLngGH,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsCL = {
		zoom: 18,
		center: myLatLngCL,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsCP = {
		zoom: 20,
		center: myLatLngCP,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsPMT = {
		zoom: 18,
		center: myLatLngPMT,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsPMN = {
		zoom: 18,
		center: myLatLngPMN,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsMH = {
		zoom: 20,
		center: myLatLngMH,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsOM = {
		zoom: 18,
		center: myLatLngOM,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsTWL = {
		zoom: 18,
		center: myLatLngTWL,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsIL = {
		zoom: 18,
		center: myLatLngIL,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}
	var mapOptionsTH = {
		zoom: 18,
		center: myLatLngTH,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: 0
	}

	var mapPL = new google.maps.Map(document.getElementById('map-PL'), mapOptionsPL);
	var mapPL1 = new google.maps.Map(document.getElementById('map-PL1'), mapOptionsPL1);
	var mapTL = new google.maps.Map(document.getElementById('map-TL'), mapOptionsTL);
	var mapGH = new google.maps.Map(document.getElementById('map-GH'), mapOptionsGH);
	var mapCL = new google.maps.Map(document.getElementById('map-CL'), mapOptionsCL);
	var mapCP = new google.maps.Map(document.getElementById('map-CP'), mapOptionsCP);
	var mapPMT = new google.maps.Map(document.getElementById('map-PMT'), mapOptionsPMT);
	var mapPMN = new google.maps.Map(document.getElementById('map-PMN'), mapOptionsPMN);
	var mapMH = new google.maps.Map(document.getElementById('map-MH'), mapOptionsMH);
	var mapOM = new google.maps.Map(document.getElementById('map-OM'), mapOptionsOM);
	var mapTWL = new google.maps.Map(document.getElementById('map-TWL'), mapOptionsTWL);
	var mapIL = new google.maps.Map(document.getElementById('map-IL'), mapOptionsIL);
	var mapTH = new google.maps.Map(document.getElementById('map-TH'), mapOptionsTH);
  
	var markerPL = new google.maps.Marker({
		position: myLatLngPL,
		map: mapPL,
		title: 'Planet Lodge'
	});     
	var markerPL1 = new google.maps.Marker({
		position: myLatLngPL1,
		map: mapPL1,
		title: 'Planet Lodge 1'
	});       
	var markerTL = new google.maps.Marker({
		position: myLatLngTL,
		map: mapTL,
		title: 'Travel Lodge'
	});
	var markerGH = new google.maps.Marker({
		position: myLatLngGH,
		map: mapGH,
		title: 'Gaborone Hotel'
	});
	var markerCL = new google.maps.Marker({
		position: myLatLngCL,
		map: mapCL,
		title: 'Cresta Lodge'
	});
	var markerCP = new google.maps.Marker({
		position: myLatLngCP,
		map: mapCP,
		title: 'Cresta President'
	});
	var markerPMT = new google.maps.Marker({
		position: myLatLngPMT,
		map: mapPMT,
		title: 'Peermont Metcourt Inn'
	});
	var markerPMN = new google.maps.Marker({
		position: myLatLngPMN,
		map: mapPMN,
		title: 'Peermont Mondior'
	});
	var markerMH = new google.maps.Marker({
		position: myLatLngMH,
		map: mapMH,
		title: 'Masa Hotel'
	});
	var markerOM = new google.maps.Marker({
		position: myLatLngOM,
		map: mapOM,
		title: 'Oasis Motel'
	});
	var markerTWL = new google.maps.Marker({
		position: myLatLngTWL,
		map: mapTWL,
		title: 'Town Lodge'
	});
	var markerIL = new google.maps.Marker({
		position: myLatLngIL,
		map: mapIL,
		title: 'Indaba Lodge'
	});
	var markerTH = new google.maps.Marker({
		position: myLatLngTH,
		map: mapTH,
		title: 'Tlotlo Hotel'
	});
  
}  

google.maps.event.addDomListener(window, 'load', initialize);