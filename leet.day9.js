let arrayStringsAreEqual = function(word1 = ["a" , "bc"], word2 =[ "a" , "bc"]) {
    return word1.join("")===word2.join("")? true : false

};

console.log(arrayStringsAreEqual());


