let i = 0;
let array = [1, 32, 45, 56, 11, 88, 34]
let output;

while(true) {
    if (array[i] % 2 ==0) {
        output = array[i];
        break;
    }

    i = i + 1;

}

console.log(`처음 발견한 짝수는 ${output} 입니다.`)