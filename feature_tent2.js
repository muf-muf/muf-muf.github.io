var autoCollectTimerTent2 = setInterval(startCounterTent2, 1000);

function startCounterTent2() {
	if (boughtTent2) { 
		autoCollectTent2();
	}
}

function unlockTent2() {
	collectedMoney = document.getElementById('collectedMoney').value;

	if (collectedMoney >= unlockCostTent2) {
		collectedMoney = collectedMoney - unlockCostTent2;
		document.getElementById('collectedMoney').value = collectedMoney;

		boughtTent2 = true;
		startCounterTent2();

		document.getElementById('buttonBuyTent2').disabled = true;
		document.getElementById('buttonBuyTent2').style.visibility = 'hidden';
		document.getElementById('tent2').style.background = "url('images/tent2.png') no-repeat";
		document.getElementById('buttonUpgradeTent2').disabled = false;
		document.getElementById('buttonUpgradeTent2').style.visibility = 'visible';
		document.getElementById('currentLevelTent2').innerHTML = Number(document.getElementById('currentLevelTent2').innerHTML) + 1;
	} else {
		document.getElementById('moneyCounter').innerHTML = "<p class='error'>Niet genoeg geld.</p>";
	}
}

function autoCollectTent2() {
	var currentMoney = document.getElementById('currentMoneyTent2').value;
	
	if (currentMoney < maxMoneyCollectedTent2) {
		document.getElementById('currentMoneyTent2').value = Number(document.getElementById('currentMoneyTent2').value) + startUpgradeCostTent2 + upgradeLevelTent2;
		document.getElementById('moneyCounter').innerHTML = "<p>Verdien geld met tenten verhuren.</p>";
		checkIfFull("Tent2");
	}
}

function upgradeTent2() {
	var collectedMoney = Number(document.getElementById('collectedMoney').value);

	if (upgradeCostTent2 <= collectedMoney) {
		upgradeLevelTent2 = upgradeLevelTent2 + upgradeLevelMoneyIncreaseTent2;

		collectedMoney = collectedMoney - upgradeCostTent2;
		document.getElementById('collectedMoney').value = collectedMoney;

		upgradeCostTent2 = upgradeCostTent2 + upgradeCostIncreaseTent2;
		
		document.getElementById('currentTentUpgradeCostTent2').innerHTML = upgradeCostTent2;
		document.getElementById('currentMoneyIntervalTent2').innerHTML = startUpgradeCostTent2 + upgradeLevelTent2; 
		document.getElementById('currentLevelTent2').innerHTML = Number(document.getElementById('currentLevelTent2').innerHTML) + 1;

		if (document.getElementById('currentLevelTent2').innerHTML >= maxLevelTent2) {
			document.getElementById('buttonUpgradeTent2').disabled = true;
			tent2_maxLevel = true;
			allTentsMaxLevel();
		}

	} else {
		document.getElementById('moneyCounter').innerHTML = "<p class='error'>Niet genoeg geld.</p>";
	}
}
