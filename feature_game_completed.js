var tent1_maxLevel = false;
var tent2_maxLevel = false;
var tent3_maxLevel = false;

function allTentsMaxLevel() {
	if (tent1_maxLevel == true && tent2_maxLevel == true && tent3_maxLevel == true) {
		confirmReloadJustOnce("allesMaxLevel");
	}
}