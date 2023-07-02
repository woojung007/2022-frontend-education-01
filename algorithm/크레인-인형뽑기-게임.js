function solution(board, moves) {
    let answer = 0;
    const bucket = []
    // 1. 크레인이 이동하는 위치값을 구하는 반복문
    for(let i = 0; i < moves.length; i++){
        console.log(moves[i])
        for(let l = 0; l < board.length; l++){
            console.log(board[l])
          const doll = board[l][moves[i]-1]
          
          // 인형이 있는 칸이 빈칸이 아니라면 
          if(doll !== 0){
            // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다
            board[l][moves[i]-1] = 0
            
            // 바구니에 넣으려고 하는 인형이 바구니의 마지막 데이터(맨 위에 있는 인형)와 동일한지
            if(doll === bucket[bucket.length - 1]){
              answer += 2
              bucket.pop()  // 맨 마지막 인형을 제거
              break;
            }
            bucket.push(doll)
            break;
          }
          console.log(doll, board[l], moves[i], bucket)
        }
    }
    return answer;
}