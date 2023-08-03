function weirdMultiply(sentence){
    if (sentence < 10){
        return sentence;
    }
    let result = 1;
    while(sentence > 0){
        const digit = sentence % 10;
        result *= digit;
        sentence = Math.floor(sentence /10);
    }
    return weirdMultiply(result);
}

console.log (weirdMultiply(39));
console.log (weirdMultiply(999));
console.log (weirdMultiply(3));