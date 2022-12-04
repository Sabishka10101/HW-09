const myArr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, val) {
    let idx = arr.indexOf(val);
    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
}

console.log(removeElement(myArr, 6));