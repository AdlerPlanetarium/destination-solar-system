function Scroller (windoWidth) {
  this.windowWidth = windoWidth;
}

Scroller.prototype.scrollTo = function(event) {
  var target;
  event.preventDefault();
  target = $(event.target).attr('href');
  return $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 600);
}; 

currentSection = function() {
  section = null;
  $('section').each(function() { 
    if ($(this).position().top + $(this).height() > $(window).scrollTop()) {
      section = $(this)[0].id;
      return false;
    }
    return true;
  });
  return section;
}; 

Scroller.prototype.updateNavigation = function() {
  var headerElement, navElement, num, section;
  navElement = $('#site-navigation');
  headerElement = $('.header-container');
  
  scrollTop = $(window).scrollTop();
  if (scrollTop < headerElement.innerHeight()) {
    navElement.removeClass('fixed');
    $('body').removeClass('menu-padded');
  } else {
    navElement.addClass("fixed");
    $('body').addClass('menu-padded');
    
    section = currentSection();
    console.log("section is" + section);
    
    num = navElement.find("a[href=#" + section + "]").index();
    console.log ("a[href=#" + section + "]");
    console.log(num);
    
    if (num >= 0) {
      
      // remove any other active
      navElement.find('a').removeClass('active');
      sectionAnchor  = navElement.find("a[href=#" + section + "]");
      // make this active
      sectionAnchor.addClass('active');
      // reassign the position -- used for CSS arrow affect
      navElement.removeClass('pos1 pos2 pos3 pos4 pos5');
      return navElement.addClass("pos" + (num + 1));
    }
  }
};

startScroller = function() {
  windowWidth = $(window).width();
  scroller = new Scroller(windowWidth);
  
  $(function() {
    //register scroll event
    $(window).scroll(scroller.updateNavigation);
    //register all clicks on nav links of scroll class
    $('.scroll').click(scroller.scrollTo);
    scroller.updateNavigation();
  });
}


