Array.prototype.uniq = function() {
  const uniqueArray = [];
  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }
  return uniqueArray;
};

Array.prototype.uniq = function() {
  const uniqueArray = [];
  this.forEach(function (el) {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });
  return uniqueArray;
};

Array.prototype.twoSum = function() {
  const twoSumArray = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSumArray.push([i, j]);
      }
    }
  }
  return twoSumArray;
};

Array.prototype.transpose = function() {
  const duplicateArray = this.slice(0, this.length);
  const finalArray = [];
  for (let i = 0; i < this[0].length; i++) {
    let tempArray = [];
    for (let j = 0; j < this.length; j++) {
      tempArray.push(this[j][i]);
    }
    finalArray.push(tempArray);
  }
  return finalArray;
};