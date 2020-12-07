function confirmReloadJustOnce(reden) {
	if (!needToReloadWasConfirmed) {
		needToReloadWasConfirmed = true;
		
		if(reden == "tijdIsOm") {

			if(confirm("Je tijd is om! Klik op OK om opnieuw te proberen.")) {
				window.location.reload();
			} else {
				alert("Ik zei dat je op OK moest klikken. Je spel wordt nu opnieuw geladen.");
				window.location.reload();
			}
		} else if ("allesMaxLevel") {
			alert("Gefeliciteerd, je hebt het spel uitgespeeld. Je bent de beste tententycoon van de hele wereld!Je had nog " + document.getElementById('timeLeftInCountdown').innerHTML + " over! Probeer het nog eens voor een betere score!")
			window.location.reload();
		}
	}
}
