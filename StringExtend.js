String.prototype.reverse = function() {
	var result = "";
	for (var i = this.length - 1; i >= 0; i--) {
		result += this[i];
	};
	return result;
}
String.prototype.wordcount = function() {
	var words = [];
	var arr = this.split(" ");
	// count
	for (var i = 0; i < arr.length; i++) {
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
	arrNew.sort(function(a, b) {
		return (a.count > b.count) ? -1 : ((a.count < b.count) ? 1 : 0);
	});

	var result = "";
	for (var i = 0; i < arrNew.length; i++) {
		result += arrNew[i].text + ": " + arrNew[i].count + ", ";
	}
	return result.substring(0, result.length - 2);
}