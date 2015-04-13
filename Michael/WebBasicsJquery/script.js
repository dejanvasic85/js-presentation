// Code goes here
$(function() {
  $('#showHideLink').click(function() {
    $('#showHideContentParagraph').toggle();

    //animation
    //$('#showHideContentParagraph').toggle('slow');
  })

  $('#makeAllRedLink').on('click', function() {
    $('#redList li').each(function(i) {
      $(this).css('color', 'red');
    });
  });

  $('#addRowLink').on('click', function() {
    $('#myTable').append('<tr><td>New data</td><td>New data</td></tr>');
    
    /*
    $("#myTable")
      .append($('<tr>')
          .append($('<td>').text('New data'))
          .append($('<td>').text('New data'))
      )
    */
    
  });
  
  $('#refreshDataLink').on('click', function() {
    $.get( "data.html", function( data ) {
      $( "#dataContainer" ).html( data );
    });
  });
  
})