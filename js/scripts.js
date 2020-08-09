
function initMap() {
  /*var myLatLng = {lat: 38.7142359, lng: -9.1517085};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });*/
}
$(document).ready(function(){
  // your code goes here
  //smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
       scrollTop: $(href).offset().top
    }, 500, function () {
       window.location.hash = href;
   	});
    return false;
   });
  // Stellar
  $.stellar();
});
