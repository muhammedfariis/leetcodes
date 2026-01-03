
var lengthOfLastWord = function(s = "hello world farisv  dfsdfd") {
    let word;
    let word2;
    let output = 0
    for(let i = 0 ; i<s.length ; i++){
        word = s.trim().split(" ")
    }
    for(let k = 0 ; k<word.length ; k++){
         
         word2 = word[k]
    }
    output = word2.length
    
   
return output
    
};

lengthOfLastWord()