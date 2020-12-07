function collectAllMoney() {
  var currentMoneyTent1 = Number(document.getElementById('currentMoneyTent1').value);
  var currentMoneyTent2 = Number(document.getElementById('currentMoneyTent2').value);
  var currentMoneyTent3 = Number(document.getElementById('currentMoneyTent3').value);
  var collectedMoney = Number(document.getElementById('collectedMoney').value);

  document.getElementById('collectedMoney').value = collectedMoney + currentMoneyTent1 + currentMoneyTent2 + currentMoneyTent3;
  
  document.getElementById('currentMoneyTent1').value = 0;
  document.getElementById('currentMoneyTent2').value = 0;
  document.getElementById('currentMoneyTent3').value = 0;

  removeErrorClass();
}

function addErrorClass(id) {
	document.getElementById('currentMoney' + id).classList.add("error");
}

function removeErrorClass() {
	document.getElementById('currentMoneyTent1').classList.remove("error");
	document.getElementById('currentMoneyTent2').classList.remove("error");
	document.getElementById('currentMoneyTent3').classList.remove("error");
}

function checkIfFull(id) {
  var currentMoney = document.getElementById('currentMoney' + id).value;
  
  if (id = "Tent1") {
    if (currentMoney >= maxMoneyCollectedTent1) {
      addErrorClass("Tent1");
    }
  }

  if (id = "Tent2") {
    if (currentMoney >= maxMoneyCollectedTent2) {
      addErrorClass("Tent2");
    }
  }

  if (id = "Tent3") {
    if (currentMoney >= maxMoneyCollectedTent3) {
      addErrorClass("Tent3");
    }
  }
}