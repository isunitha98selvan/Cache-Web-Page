var college_map;
var all_markers = [];

function initMap() {
	var LatLng = data[0]['coords'];
	college_map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: LatLng
	});
	for (var i = 0; i < data.length; i++) {
		 var marker = new google.maps.Marker({
			position: data[i]['coords'],
			map: college_map,
			title: data[i]['name']
		});
		all_markers.push(marker);
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
	$('input.autocomplete').autocomplete({
		data: data.reduce(function(accumulator, currentDatum){
			accumulator[currentDatum.name] = null;
			return accumulator;
		},{}),
		limit:5,
		onAutocomplete:function(val){
			selectedMarker = all_markers.filter(function(marker){
				if(marker.title===val)
					return true;
			})[0];
			new google.maps.event.trigger(selectedMarker, 'click');
		},
	})
});


