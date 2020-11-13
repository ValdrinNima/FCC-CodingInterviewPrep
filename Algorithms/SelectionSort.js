function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let smallest = arr[i];
		let smallestIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < smallest) {
				smallest = arr[j];
				smallestIndex = j;
			}
			if (j == arr.length - 1) {
				[arr[i], arr[smallestIndex]] = [smallest, arr[i]];
			}
		}
	}

	return arr;
}

console.log(
	selectionSort([
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
