
let countPrefixes = function(words =["a","b","c","ab","bc" , "a" , "ab"], s = "abc") {

    let count = 0

    for(let i = 0 ; i<words.length ; i++){
       
        let match = 0 

        for(let k = 0 ; k<words[i].length ; k++){
            if(words[i][k]===s[k]){
                match++
            }
        }

        if(match === words[i].length){
            count++
        }
    }
    
    return count
};

console.log(
    countPrefixes()
);





console.log(".................\n\n\n\n");



let countPrefix = function(words =["a","b","c","ab","bc" , "a" , "ab"], s = "abc") {

    let count = 0
   for(let i = 0 ; i<words.length ; i++){
     if(s.startsWith(words[i])){
        count++
     }
   }
    return count
};

console.log(
    countPrefixes()
);


let a = 10