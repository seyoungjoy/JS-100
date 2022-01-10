//2 배열의 내장함수
//splice 특정 위치에 있는 요소들을 지우면서
//거기에 추가도 할 수 있다.

var arr = [200,100,300];
arr.splice(2,0,10000);
console.log(arr);
