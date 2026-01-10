// const aray = [1,2,3,4,5]

// let largest = aray.reduce((acc , curr)=>{
//     return curr>acc ? curr : acc
// },0)

// console.log(largest);

// let arr = [10,20,5,56,80]

// let smallest = Infinity
// let secondsmallest = Infinity

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]<smallest){
//         secondsmallest = smallest
//         smallest = arr[i]
//     }
// }

// console.log(secondsmallest);



// leet code 


let removeDuplicates = function(nums = [1,1,2,5,5,5,5,9,8,9,8,9]) {
    let unique = []
  
     for(let  i = 0 ; i<nums.length ; i++){
        if(!unique.includes(nums[i])){
            unique.push(nums[i])
        }
     }
     for(let i = 0 ; i<unique.length ; i++){
         nums[i] = unique[i]
         
         
     }

     return unique.length
};

console.log(removeDuplicates());


