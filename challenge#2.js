function deretKaskus(n) {
    let resultArray = new Array(n);
    for (let i=0;i<n;i++) {
        let result = (i + 1) * 3;
        if ((result % 5 === 0) && (result % 6 === 0)) {
            resultArray[i] = "KASKUS";
        } else {
            if (result % 5 === 0) {
               resultArray[i] = "KAS";
            } else if (result % 6 === 0) {
               resultArray[i] = "KUS";
            } else {
               resultArray[i] = result;
            }
        }
    }
    return resultArray;
}

console.log(deretKaskus(10));