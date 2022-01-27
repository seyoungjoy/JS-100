function getRemainder(value){

    let val = value.split(" ");
    let result = parseInt(val[0])/parseInt(val[1]);
    let rest = parseInt(val[0])%parseInt(val[1]);
    return `몫은 ${result}, 나머지는 ${rest}`;
}

console.log(getRemainder("10 3"));