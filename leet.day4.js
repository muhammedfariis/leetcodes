let numIdenticalPairs = function(nums = [1,2,3,1,1,3]) {
     let output = 0

     for(let i = 0 ; i<nums.length ; i++){
        for(let k = i+1 ; k<nums.length ; k++){
            if(nums[i] === nums[k]){
                output++
            }
        }
     }
     return output
}; 

console.log(numIdenticalPairs());




let finalValueAfterOperations = function(operations = ["--X","X++","X++"]) {
    
    let X = 0 

    for(let i = 0 ; i<operations.length ; i++){
        if(operations[i]=="X++"){
            X++
        }
        if(operations[i]=="++X"){
            ++X
        }
        if(operations[i]=="--X"){
            --X
        }
        if(operations[i]=="X--"){
            X--
        }
        
    }

    return X
};
console.log(finalValueAfterOperations());

let smallerNumbersThanCurrent = function(nums = [8,1,2,2,3]) {

    let output = []
    for(let i = 0 ; i<nums.length ; i++){
          let count = 0       
           for(let k = 0 ; k<nums.length ; k++){
            if(nums[i]>nums[k]) {
                count++
                
            }            
             
        }
        output.push(count)
    }
    return output
};

console.log(smallerNumbersThanCurrent());
