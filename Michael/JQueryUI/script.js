$(function() {
  $("#sortable").sortable();
  $("#datepicker").datepicker();
  $("#dialog").dialog({
    autoOpen: false
  });
  
  $('#dialogOpenLink').on('click', function() {
    $( "#dialog" ).dialog( "open" );
  })
  
  
});