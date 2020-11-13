function pairwise(arr, arg) {
	let sum = 0;
	let alreadyUsed = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (alreadyUsed.includes(j) || alreadyUsed.includes(i)) {
				continue;
			}
			if (arr[i] + arr[j] == arg) {
				sum += i + j;
				alreadyUsed.push(j);
				break;
			}
		}
	}

	return sum;
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
