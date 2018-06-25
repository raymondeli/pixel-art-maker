$(document).ready(() => {

// Select color input
// Select size input
$('#inputHeight').attr('max', '100');
$('#inputWeight').attr('max', '100');

// Add and style text of instruction on max pixel allowed
$('h2').eq(0).after('<p></p>');
    $('p').addClass('instruction');
        $('.instruction').html('(Please do not exceed 100 pixels for height or width selection!)');
        $('.instruction').css('font-size', '14px').css('font-weight', '600').css('font-style', 'italic').css('color', 'red');
// Add and style class of pick-color for second h2 tag
$('h2').eq(1).addClass('pick-color').css('color', 'blue');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    
    const rows = $('#inputHeight').val();
    const columns = $('#inputWeight').val();
    makeGrid(rows, columns);
});

// Make the grid for the pixel maker
function makeGrid(n, m) {
    //clear old grid when size picker submit button is clicked
    $('tr').remove();
   
    // form rows on pixelCanvas
    for (let i = 1; i <= n; i++) {
        $('#pixelCanvas').append('<tr></tr>'); 
        // form columns on pixelCanvas and give it a class of 'cell'
        for (let j = 1; j <= m; j++) {
            $('tr:last').append('<td></td>');
            $('td').addClass('cell');
            }
        }
  
    // add color to cells
    $('.cell').click(function addColor() {
        const color = $('#colorPicker').val();
        //remove color if one already exists
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color: ' + color);
        }
    });
}
    
});
