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


