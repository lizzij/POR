$('#qdriver_count_select').change(function() {
  console.log('action handler called. id: qdriver_count_select, event: change');
  displayDriversTable($('#qdriver_count_select').val());
});

$('#qadditional_cars_select').change(function() {
  console.log('action handler called. id: qadditional_cars_select, event: change');
  show([1, 2])
});

$('#qcar_owner_yes_radio').click(function() {
  console.log('action handler called. id: qcar_owner_yes_radio, event: click');
  show(['q4b'])
});

$('#qcar_owner_no_radio').click(function() {
  console.log('action handler called. id: qcar_owner_no_radio, event: click');
  hide(['q4b', 'q4c'])
});

$('#qcar_make_select').change(function() {
  console.log('action handler called. id: qcar_make_select, event: change');
  show(['q4c'])
});

$('#qdriving_destinations_map').load(function() {
  console.log('action handler called. id: qdriving_destinations_map, event: load');
  createMap(qdriving_destinations_map_canvas, {'lat': 36.6, 'lng': -120.1, 'zoom': 6}, {})
});

$('input#submitButton').click(function()
{
    $('form#survey').submit();
});