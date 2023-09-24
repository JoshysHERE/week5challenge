// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
var  todaysDate = moment().format('dddd, MMM Do YYYY');
$('#todaysDate').html(todaysDate);
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  $('saveBtn').on('click', function () {

    var text = $(this).siblings('description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
  })

  function timeKeeper() {

  var currentTime = moment().hour();

  $('.time-block').each(function () {
var blockTime = parseInt($(this).attr('id').split('hour')[1]);

if(blockTime < timeNow) {
   $(this).removeClass('future');
   $(this).removeClass('present');
   $(this).addClass('past');
}
else if(blockTime < timeNow) {
  $(this).removeClass('future');
  $(this).removeClass('present');
  $(this).addClass('past');
}
else {
  $(this).removeClass('future');
  $(this).removeClass('present');
  $(this).addClass('past');
  
}
  })
}

