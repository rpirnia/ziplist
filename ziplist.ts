function zipList(list1: unknown[], list2: unknown[]):unknown[] {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}
// should output ['a', 1, 'b', 2, 'c', 3]
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]):unknown[] {
  const zipped = list1
    .map((item, index) => [item, list2[index]])
    .reduce((acc, curr) => acc.concat(curr), []);
  return zipped;
}
// should output ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
