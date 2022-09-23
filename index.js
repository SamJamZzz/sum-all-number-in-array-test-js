function sumItems(array) {
  sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
      continue;
    }
    sum += item;
  }
  return sum;
}

module.exports = sumItems;