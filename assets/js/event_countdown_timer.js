function startEventCountDownTimer(countDownDate, duration) {
  var session_banner = document.getElementById('session-banner');
  var coming_soon_banner = document.getElementById('coming-soon-banner');
  var event_countdown_timer = document.getElementById('event-countdown-timer');
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // If the count down is finished, write some text
    if (distance < 0) {
      if (-distance < duration * 1000 * 60) {
        event_countdown_timer.innerHTML = 'In Progress!';
        coming_soon_banner.style.display = 'none';
        session_banner.style.display = 'block';
      } else {
        clearInterval(x);
        event_countdown_timer.innerHTML = '';
        coming_soon_banner.style.display = 'block';
        session_banner.style.display = 'none';
      }
    } else {
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours =
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days.toString().padStart(2, '0');
      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');

      // Display the result in the element with id="demo"
      event_countdown_timer.innerHTML =
          `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
      coming_soon_banner.style.display = 'none';
      session_banner.style.display = 'block';
    }
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  var event_timer = document.getElementById('event-timer');
  var event_date = event_timer.getAttribute('data-event-date');
  event_date = event_date ? event_date : (Date.now() - 1);
  event_date = new Date(event_date).getTime();

  var event_duration = event_timer.getAttribute('data-event-duration');
  event_duration = event_duration ? event_duration : '60';
  startEventCountDownTimer(event_date, Number(event_duration));
});
