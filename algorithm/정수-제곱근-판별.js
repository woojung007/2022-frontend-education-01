function solution(n) {
    let answer =-1;
    
    for(let i = 1; i * i <= n; i++){
        if( i * i === n){
            //제곱근을 찾은 경우
             answer = i + 1;
            return answer * answer;
        }
    }
    //제곱근을 찾지 못한 경우
    return answer;
}




    // //거듭제곱 연산자
    // 2 ** 5

    // //메서드
    // Math.pow( 2, 5)


//while 문 사용
function solution(n){
    let answer = 1;     //최초식
    while(answer ** 2 < n){           //조건식
        answer++;      //증감식
    }
    return answer ** 2 === n
        ?(answer + 1) ** 2
        : -1;
}



//method


//제곱근 판별해주는 메서드
Math.sqrt(num);

//정수판별
Number.isInteger( 1.1 )


function solution(n){
    let sqrt = Math.sqrt(n);
    console.log(sqrt, n)
    if(Number.isInteger(sqrt)){
        //제곱근이 맞는 경우 (= 정수인 경우) true 반환
        //sqrt++;
        return (sqrt + 1) ** 2;
    }else{
        //제곱근이 아닌 경우( = 정수가 아닌 경우) false 반환
        return -1;
    }

}



function solution(n){
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
 }