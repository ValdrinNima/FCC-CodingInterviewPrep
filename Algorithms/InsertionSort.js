function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		while (arr[i + 1] < arr[i] && i + 1 > 0) {
			[arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
			i -= 1;
		}
	}
	return arr;
}

console.log(
	insertionSort([
		1,
		4,
		2,
		8,
		345,
		123,
		43,
		32,
		5643,
		63,
		123,
		43,
		2,
		55,
		1,
		234,
		92,
	])
);
