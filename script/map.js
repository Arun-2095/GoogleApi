
 
 function reload(){
 
 location.reload();
 
 }
 



	
function initMap() {

// setting up a map



 var map = new google.maps.Map( document.getElementById('map-canvas'),{
 center:{
    lat:12.9946817,
	lng:80.1824916
 
 }, 	
 zoom:11,
 minZoom:10,
 maxZoom:15,
 scrollwheel:false,
 mapTypeId:google.maps.MapTypeId.ROADMAP,
 

 
 
 
 });
 
 // add marker to map
  
 
 var markers=[
 
 { coord:{lat:12.9231016,lng:80.2284798},
 content:'<div style="width:300px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px;">laptop service center omr</p></div> <div><p style="font-weight:bold; line-height:1.4;" >No: 390a, nehru nagar, first main road, Old Mahabalipuram Road,<br>Kandhancavadi, Chennai, <br>Tamil Nadu, Pincode- 600 096.</p><a href="laptop-service-center-in-omr-chennai.html"> Details</a><button id="button"  lat=12.9231016 lng=80.2284798 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:12.9364297,lng:80.2321662},
 content:'<div style="width:300px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">dell service center omr</p></div><div><p style="font-weight:bold; line-height:1.4;" >No. 5/357, Old Mahabalipuram Road,<br>Thoraipakkam, Chennai, <br>Tamil Nadu, Pincode- 600 097.</p><a href="laptop-service-center-in-thoraipakkam-chennai.html"> Details</a><button id="button"  lat=12.9364297 lng=80.2321662 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:12.9825728,lng:80.2161818},
  content:'<div style="width:320px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">dell service center velachery</p></div><div><p style="font-weight:bold; line-height:1.4;" >Shop No. 87/5, Plot No 24, Amsaveni complex<br>Opposite Murugan Kalyanamandabam<br>Rajalakshmi Nagar, Velachery,<br> Chennai-600042.</p><a href="laptop-service-center-in-velachery-chennai.html"> Details</a><button id="button"  lat=12.9825728 lng=80.2161818 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:13.0000033,lng:80.2538981},
 content:'<div style="width:300px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptop service center adyar</p></div><div><p style="font-weight:bold; line-height:1.4;" >No: 60/2, LB Road,<br>(Landmark : Opp to TNHB Complex ),<br>Adyar,Chennai, Tamil Nadu 600020</p><a href="laptop-service-center-in-adyar-chennai.html"> Details</a><button id="button" lat=13.0000033 lng=80.2538981 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:12.966598,lng:80.1715135},
 content:'<div style="width:340px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptop service center madipakkam</p></div><div><p style="font-weight:bold; line-height:1.4;" >Defence Colony, Medavakkam Main Rd,<br>Senthuran Colony, Subramanian Nagar,<br>Madipakkam, Chennai, Tamil Nadu 600091.</p><a href="laptop-service-center-in-madipakkam-chennai.html"> Details</a> <button id="button" lat=12.966598 lng=80.1715135 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:12.928369,lng:80.1134693},
 content:'<div style="width:340px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptop service center tambaram</p></div><div><p style="font-weight:bold; line-height:1.4;" >35, Rajaji Road, west Tambaram<br>Upstairs More Super Market & Next to Vasanth & Co,<br>Tambaram,Chennai, Tamil Nadu 600045.</p><a href="laptop-service-center-in-tambaram-chennai.html"> Details</a><button id="button"  lat=12.928369  lng=80.1134693 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:12.9481917,lng:80.1187151},
 content:'<div style="width:330px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptop service center Chromepet</p></div><div><p style="font-weight:bold; line-height:1.4;" >144, Opposite to Vettri Theatre, Grand Southern Trunk Road, <br>Lakshmi Nagar, Santhi Nagar,<br>Chromepet, Chennai, Tamil Nadu 600044</p><a href="laptop-service-center-in-chrompet-chennai.html"> Details</a><button id="button" lat=12.9481917 lng=80.1187151 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:13.0404904,lng:80.193423},
 content:'<div style="width:330px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptop service center KK Nagar</p></div><div><p style="font-weight:bold; line-height:1.4;" ># 1070 A, Munuswamy Salai,<br>KK Nagar West,<br>KK Nagar, Chennai, Tamil Nadu 600078</p><a href="laptop-service-center-in-kknagar-chennai.html"> Details</a><button id="button" lat=13.0404904 lng=80.193423 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:13.0817902,lng:80.2143317},
 content:'<div style="width:330px; padding:15px; margin:0px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptopservice center AnnaNagar</p></div><div><p style="font-weight:bold; line-height:1.4;" >AA77, 4th Avenue,<br>Opposite to NAC Jewellery, Shanthi Colony,<br>Anna Nagar, Chennai, Tamil Nadu 600040.</p><a href="laptop-service-center-in-annanagar-chennai.html"> Details</a><button id="button" lat=13.0817902 lng=80.2143317 onclick="direction()">direction</button></div></div>'},
 { coord:{lat:13.037685,lng:80.1598753},
 content:'<div style="width:300px; padding:15px; margin:20px;  box-sizing:border-box; background-color:#FAFAFA;"><div style=" font-size:13px; font-weight:bold; text-transform:uppercase; background-color:black; color:white;padding:3px "><img src="images/logo2.png" style=" margin-left:-9px; margin-bottom:2px;"><p style="float:right; margin:2px; margin-right:3px; ">laptop service center porur</p></div><div><p style="font-weight:bold; line-height:1.4;" >22/A, Arcot Road,<br>Opposite to BSNL Office<br> Near Thalapakatti Hotel,<br>Porur,chennai-600116.</p><a href="laptop-service-center-in-porur-chennai.html"> Details</a><button id="button" lat=13.037685  lng=80.1598753 onclick="direction()"> direction </button></div></div>'}
 ];
 
 // loop the marker
 
 
 for (var i=0; i < markers.length;i++){

addMarker(markers[i]);


} 

// add marker using  function & setting a popup on marker

 function addMarker(props){
 var marker= new google.maps.Marker({
 position:props.coord,
 map:map,
 draggable:false,
 icon:"images/laptopicon.png",

 
 });
 if(props.content){
 
 var infowindow= new google.maps.InfoWindow({
    content:props.content
	});
 
 marker.addListener('click', function(){
 infowindow.open(map,marker);
 
 });
 
 }
 
 }
 
 
 
 
var input=document.getElementById("mapsearch");
 var autocomplete = new google.maps.places.Autocomplete(input);  
 
  autocomplete.bindTo('bounds', map);
 
 autocomplete.setOptions({strictBounds:true });
 
  google.maps.event.addListener(autocomplete,'place_changed', function() {
          
         
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          // If the place has a geometry, then present it on a map.
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            map.setCenter(place.geometry.location);
            map.setZoom(15);  // Why 17? Because it looks good.
          }
          
        });		
		
    
 
 
}
 
 
 function direction(){



var a= document.getElementById('button');
var lat1=a.getAttribute('lat');
var lng1=a.getAttribute('lng');




if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( showPosition, showError);
		
	
    } else { 
        alert( "Geolocation is not supported by this browser.");
    }
	
function showPosition(position) {
var lat2=position.coords.latitude;

 var lng2=position.coords.longitude;
 var current=new google.maps.LatLng(lat2, lng2);
 var local= new google.maps.LatLng(lat1, lng1);
 
 var adjmap = new google.maps.Map( document.getElementById('map-canvas'),{
 center:current,
 zoom:13,
 minZoom:10,
 maxZoom:15,
 scrollwheel:false,
 mapTypeId:google.maps.MapTypeId.ROADMAP,
 

 
 
 
 });
 
 var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
		
		directionsDisplay.setMap(adjmap);

    
	var request={
	origin:local,
	destination:current,
	travelMode: 'DRIVING'
	
	};
	
	 directionsService.route(request, function(result, status) {
     if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
 
 
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}



}






