function mergeSort(arr) {}

function merge(arr1, arr2) {
	let result = [];
	let i = 0;
	while (arr1.length > 0 && arr2.length > 0) {
		if (arr1[i] < arr2[i]) {
			result.push(arr1[i]);
			arr1.splice(i, 1);
		} else {
			result.push(arr2[i]);
			arr2.splice(i, 1);
		}
	}
	let longer = arr2.length > arr1.length ? arr2 : arr1;
	result.push(...longer);

	return result;
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
