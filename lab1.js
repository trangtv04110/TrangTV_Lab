// 1- Viết hàm giải phương trình bậc hai
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
//console.log(doesIt);
 
var phrase = S('JavaScript is the best scripting language ever!');
var sub = 'best scripting';
var pos = phrase.indexOf(sub);
//console.log(phrase.truncate(18).s);

//2- Cho vào một chuỗi string, hãy in ra từ và tần suất xuất hiện từ cao xuống thấp
//3- Viết hàm mở rộng String (String.prototype.wordcount) để đếm số từ trong một chuỗi. Dùng Mocha, Chai để viết hàm kiểm thử.
//Làm xong bài tập đẩy lên github, rồi nhắn riêng cho anh nhé.
function wordcount(str) {
	var words = [];
	var arr = str.split(" ");
	// count
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i].trim().length == 0) continue;
		if(typeof(words[arr[i]]) == "number") {
			words[arr[i]] += 1;
		} else {
			words[arr[i]] = 1;
		}
	}
	// order
	var arrNew = []; // an array of objects to return
	for (word in words) {
		arrNew.push({
			text: word,
			count: words[word]
		});
	}
	console.log(arrNew);
	arrNew.sort(function(a, b) {
		return (a.count > b.count) ? -1 : ((a.count < b.count) ? 1 : 0);
	});
	console.log(arrNew);
}
wordcount("world hello  hello hello hello world");
