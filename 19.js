function getPow(value){
    let val = value.split(" ");
    let result = Math.pow(parseInt(val[0]),parseInt(val[1]));
    return result;
}

console.log(getPow("2 3"));