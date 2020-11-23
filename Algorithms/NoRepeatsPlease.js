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

function perm(arr, permutation=[]) {
    let result = []
    
    if(arr.length == 0) {
        console.log(permutation)
       return permutation 
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr.length != 0) {
            let newArr = [...arr]
            permutation.push(arr[i])
            newArr.splice(i, 1)
            result.push(perm(newArr, permutation))
        } else {
            let newArr = [...arr]
            permutation.push(arr[i])
            newArr.splice(i, 1)
            return perm(newArr, permutation)
        }
    }
    return result
}


console.log(perm([1, 2, 3]));
