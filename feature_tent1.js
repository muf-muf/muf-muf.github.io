var autoCollectTimerTent1 = setInterval(autoCollectTent1, 400);

function autoCollectTent1() {
	var currentMoney = document.getElementById('currentMoneyTent1').value;
	
	if (currentMoney < maxMoneyCollectedTent1) {
		document.getElementById('currentMoneyTent1').value = Number(document.getElementById('currentMoneyTent1').value) + startUpgradeCostTent1 + upgradeLevelTent1;
		document.getElementById('moneyCounter').innerHTML = "<p>Verdien geld met tenten verhuren.</p>";
		checkIfFull("Tent1");
	}
}

function upgradeTent1() {
	var collectedMoney = Number(document.getElementById('collectedMoney').value);

	if (upgradeCostTent1 <= collectedMoney) {
		upgradeLevelTent1 = upgradeLevelTent1 + upgradeLevelMoneyIncreaseTent1;

		collectedMoney = collectedMoney - upgradeCostTent1;
		document.getElementById('collectedMoney').value = collectedMoney;

		upgradeCostTent1 = upgradeCostTent1 + upgradeCostIncreaseTent1;

		document.getElementById('currentTentUpgradeCostTent1').innerHTML = upgradeCostTent1;
		document.getElementById('currentMoneyIntervalTent1').innerHTML = startUpgradeCostTent1 + upgradeLevelTent1; 
		document.getElementById('currentLevelTent1').innerHTML = Number(document.getElementById('currentLevelTent1').innerHTML) + 1;

		if (document.getElementById('currentLevelTent1').innerHTML >= maxLevelTent1) {
			document.getElementById('buttonUpgradeTent1').disabled = true;
			tent1_maxLevel = true;
			allTentsMaxLevel();
		}
	} else {
		document.getElementById('moneyCounter').innerHTML = "<p class='error'>Niet genoeg geld.</p>";
	}
}
