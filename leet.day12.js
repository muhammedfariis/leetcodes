let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};



const oddEven = (array=[1,2,3,4,5,9,10,50,60,40,8,0,75,71,72,73,79,78,74,75,788])=>{
  let odd = []
  let even = []
  for (let i = 0 ;i<array.length ; i++){
     array[i]%2===0 ? even.push(array[i]) : odd.push(array[i])
  }
 

  console.log(` \t odd : ${odd} \n even : ${even}`);
  
}

oddEven()


const duplicate = (arr=[1,1,1,2,4,5,5,7,5,8,])=>{
    let dup = []
    let uniq = []
   for(let i = 0 ; i<arr.length ; i++){
    if(!uniq.includes(arr[i])){
      uniq.push(arr[i])
    }else{
     dup.push(arr[i])
    }
   }
   return{uniq , dup}
}

console.log(duplicate());
