function solution(a, b) {
    var answer = 0;
    console.log(a,b)
    if(a===b){
        return a 
    } else{
        //최소값 (반복문을 실행할 때 설정되는 초기값 : a와 b 중 작은 값이 들어온다)
        // const min = a > b ? b : a; 
        const min = Math.min(a,b);
        console.log(min)
        
        //최대값( 반복문이 종료되는 조건을 설정 : a와 b중 큰 값이 들어온다)
        // const max = a > b ? a : b;
        const max = Math.max(a,b)
        console.log(min, max)
        for(let i = min; i <= max; i++){
            answer += i 
        }
    
    }
    return answer;
}


//reduce

function solution(a, b) {
    if(a === b ){
     return a;
 }
 const min = Math.min(a,b);
 const max= Math.max(a,b);
 
 const answer = new Array((max - min) + 1)
                     .fill(1)
                     .reduce((acc,cur,i) => {
                         const num = min + i;
                         return acc + num
                     },0)
 return answer;
}