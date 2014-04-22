// getOpenHours(function(result){ console.log(result) });
getOpenHours = function(cb) {
  var _this = this;
  return $.getJSON("" + window.location.protocol + 
                      "//adlersiteserver.herokuapp.com/open_hours?callback=?",
                      return cb(data);
                     // function(data) {
                     //  data.closed = _this.isClosed();
                     //  return cb(data);
  });
};
/*
testGetOpenHours = function() {
  getOpenHours(function(result){console.log(result)):
}

updatePageTimes = function() {
  var _this = this;
  return this.getOpenHours(function(result) {
    var cafeHours, hours, shopHours, weekdayHours, weekendHours;
    $("#sidebar .notice").html(result.message || "");
    weekdayHours = "" + (_this.to_human_12_hour(result.weekday.open)) + " - " + (_this.to_human_12_hour(result.weekday.close));
    weekendHours = "" + (_this.to_human_12_hour(result.weekend.open)) + " - " + (_this.to_human_12_hour(result.weekend.close));
    shopHours = (_this.dayType() === "weekday" ? weekdayHours : weekendHours);
    cafeHours = (_this.dayType() === "weekday" ? "10 am - 3 pm" : "10 am - 3:30 pm");
    hours = (_this.dayType() === "weekday" ? weekdayHours : weekendHours);
    if (result.closed) {
      shopHours = 'closed';
      cafeHours = 'closed';
      hours = 'closed';
    }
   
    $(".hours .weekday span").html(weekdayHours);
    $(".hours .weekend span").html(weekendHours);
    $("#top-bar li.museum span").html(hours);
    $("#top-bar li.cafe span").html(cafeHours);
    return $("#top-bar li.shop span").html(shopHours);
  });
};
*/