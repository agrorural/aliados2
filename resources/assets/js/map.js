var map;
var initLatLng;

$(function() {

  initLatLng = new google.maps.LatLng(-12.078736, -77.042328);
  createMap(initLatLng);
  allMarkers();

  function createMap(initLatLng){
    map = new google.maps.Map(document.getElementById('map'), {
      center: initLatLng,
      zoom: 6
    });
  }

  function createMarker(latlng, name){
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: name
    });
  }

  function allMarkers(){
    axios({
      method: 'get',
      url: '/obra'
    })

  .then(response => {

  $.each(response.data, function(key, value) {
    // debugger;
    var dataLat = parseFloat(value.obr_lng);
    var dataLng = parseFloat(value.obr_lat);
    var dataLatLng = {lat: dataLat, lng: dataLng}
    var dataDen = value.obr_den;
    var dataDep = value.obr_dep;
    var dataPro = value.obr_pro;
    var dataDis = value.obr_dis;
    var dataCP = value.obr_cp;
    var dataCont = value.obr_cont;
    var dataOrg = value.obr_org;
    var dataDoc = value.obr_doc;
    var dataDocNum = value.obr_doc_num;
    var dataAlt = value.obr_alt;
    var dataDur = value.obr_dur;
    var dataEst = value.obr_est;
    var dataFecIni = value.obr_fec_ini;
    var dataFecFin = value.obr_fec_fin;

    if (dataEst && dataEst == 'CONCLUIDO') {
      var dataEstClass = 'concluido';
    }else{
      var dataEstClass = '';
    }

    // console.log(dataFecFin);

    var contentString = '<br><div class="panel panel-default"> <div class="panel-heading"><strong>' + dataDen + '</strong></div> <div class="panel-body"> <p>Iniciativa en ' + dataDep + ', ' + dataPro + ', ' + dataDis + ', centro poblado de ' + dataCP + ' (a ' + dataAlt + ' m.s.n.m).</p> </div> <table class="table"> <thead> <tr> <th>Nº Cont.</th> <th>Organización</th> <th style="width: 150px">Duración</th> <th>Estado</th> </tr> </thead> <tbody> <tr> <th scope="row">' + dataCont + '</th> <td>' + dataOrg + '<br><small>' + dataDoc + ': ' + dataDocNum + '</small></td> <td>' + dataDur + ' meses<br><small>(' + dataFecIni + ' - ' + dataFecFin + ')</small></td> <td class="' + dataEstClass + '">' + dataEst + '</td> </tr></tbody> </table> </div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
          position: dataLatLng,
          map: map,
          title: dataDen
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  });
  });
  }

});
