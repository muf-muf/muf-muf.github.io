var debug = true;

function testSession() {
	if (debug) {
		document.getElementById('collectedMoney').disabled = false;
		document.getElementById('collectedMoney').value = 750000;
		document.getElementById('currentMoneyTent1').disabled = false;
		document.getElementById('currentMoneyTent2').disabled = false;
		document.getElementById('currentMoneyTent3').disabled = false;

		document.getElementById('testButtonSpan').innerHTML = '<button id="testButton" onclick="test()">Test button</button>';
		document.getElementById('testSpan').innerHTML = '<p>Er is nog niks gebeurd.</p>';
	} else {
		document.getElementById('testDiv').style.display = "none";
	}
}



/* De logica voor een aan-/uitknop, bijvoorbeeld voor geluidseffecten */
var testVariable = true;
function test() {
	var testAudio = new Audio('sounds/testgeluid.mp3');
	if (testVariable) {
		document.getElementById('testSpan').innerHTML = "<p>aan</p>";
		testAudio.play();
		testVariable = false;
	} else {
		document.getElementById('testSpan').innerHTML = "<p>uit</p>";
		testAudio.pause();
		testVariable = true;
	}
}

/* Defined directly inline at game.php:92 because PHP is mean and cannot call on JS functions.
function dbConnectionCheck() {
	document.getElementById('dbConnectionIndicator').innerHTML = 'Aan';
}
*/

/*
var audio = new Audio('audio_file.mp3');
audio.play();
sound.pause();
sound.currentTime = 0;
*/
