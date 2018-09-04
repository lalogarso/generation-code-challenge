export const addInfoWindow = function (map, maps, marker, store) {
  var contentString = '<div style="width: 300px">' +
  '<h6 id="firstHeading" class="firstHeading">' + store.Name + '</h6>' +
  '<p>' + store.Address + '</p>'+
  '<p>Press the marker to add My Favorite Stores</p></div>';

  var infowindow = new maps.InfoWindow({
    content: contentString
  });

  marker.addListener('mouseover', function() {
    infowindow.open(map, marker);;
  });

  marker.addListener('mouseout', function() {
    infowindow.close();
  });
}

export const newMarker = function (map, maps, name) {
  return new maps.Marker({
    position: randomLocation(), map, title: name
  })
}

function randomLocation () {
  return {
      lat: (Math.random() * 0.3898254446347096) + 19.232066735684665,
      lng: (-1 * (Math.random() * 0.3666687011718892)) -98.93051147460938
  }
}
