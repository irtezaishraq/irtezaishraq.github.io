$(document).scroll(function() {
  var y = $(document).scrollTop(), //get page y value 
      header = $("nav");
      pageHeight = $(window).height();
  if (y >= pageHeight)  {
      header.css({position: "fixed"});
  } else {
      header.css("position", "relative");
  }
});