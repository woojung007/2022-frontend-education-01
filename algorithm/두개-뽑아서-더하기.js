// 정수 배열 numbers가 주어집니다. 
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 
// 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.



function solution(numbers) {
    const answer = [];

    //첫번째 반복문에서 가져오는 숫자는 첫번째 숫자로 기준을 잡는다.
    for(let i = 0 ; i < numbers.length; i++){
    //두번째 반복문에서는 두번재 숫자로 기준을 잡는다.
        for(let l = i + 1; l< numbers.length; l++){
            const sum = numbers[i] + numbers[l];
            if(answer.includes(sum) === false){
                answer.push(sum);
            }
        }
    }
    return answer.sort((a,b)=> (a-b))

}


//spread (전개구분 연산자)

const arr2 = [1,2,3];
const arr3 = [...arr2];





//Set
// 1. 고유한 데이터만 받아올 수 있다. (중복되지 않는 데이터)
// 2. 겉은 배열 형태이지만, 타입은 객체형태

//new
// 1. 뒤에 들어오는 데이터를 새로운 객체형태로 리턴

const arr = new Set();

// Array.isArray() 사용 가능

arr.add(1);
arr.forEach(el => {
    console.log(el)
})
arr.has(1);
arr.delete(1);
arr.clear();


//배열로 만들기
// 1. Array.from
Array.from(arr);

// 2. spread
const answer = [...arr];
answer;
Array.isArray(answer)


function solution(numbers){
    const answer = new Set();
   //첫번째 반복문에서 가져오는 숫자는 첫번째 숫자로 기준을 잡는다.
    for(let i = 0 ; i < numbers.length; i++){
    //두번째 반복문에서는 두번재 숫자로 기준을 잡는다.
        for(let l = i + 1; l< numbers.length; l++){
            const sum = numbers[i] + numbers[l];
                answer.add(sum);
        }
    }
    return Array.from(answer).sort((a,b)=> (a-b))
    //return [...answer].sort((a,b)=>(a-b))

}




//forEach 사용

function solution(numbers){

    const answer = new Set();

    numbers.forEach((num1, i) => {
        numbers.slice( i + 1 ).forEach(num2 => {
            const sum = num1 + num2;

            answer.add(sum);
        })
    })
    return [...answer].sort((a,b) => a - b );
}