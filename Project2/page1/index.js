function toggleMenu() {
  const mobileSidebar = document.querySelector('.mobile-sidebar');
  mobileSidebar.classList.toggle('show');
  document.body.classList.toggle('no-scroll');
}


// cart item cout 
$(document).ready(function() {
  const ticketCount = $('.card-list .styles__item--17Ov3').length;
  $('#ticket-count').text(ticketCount);
});
