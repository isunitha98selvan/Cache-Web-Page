function initMap() {
	var LatLng = data[0]['coords'];
	var college_map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: LatLng
	});
	for (var i = 0; i < data.length; i++) {
		var marker = new google.maps.Marker({
			position: data[i]['coords'],
			map: college_map,
			title: data[i]['name']
		});
		var infoWindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
				infoWindow.setContent(data[i]['cont']);
				infoWindow.open(map, marker);
				}
			})(marker, i)
		);
	}
}
$(document).ready( function() {
	$('.chips-placeholder').material_chip({
		placeholder: 'Enter a tag',
		secondaryPlaceholder: '+Tag',
	});
});