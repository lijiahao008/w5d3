function myUnique(array) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    if (result.includes(array[i])) {
    } else
    result.push(array[i]);
  }
  return result;
}

// console.log(myUnique([1,2,2,3,4,4,5,6,6]));

function twoSum(array) {
  let result = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
// console.log(twoSum([1,2,3,-3,4,5,6,-6]));

function transpose(array) {
  let result = [];
  for (var col = 0; col < array.length; col++) {
    let row_array = [];
    for (var row = 0; row < array[0].length; row++) {
      row_array.push(array[row][col]);
    }
    result.push(row_array);
  }
  return result;
}
//
// console.log(transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));


function my_each (array, func){
    for (let i = 0; i < array.length; i++) {
      func(array[i]);
    }
    return array;
}
// let doubler = function(el){
//   console.log(el * 2);
// };
// my_each([1, 2, 4], doubler);

function my_map(array, func){
  const mapped = [];

  my_each(array, function(el) {
    mapped.push(func(el));
  });

  return mapped;
}
//
// my_map([1,2,3], doubler);

function my_inject(array, inject_func){
  let accum = array[0];
  let each_array = array.slice(1, array.length);

  my_each(each_array, function(el) {
    accum = inject_func(accum, el);
  });

  return accum;
}

function times(acc, el) {
  return acc * el;
}

// console.log(my_inject([2,3,4,1], times));
// my_inject([1,2,3], multiplier);

function factors(num) {

  for (let i = 1; i < num; i++) {
    if (num % i === 0){
      console.log(i);
    }
  }

}

// factors(24);

// function bubble_sort(array){
//   let sorted = true;
//   while (sorted){
//     sorted = true;
//     for (let i = 0; i < array.length; i++) {
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[i] > array[j]){
//           num = array[i];
//           array[i] = array[j];
//           array[j] = num;
//           sorted = false;
//           console.log(array[i]);
//           console.log(array[j]);
//           console.log(`Array: ${array}`);
//         }
//       }
//     }
//   }
//   return array;
// }
function bubble_sort(array){

  while (true){
    swapped = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]){
          num = array[i];
          array[i] = array[i + 1];
          array[i + 1] = num;
          swapped = true;
        }
      }
      if (swapped === false){
        return array;
      }
  }

}

// console.log(bubble_sort([3,34,3456, 1, 12,234,345,346,7]));

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      result.push(string.slice(i, j + 1));
    }
  }

  return result;
}

// console.log(substrings("cat"));

function range(start, end) {

  if (start > end) {
    return [];
  }
  if (start === end) {
    return [start];
  }
  let result = [start];
  return result.concat(range(start + 1, end));

}

// console.log(range(5, 10));


function sumOfArray(array){
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// console.log(sumOfArray([5, 10,15,20]));

function sumOfArrayRec(array){
  if (array.length === 1){
    return array[0];
  }
  let sum = array[0];
  return sum += sumOfArrayRec(array.slice(1, array.length + 1));
}


// console.log(sumOfArrayRec([5, 10,15,20]));

function exponentiation_one(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  }
  let result = b;
  return result * exponentiation_one(b, n - 1);

}

// console.log(exponentiation_one(2, 3));

function exp_two(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b;
  }
  if (n % 2 === 0) {
    return exp_two(b, n / 2) * exp_two(b, n / 2);
  } else {
    return b * (exp_two(b, (n - 1) / 2) * exp_two(b, (n - 1) / 2));
  }
}

// console.log(exp_two(2, 1023));

function fib_it(n) {
  if (n === 1) {
    return [1];
  } else if (n <= 0) {
    return [];
  }
  let result = [1, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

// console.log(fib_it(50));
// 1,1,2,3,5,8,13

function fibRec(n) {
  if ( n <= 2 ) {
    return [0,1];
  } else {
    fibs = fibRec(n - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs;
}
// console.log(fibRec(6));
//[1,1,2,3,5,8]


function bSearch(array, target) {
  let mid = Math.floor(array.length / 2);

  if (array.length === 0 ) {
    return null;
  }

  if (array[mid] === target) {
    return mid;
  }
  else if (array[mid] > target){
    return bSearch(array.slice(0, mid), target);
  }
  else {

    let sub_answer = bSearch(array.slice(mid + 1), target);
    if (sub_answer === null) {
      return null;
    }
    else {
      return (mid + 1) + sub_answer;
    }
  }
}


// console.log(bSearch([3,4,5,6,7,8,9], 8));


// function makeChange(target, coins) {
//
//   if (target === 1) {
//     return coins[coins.length - 1];
//   }
//
//   let biggestCoin = coins[0];
//   for (let i = 0; i < coins.length; i++) {
//     if (coins[i] < target) {
//       biggestCoin = coins[i];
//       break;
//     }
//   }
//
//   let result = [biggestCoin];
//
//   target -= biggestCoin;
//
//   return result.concat(makeChange(target, coins));
//
//
// }





// function makeBadChange(target, coins) {
//
//   if (target === 1) {
//     return coins[coins.length - 1];
//   }
//
//   let biggestCoin = coins[0];
//   for (let i = 0; i < coins.length; i++) {
//     if (coins[i] < target) {
//       biggestCoin = coins[i];
//       break;
//     }
//   }
//   let result = [biggestCoin];
//
//   target -= biggestCoin;
//
//   return result.concat(makeBadChange(target, coins));
// }


//
//
//
// console.log(makeChange(14, [10,7,1]));
// console.log(makeChange(47, [25, 10,5,1]));








function makeChange(target, coins) {
  if (target === 0) {
    return [];
  }

  let bestChange = null;

  for (let i = 0; i < coins.length; i++) {
    if (target - coins[i] < 0) {
      continue;
    }

    let remainder = target - coins[i];
    thisRemainder = makeChange(remainder, coins.slice(i));

    if (thisRemainder === null) {
      continue;
    }

    let thisChange = [coins[i]].concat(thisRemainder);

    if (bestChange === null || bestChange.length > thisChange.length) {
      bestChange = thisChange;
    }

  }
  return bestChange;

}





console.log(makeChange(14, [10,7,1]));















// function makeChange(target, coins) {
//   if (target === 0) {
//     return [];
//   }
//
//   let bestChange = null;
//
//   for (let i = 0; i < coins.length; i++) {
//     if (target - coins[i] < 0) {
//       continue;
//     }
//
//     let remainder = target - coins[i];
//     let best_remainder = makeChange(remainder, coins.slice(i));
//
//     if (best_remainder === null) {
//       continue;
//     }
//
//     thisChange = [coins[i]].concat(best_remainder);
//
//     if (bestChange === null || bestChange.length > thisChange.length) {
//       bestChange = thisChange;
//     }
//   }
//   return bestChange;
// }

console.log(makeChange(14, [10,7,1]));
// console.log(makeChange(47, [25, 10,5,1]));
