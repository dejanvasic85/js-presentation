//so we know the document is ready
$(function() {

  /*EXAMPLE 1*/
  $('#showHideLink').click(function() {
    $('#showHideContentParagraph').toggle();

    //animation
    //$('#showHideContentParagraph').toggle('slow');
  })

  $('#makeAllRedLink').on('click', function() {
    //$('#theList li').css('color', 'red');

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
  $('#changeParagraphBtn').on('click', function() {
    var para = $('#para');
    para.html('I got changed from JavaScript!');
    //para.html('I got changed from <strong>JavaScript!</strong>');
  });


  $('#addRowLink').on('click', function() {
    $('#myTable').append('<tr><td>New data 1</td><td>New data 2</td></tr>');
    
    /*
    $("#myTable")
      .append($('<tr>')
          .append($('<td>').text('New data 1'))
          .append($('<td>').text('New data 2'))
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