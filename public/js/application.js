$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(25.002394,54.992554),
    mapTypeId: google.maps.MapTypeId.SATELLITE
	  };

	var mapProp2 = {
     center: new google.maps.LatLng(25.002394,54.992554),
     zoom:10,
      mapTypeId: google.maps.MapTypeId.TERRAIN
      };

    var mapProp3 = {
      center: new google.maps.LatLng(25.002394,54.992554),
      zoom:10,
      mapTypeId: google.maps.MapTypeId.HYBRID
      };

    var mapProp4 = {
       center: new google.maps.LatLng(25.002394,54.992554),
       zoom:10,
       mapTypeId: google.maps.MapTypeId.ROADMAP
       }

	  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	  var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);
      var map3 = new google.maps.Map(document.getElementById("googleMap3"),mapProp3);
      var map4 = new google.maps.Map(document.getElementById("googleMap4"),mapProp4);
	}


	// function loadScript() {
	//   var script = document.createElement("script");
	//   script.type = "text/javascript";
	//   script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAMrR-O4hPeuBFgRhDJWEy4k3ejjIhavJQ&sensor=true&callback=initialize";
	//   document.body.appendChild(script);
	// }

	// window.onload = loadScript;
	      google.maps.event.addDomListener(window, 'load', initialize);

});

