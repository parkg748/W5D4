Array.prototype.bubbleSort = function() {
  let array = this.slice(0, this.length);
  for (let i = 0; i < (array.length - 1); i++) {
    for (let j = 0; j < (array.length - 1); j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

String.prototype.substrings = function() {
  const finalArray = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < (this.length + 1); j++) {
      if (!finalArray.includes(this.slice(i, j))) {
        finalArray.push(this.slice(i, j));
      }
    }
  }
  return finalArray;
};