function getMultiple(n){
    if(n%3 === 0){
        return "짝";
    } else{
        return n;
    }
}

let result = getMultiple(6);

console.log(result);