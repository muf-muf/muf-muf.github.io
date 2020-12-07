var needToReloadWasConfirmed = false;

function startTimer(duration, display) {
	var timer = duration, minutes, seconds;

	setInterval(function() {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);	

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (timer < 3 * 60) {
			document.getElementById('timeLeftInCountdown').classList.add("timerShort");
		}

		if (--timer < -1) {
			document.getElementById('timeLeftInCountdown').innerHTML = "00:00 - Je tijd is om!";
			confirmReloadJustOnce("tijdIsOm");
		}
	}, 1000);
}

function activateTimerStart(time) {
	// Defines the time for the level; define via startup.js
	var timeInSeconds = time,
		display = document.querySelector('#timeLeftInCountdown');
	startTimer(timeInSeconds, display);
}
