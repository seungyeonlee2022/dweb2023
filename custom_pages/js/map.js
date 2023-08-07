// 현재 위치 가져오기
navigator.geolocation.getCurrentPosition(geoSuccess, getError);

function geoSuccess(position) {
  // 위도
  const lat = position.coords.latitude;
  // 경도
  const lng = position.coords.longitude;
  
  setMap(lat, lng);
}

function setMap(lat, lng) {
  // 위도, 경도 설정
  const latlng = new google.maps.LatLng(lat, lng);
  
  // 표시 추가
  const marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: latlng
  });
}