scroll_to = function(event) {
  var target;
  event.preventDefault();
  target = $(event.target).attr('href');
  return $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 600);
}; 

currentSection = function() {
  var section;
  section = null;
  /*$('body > .site-section').each(function() {*/
  $('section').each(function() { 
    if ($(this).position().top + $(this).height() > $('body').scrollTop()) {
      section = $(this)[0].id;
      return false;
    }
    return true;
  });
  return section;
}; 

updateNavigation = function() {
  var headerElement, navElement, num, section;
  navElement = $('body > .site-navigation');
  headerElement = $('body > .site-header');
  if ($('body').scrollTop() < headerElement.innerHeight()) {
    navElement.removeClass('fixed');
    return $('body').css('margin-top', '0');
  } else {
    navElement.addClass('fixed');
    $('body').css('margin-top', '50px');
    section = currentSection();
    num = navElement.find("a[href=#" + section + "]").index();
    if (num >= 0) {
      navElement.find('a').removeClass('active');
      navElement.find("a[href=#" + section + "]").addClass('active');
      navElement.removeClass('pos1 pos2 pos3 pos4 pos5');
      return navElement.addClass("pos" + (num + 1));
    }
  }
};


$(function() {
  $(window).scroll(updateNavigation);
  $('.scroll').click(scrollTo);
  updateNavigation();
  return document.querySelector('.overlay').addEventListener('click', function(e) {
    return this.style.display = 'none';
  });
});

