function sumItems(array) {
  sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }
  return sum;
}

module.exports = sumItems;