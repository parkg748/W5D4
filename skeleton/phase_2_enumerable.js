Array.prototype.myEach = function(callback) {
  this.forEach(function (el) {
    return callback(el);
  });
};

Array.prototype.myMap = function(callback) {
  const array = [];
  this.forEach(function (el) {
    array.push(callback(el));
  });
  return array;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let array = this.slice(0, this.length);
  const finalArray = [];
  if (!initialValue) {
    initialValue = array[0];
    array = array.slice(1, this.length);
  }
  let result = initialValue;
  array.forEach(function (el) {
    result = callback(result, el);
  });
  return result;
};