function Scroller (windoWidth) {
  this.windowWidth = windoWidth;
}

Scroller.prototype.scrollTo = function(event) {
  var target;
  event.preventDefault();
  console.log (event.target);
  target = $(event.target).attr('href');
  return $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 600);
}; 

Scroller.prototype.currentSection = function() {
  console.log("currentSection");
  var section;
  section = null;
  /*$('body > .site-section').each(function() {*/
  $('section').each(function() { 
    //console.log($.id);
    if ($(this).position().top + $(this).height() > $('body').scrollTop()) {
      section = $(this)[0].id;
      return false;
    }
    return true;
  });
  return section;
}; 

Scroller.prototype.updateNavigation = function() {
  console.log("updateNavigation");
  var headerElement, navElement, num, section;
  navElement = $('#site-navigation');
  headerElement = $('#site-header');
  
  scrollTop = $(window).scrollTop();
  if (scrollTop < headerElement.innerHeight()) {
    console.log("in the header" + " " +  scrollTop );
    navElement.removeClass('fixed');
    return $('body').css('margin-top', '0');
  } else {
    navElement.addClass("fixed");
    //fix position of the navigation at the top variable screen size
    //and respond to variable screen size
    /*leftOffset = navElement.parent().offset().left;
    navElement.css({
      position: 'fixed',
      top: 0,
      left: leftOffset
    });*/

    $('body').css('margin-top', '3.125rem');
    section = this.currentSection();
    console.log("section is" + section);
    
    num = navElement.find("a[href=#" + section + "]").index();
    console.log ("a[href=#" + section + "]");
    console.log(num);
    
    if (num >= 0) {
      console.log("removed an active");
      navElement.find('a').removeClass('active');
      navElement.find("a[href=" + section + "]").addClass('active');
      navElement.removeClass('pos1 pos2 pos3 pos4 pos5');
      return navElement.addClass("pos" + (num + 1));
    }
  }
};

startScroller = function(){

  windowWidth = $(window).width();
  scroller = new Scroller(windowWidth);
  
  $(function() {
    console.log("startScroller");
    //register scroll event
    $(window).scroll(scroller.updateNavigation);
    //register all clicks on nav links of scroll class
    $('.scroll').click(scroller.scrollTo);
    scroller.updateNavigation();
  });
}


