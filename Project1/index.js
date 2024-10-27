
// for submenu
function toggleMenu() {
  document.querySelector('.mobile-menu').classList.toggle('show');
}

// for search
$(document).ready(function() {
  $('.search-temp').on('click', function(event) {
      event.preventDefault();
      $('.search-templete').toggle();
  });

  // Optionally, close the template if clicked outside
  $(document).click(function(event) {
      if (!$(event.target).closest('.search-temp, .search-templete').length) {
          $('.search-templete').hide();
      }
  });
});


// For menu list
$(document).ready(function() {
  // Close the sidebar
  $('.close-btn').on('click', function() {
      $('#sidebar').hide();
  });

  // Toggle submenu on menu item click
  $('.menu-item > span.arrow').on('click', function(e) {
      e.stopPropagation(); 

      $('.submenu.show').not($(this).parent().find('.submenu')).removeClass('show'); 

      // Toggle the clicked submenu
      $(this).parent().find('.submenu').toggleClass('show'); 
  });
});

// For eye open/close toggle
$(document).ready(function() {
  $('.toggle-password').on('click', function() {
      let passwordField = $('#password');
      let isPassword = passwordField.attr('type') === 'password';
      // Toggle the password visibility
      passwordField.attr('type', isPassword ? 'text' : 'password');
      $(this).find('.eyeopen').toggle(!isPassword);
      $(this).find('.eyeclose').toggle(isPassword);
  });
});



