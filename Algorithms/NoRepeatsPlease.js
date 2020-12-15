function permAlone(str) {
	let input = str.split("");
	var permArr = [],
		usedChars = [];

	function permute(input) {
		var i, ch;
		for (i = 0; i < input.length; i++) {
			ch = input.splice(i, 1)[0];
			usedChars.push(ch);
			if (input.length == 0) {
				permArr.push(usedChars.slice());
			}
			permute(input);
			input.splice(i, 0, ch);
			usedChars.pop();
		}
		return permArr;
	}

	let permutations = permute(input);
	console.log(permutations);
	let result = permutations;
	for (let i = 0; i < permutations.length; i++) {
		for (let j = 0; j < permutations[i].length - 1; j++) {
			if (permutations[i][j] === permutations[i][j + 1]) {
				permutations.splice(i, 1);
				i -= 1;
				break;
			}
		}
	}
	return permutations.length;
}

console.log(permAlone("aabb"));
 
