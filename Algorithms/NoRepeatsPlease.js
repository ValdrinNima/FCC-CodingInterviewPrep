// function permAlone(str) {
//   let arr = str.split("");

//   function perm(arr, permutation = []) {

//     if (arr.length == 1) {
//         result.push(arr[0])
//     }

//     for (let i = 0; i < arr.length; i++) {
//       permutation.push(arr[i]);

//       perm(arr.slice(1,), permutation);
//     }
//   }
// }
let result = [];

function perm(arr, permutation = []) {
	if (arr.length == 0) {
		return result.push(permutation);
	}

	for (let i = 0; i < arr.length; i++) {
    permutation.push(arr[i]);
    arr.splice(i, 1)
		return perm(arr, permutation);
	}
}
console.log(perm([1, 2, 3]));
