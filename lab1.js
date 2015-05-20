// Giải phương trình bậc 2
function GPTB2(a, b, c) {
	if(typeof(a) == "number" && typeof(b) == "number" && typeof(c) == "number") {
		if(a == 0) {
			console.log("The first param must not equal 0");
		} else {
			var delta = b * b - 4 * a * c;
			if(delta < 0) {
				console.log("No result");
			} else if(delta == 0) {
				var result = -b / (2 * a);
				console.log("Result = " + result);
			} else {
				var x1 = (-b - Math.sqrt(delta)) / (2 * a);
				var x2 = (-b + Math.sqrt(delta)) / (2 * a);
				console.log("Result x1 = " + x1 + " and x2 = " + x2);
			}
		}
	} else {
		console.log("The params must be number");
	}
}
// GPTB2(2, -7, 3);
// GPTB2(6, 1, 5);
// GPTB2(1, -8, 16);
// GPTB2(0, -7, 3);

// Đảo ngược chuỗi
function reverse(str) {
	var arr = [];
	for (var i = str.length - 1; i >= 0; i--) {
		arr.push(str[i]);
	}
	console.log(arr.join(''));
}
//reverse("Tran Van Trang");
//reverse("");

// User String module
var S = require('string');
var doesIt = S('my cool string').left(2).endsWith('y');
console.log(doesIt);
 
var phrase = S('JavaScript is the best scripting language ever!');
var sub = 'best scripting';
var pos = phrase.indexOf(sub);
console.log(phrase.truncate(18).s);