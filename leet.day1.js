let runningSum = function(nums) {
    let ans = []
    for(let i = 0 ; i<nums.length ; i++){
        let j = 0
        let sum = 0
        while(j<=i){
            sum+=nums[j]
            j++
        }
        ans.push(sum)
    }
    return ans
};
console.log(runningSum());




[1,2,1]
[1,2,1,1,2,1]


let getConcatenation = function(nums=[1,2,3,4]) {
    let ans = []

     for (let i = 0 ; i<nums.length ;  i++){
        ans.push(nums[i])
     }
     for(let k = 0 ; k<nums.length; k++){
            ans.push(nums[k])
         }
    return ans
};
console.log(getConcatenation());

