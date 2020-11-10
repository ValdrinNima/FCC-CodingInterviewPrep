function updateInventory(arr1, arr2) {
  let resultArr = [];

  let arr2Copy = [...arr2];
  arr1.forEach((item1) => {
    let found = false;
    arr2.forEach((item2, i) => {
      if (item1[1] == item2[1]) {
        resultArr.push([item1[0] + item2[0], item1[1]]);
        arr2Copy.splice(arr2.indexOf(item2), 1);
        found = true;
      }
    });
    if (!found) {
      resultArr.push(item1);
    }
  });

  resultArr.push(...arr2Copy);
  function compare(a, b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  }

  resultArr.sort(compare);

  return resultArr;
}

console.log(
  updateInventory(
    [],
    [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ]
  )
);
[
  [67, "Bowling Ball"],
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [7, "Toothpaste"],
];
