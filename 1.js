//1 배열의 삭제
//다음 배열에서 400,500을 삭제하는 code
let nums = [100, 200, 300, 400, 500]

//내 코드
console.log(nums.splice(3,2));
console.log(nums);

//답안 코드
nums.pop();
nums.pop();
console.log(nums);