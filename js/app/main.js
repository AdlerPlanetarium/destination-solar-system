function populateInstagram() {
  var feed = new Instafeed({
          clientId: '4d92c60c642241a28c4c95c8d140ba41',
          get: 'tagged',
          tagName: 'spacecation',
          limit: 8, 
          template: '<li><a class="instagram-image" href="{{link}}"><img class="instagram-image" src="http:{{image}}"/></a></li>'
        });
  feed.run();
}

function loadMap() {
  var map = L.map('map', {scrollWheelZoom: false}).setView([41.866317,-87.606761], 13);

  L.tileLayer('http://{s}.tile.cloudmade.com/703a104d15d44e2885f6cedeaaec6d30/22677/256/{z}/{x}/{y}.png').addTo(map);

  var icon = L.icon({
                iconSize: new L.Point(25, 41),
                iconAnchor: new L.Point(12, 41),
                popupAnchor: new L.Point(1, -34),

                shadowSize: new L.Point(41, 41),
                iconUrl: 'img/marker-icon.png',
                iconRetinaUrl: 'img/marker-icon@2x.png',
                shadowUrl: 'img/marker-shadow.png'
            });


  window.marker = L.marker([41.866317,-87.606761], {icon: icon}).addTo(map)
}


function addEventListeners(){
  addGoogleEventListener("#dss-purchase-1", "Purchase");
  addGoogleEventListener("#dss-purchase-2", "Purchase");
  addGoogleEventListener("#dss-purchase-3", "Purchase");
}

// adds an Google analytics event listener to the DOM element
// accepts an elementID
// relies on jQuery and Google Analytics objects instantiation
function addGoogleEventListener(elementID, category) {
  $(elementID).on('click', function() {
    eventFields = {
       'eventCategory': category,
       'eventAction': 'click',
       'eventLabel': elementID.replace("#","")
      }
    ga('send', 'event', eventFields);
  });
}