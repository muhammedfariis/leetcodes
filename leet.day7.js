let filter = function(arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }

  return result;
};

let array = [10,20,3,50,6]
let output = filter(array , (n,i) => {
 return  i===0 ? true : false
})

console.log(output);

let filters = function(arr , fn){
  let result = []

  for(let i = 0 ; i<arr.length ; i++){
    if(fn(arr[i] , i)){
        result.push(arr[i])
    }
  }
  return result
}

let searchInsert = function (nums = [1, 3, 5, 6], target = 2) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

console.log(searchInsert());
