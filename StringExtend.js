String.prototype.reverse = function() {
	var result = "";
	for (var i = this.length - 1; i >= 0; i--) {
		result += this[i];
	};
	return result;
}