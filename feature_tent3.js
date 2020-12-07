var autoCollectTimerTent3 = setInterval(startCounterTent3, 2500);

function startCounterTent3() {
	if (boughtTent3) { 
		autoCollectTent3();
	}
}

function unlockTent3() {
	collectedMoney = document.getElementById('collectedMoney').value;

	if (collectedMoney >= unlockCostTent3) {
		collectedMoney = collectedMoney - unlockCostTent3;
		document.getElementById('collectedMoney').value = collectedMoney;

		boughtTent3 = true;
		startCounterTent3();

		document.getElementById('buttonBuyTent3').disabled = true;
		document.getElementById('buttonBuyTent3').style.visibility = 'hidden';
		document.getElementById('tent3').style.background = "url('images/tent3.png') no-repeat";
		document.getElementById('buttonUpgradeTent3').disabled = false;
		document.getElementById('buttonUpgradeTent3').style.visibility = 'visible';
		document.getElementById('currentLevelTent3').innerHTML = Number(document.getElementById('currentLevelTent3').innerHTML) + 1;
	} else {
		document.getElementById('moneyCounter').innerHTML = "<p class='error'>Niet genoeg geld.</p>";
	}
}

function autoCollectTent3() {
	var currentMoney = document.getElementById('currentMoneyTent3').value;

	if (currentMoney < maxMoneyCollectedTent3) {
		document.getElementById('currentMoneyTent3').value = Number(document.getElementById('currentMoneyTent3').value) + startUpgradeCostTent3 + upgradeLevelTent3;
		document.getElementById('moneyCounter').innerHTML = "<p>Verdien geld met tenten verhuren.</p>";
		checkIfFull("Tent3");
	}
}

function upgradeTent3() {
	var collectedMoney = Number(document.getElementById('collectedMoney').value);

	if (upgradeCostTent3 <= collectedMoney) {
		upgradeLevelTent3 = upgradeLevelTent3 + upgradeLevelMoneyIncreaseTent3;
		
		collectedMoney = collectedMoney - upgradeCostTent3;
		document.getElementById('collectedMoney').value = collectedMoney;
		
		upgradeCostTent3 = upgradeCostTent3 + upgradeCostIncreaseTent3;
		
		document.getElementById('currentTentUpgradeCostTent3').innerHTML = upgradeCostTent3;
		document.getElementById('currentMoneyIntervalTent3').innerHTML = startUpgradeCostTent3 + upgradeLevelTent3; 
		document.getElementById('currentLevelTent3').innerHTML = Number(document.getElementById('currentLevelTent3').innerHTML) + 1;
	
		if (document.getElementById('currentLevelTent3').innerHTML >= maxLevelTent3) {
			document.getElementById('buttonUpgradeTent3').disabled = true;
			tent3_maxLevel = true;
			allTentsMaxLevel();
		}
	} else {
		document.getElementById('moneyCounter').innerHTML = "<p class='error'>Niet genoeg geld.</p>";
	}
}
