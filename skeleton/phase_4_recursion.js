function range(start, end) {
  if (start === end) {
      return [start];
  }
  let array = range(start, end - 1);
  array.push(end);
  return array;
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponentVerOne(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponentVerOne(base, exp - 1);
}

function exponentVerTwo(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }
  if (exp % 2 === 0) {
    return (exponentVerTwo(base, (exp / 2)) ** 2);
  } else {
    return base * (exponentVerTwo(base, ((exp - 1) / 2) ** 2));
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  let array = fibonacci(n - 1);
  array.push(fibonacci(n - 1).slice((fibonacci(n - 1).length - 2), (fibonacci(n - 1).length)).reduce((acc, el) => (acc + el)));
  return array;
}

function deepDup(arr) {
  let array = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      let tempArray = deepDup(el);
      array.push(deepDup(el));
    } else {
      array.push(el);
    }
  });
  return array;
}

// [1,2,[3,4,[5],6]]
// first stack
// array = [1,2]
// array.push(deepDup([3,4,[5],6]))
// second stack
// array = [3,4]
// array.push(deepDup([5]))
// third stack
// array = [5]

function bsearch(arr, target) {
  if (arr.indexOf(target) === -1) {
    return -1;
  } else if (arr[-1] === target) {
    return (arr.length - 1);
  }
  let midpoint = Math.floor((arr.length / 2))
  if (arr[midpoint] === target) {
    return midpoint;
  }
  if (arr[midpoint] > target) {
    return bsearch(arr.slice(0, midpoint), target);
  } else {
    return midpoint + 1 + bsearch(arr.slice(midpoint + 1, arr.length), target);
  }
}
[2,3,4,6,7] target 6
first stack
midpoint = 2
2 + 1
second stack
midpoint = 1