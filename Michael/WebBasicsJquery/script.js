//so we know the document is ready
$(function() {

  /*EXAMPLE 1*/
  $('#showHideLink').click(function() {
    $('#showHideContentParagraph').toggle();

    //animation
    //$('#showHideContentParagraph').toggle('slow');
  })

  $('#makeAllRedLink').on('click', function() {
    $('#theList li').each(function(i) {
      $(this).css('color', 'red');
    });
  });

  $('#makeAllBoldLink').on('click', function() {
    $('#theList li').each(function(i) {
      $(this).css('font-weight', 'bold');
    });
  });

  $('#addClassToListItems').on('click', function() {
    $('#theList li').each(function(i) {
      $(this).addClass('text-right');
    });
  });

  /*EXAMPLE 2*/

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

  $('#clickImage').on('click', function() {
    $(this).attr('src', 'DreamweaverJavaScriptIcon.png');
  });

  $('#hoverImage').hover(
    function() {
      $(this).attr('src', 'DreamweaverJavaScriptIcon.png');
    }, function() {
      $(this).attr('src', 'javascript.png');
    }
  );
  
  $('#refreshDataLink').on('click', function() {
    $.get( "data.html", function( data ) {
      $( "#dataContainer" ).html( data );
    });
  });
  
})