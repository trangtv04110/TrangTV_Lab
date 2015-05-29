function printTree(n) {
	console.log('-------------------------');
	for (var i = 0; i < n; i++) {
		var space = "";
		var text = "";
		for (var j = 0; j < n - i; j++) {
			space += " ";
		}
		process.stdout.write(space);
		for (var j = 0; j < i*2+1; j++) {
			text += "+";
		}
		process.stdout.write(text);
		if(space.length > 1) {
			process.stdout.write(space + space.substring(0, space.length-1));
		} else {
			process.stdout.write('|');
		}
		process.stdout.write(text + '\r');
	}
}

function print(n) {
	console.log('-------------------------');
	for (var i = 0; i < n; i++) {
		var space = "";
		var text = "";
		for (var j = 0; j < n - i; j++) {
			space += " ";
		}
		process.stdout.write(space);
		for (var j = 0; j < i*2+1; j++) {
			text += "+";
		}
		process.stdout.write(text + space + '\r');
	}
}

print(6);
printTree(6);