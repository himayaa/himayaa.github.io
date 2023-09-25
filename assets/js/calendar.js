

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
  
    initialView: 'dayGridMonth',
    height: 600,
    contentHeight: 500,
    aspectRatio: 2,
  events: {
    googleCalendarApiKey: 'AIzaSyBVM8BPETbjKhQHnVsyjSEDatsu5V4jiUY',
    googleCalendarId: 'maya.hillegonds2@gmail.com@group.calendar.google.com'
  }
});
calendar.render();
});