let  maximumWealth = function(accounts=[[1,2,3],[3,2,1]]) {
    let maximumWealth = 0
    for(let i = 0 ;i<accounts.length ; i++){
        let sum = 0
        for(let k = 0 ; k<accounts[i].length ; k++){
            sum += accounts[i][k]
        }
        if(maximumWealth<sum){
            maximumWealth = sum
        }
    }
  
    return maximumWealth
};

console.log(maximumWealth());


let mostWordsFound = function(sentences=["alice and bob love leetcode", "i think so too", "this is great thanks very much"]) {
    let maximumNumberOfWord = 0
   for(let i = 0 ; i<sentences.length ; i++){
    let wordCount = sentences[i].split(" ").length
      if(wordCount > maximumNumberOfWord){
        maximumNumberOfWord = wordCount
      }
      
   }
    return maximumNumberOfWord
};

console.log(mostWordsFound());

let kidsWithCandies = function(candies = [2,3,5,1,3], extraCandies = 3) {
   let max = Math.max(...candies)
   let ans = []
   for(let i = 0 ; i<candies.length ; i++){
     let sum = candies[i] + extraCandies
     max<=sum ? candies[i] = true : candies[i] = false
     ans.push(candies[i])
   }
   return ans
}

console.log(kidsWithCandies());
