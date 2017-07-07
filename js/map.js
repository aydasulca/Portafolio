function initMap(){
  var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById('map'),{
          zoom: 18,
          center: laboratoriaLima
        }
      );
  var markadorLaboratoria = new google.maps.Marker({
          animation: google.maps.Animation.BOUNCE,
          position: laboratoriaLima,
          map:map
        }
      );
    }
