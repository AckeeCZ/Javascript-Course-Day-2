var last_op = null;
var last_num = 0;
var to_clear = false;

function addNum(num) {
	var textElm = document.getElementById("display");
	if (to_clear) { textElm.value="0"; to_clear=false; }
	if (num !== "." && textElm.value==="0") textElm.value="";
	textElm.value += num;
}

function performOp(op) {
	var num = Number(document.getElementById("display").value);
	switch (last_op) {
		case "+":
			num = num + last_num;
			break;
		case "-":
			num = num - last_num;
			break;
		case "*":
			num = num * last_num;
			break;
		case "/":
			num = num / last_num;
			break;
	}
	num = Number(num.toFixed(15));
	last_num = num;
	last_op = op;
	to_clear = true;
	document.getElementById("display").value = num;
}

function process(input) {
	switch (input) {
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
		case ".":
			addNum(input);
			break;
		case "+":
		case "-":
		case "*":
		case "/":
		case "=":
			performOp(input);
			break;
	}
}