$(document).ready(function() {
  const selectedTickets = [];

  function updateContinueButton() {
    $('#continue-btn').toggleClass('continue-btn-selected', selectedTickets.length > 0);
    $('#selected-count').text(selectedTickets.length);
  }

  $('.ticket-checkbox').on('change', function() {
    const ticketId = $(this).closest('.ticket-select-card').find('.ticket-id').text();
    $(this).is(':checked') ? selectedTickets.push(ticketId) : selectedTickets.splice(selectedTickets.indexOf(ticketId), 1);
    updateContinueButton();
  });

  $('#select-all').on('click', function() {
    $('.ticket-checkbox').prop('checked', true).trigger('change');
  });

  $('#deselect-all').on('click', function() {
    $('.ticket-checkbox').prop('checked', false).trigger('change');
  });

  $('#continue-btn').on('click', function() {
    if (selectedTickets.length > 0) {
      $('#ticket-section').addClass('fade-out');
      setTimeout(function() {
        $('#ticket-section').hide();
        $('#form-section').fadeIn(500).addClass('fade-in');
      }, 500); // Adjust delay to match transition time
    }
  });
});