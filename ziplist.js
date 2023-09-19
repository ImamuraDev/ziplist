const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function zipList(arr1, arr2) {
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  return arr;
}

console.log(zipList(test1, test2));

function zipListTheSimpleWay(arr1, arr2) {
  let arr = _.zip(arr1, arr2);
  arr = _.flatten(arr);
  return arr;
}

console.log(zipListTheSimpleWay(test1, test2));
