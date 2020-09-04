// src: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

// Check if the browser is safari, where smooth scrolling isn't supported
$(document).ready(function(){
  var isSafari = window.safari !== undefined;
  if (isSafari) {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body, section').animate({
        scrollTop: $(hash).offset().top
      }, 850, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
} else {
  var scrollStyle = document.createElement('style');
  scrollStyle.innerHTML = "html {scroll-behavior : smooth}";
  document.head.appendChild(scrollStyle)
}
});

