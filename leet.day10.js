let findMiddleIndex = function(nums = [2,3,-1,8,4]) {

 for(let i = 0 ; i<nums.length ; i++){
   
   let left = nums.slice(0 , i).reduce((a,b)=> a+b , 0)
   let right = nums.slice(i+1).reduce((a,b)=> a +b ,0)

   if(left===right){
    return i 
   }

 }

 return -1

}

console.log(findMiddleIndex());


let array = [1,2,4,5,7,8]

let value = []

for(let i = 1 ; i<=10 ; i++){
    if(!array.includes(i)){
        value.push(i)
    }
}

console.log(value);
