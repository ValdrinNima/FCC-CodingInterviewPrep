function partition(arr, i = 0, j = arr.length - 1) {
	let pivot = i;

	while (j > i) {
		do {
			i += 1;
		} while (arr[pivot] > arr[i]);

		while (arr[pivot] < arr[j]) {
			j -= 1;
		}
		if (j < i) {
			break;
		}

		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	[arr[pivot], arr[j]] = [arr[j], arr[pivot]];

	return j;
}

function quickSort(arr, i = 0, j = arr.length - 1) {
	if (i < j) {
		let ind = partition(arr, i, j);
		quickSort(arr, i, ind - 1);
		quickSort(arr, ind + 1, j);
	}
	return arr;
}

console.log(quickSort([10, 16, 8, 12, 15, 6, 3, 9, 5]));
// console.log(partition([10, 16, 8, 12, 15, 6, 3, 9, 5]));
