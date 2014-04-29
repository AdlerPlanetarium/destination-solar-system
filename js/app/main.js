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