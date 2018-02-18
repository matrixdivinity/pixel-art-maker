// make sure the DOM is loaded before querying the DOM elements
$(function() {

  // FUNCTIONS

  function makeGrid() {
    // clear the previous grid
    $('#pixel_canvas').children().remove();

    // get input values for width and height
    let rows = $('#input_height').val();
    let cols = $('#input_width').val();

    // nested loop to build grid and append it to table
    for (let r = 0; r < rows; r++) {
      $('#pixel_canvas').append(`<tr id='row${r}'></tr>`);
      for (let c = 0; c < cols; c++) {
        $(`#row${r}`).append('<td></td>');
      }
    }
  }
  
  function fillSquare(e) {
    if(e.which === 1){
    $(this).css('background-color', $('#colorPicker').val())
  }
  }
  // EVENT LISTENERS
  
  // clicking the submit button builds the grid
  $('input[type="submit"]').click(function(e) {
    //prevent page refresh
    e.preventDefault();
    makeGrid();
  });

  // clicking a grid square changes the background color
  $('#pixel_canvas').on('mousemove mouseenter mouseleave mouseover', 'td', fillSquare);

});
