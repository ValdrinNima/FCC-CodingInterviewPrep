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

function perm(arr) {

  if (arr.length == 1) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let permutation = []

    return permutation.push(perm(arr.splice(arr[i], 1)));
  }
}
console.log(perm([1, 2, 3]));
//  permAlone("aab");
