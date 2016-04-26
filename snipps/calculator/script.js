var number = 0;
var curOp = null;
var toClear = true;
function performOp(op) {
	switch(op) {
		case '+':
		case '-':
		case '*':
		case '/':
		case '=':
			var prevNumber = number;
			number = parseFloat($("#display").val());
			if (curOp !== null) {
				switch(curOp) {
					case '+':
						number = prevNumber + number;
						break;
					case '-':
						number = prevNumber - number;
						break;
					case '*':
						number = prevNumber * number;
						break;
					case '/':
						number = prevNumber / number;
						break;
				}
			}
			toClear = true;
			curOp = op;
			$("#display").val(number);
			break;
	}
}

function perform(val) {
	if (isFinite(Number(val)) || val === ',') {
		if (toClear) {
			toClear = false;
			$("#display").val("0");
		}
		var curVal = $("#display").val() != 0 ? $("#display").val() : "";
		$("#display").val(curVal + val);
	} else {
		performOp(val);
	}
}

$( document ).ready(function() {

});