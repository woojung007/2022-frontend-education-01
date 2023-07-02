function solution(N, stages) {
    // 모든 스테이지의 번호를 오름차순으로 정렬
    stages.sort((a,b)=> a-b);
    let allUsers = stages.length;
      const answer = new Array(N)
                    .fill(1)
                    .map( (num,i) =>{
                      const stage = num + i;
                      const arr = stages.slice(
                      stages.indexOf(stage),
                      stages.lastIndexOf(stage) + 1
                        );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;
    return {stage, fail}
    }).sort((a,b) =>{
      return b.fail - a.fail
    }).map(el => el.stage)
    return answer
  }
  
  solution(5,[2, 1, 2, 6, 2, 4, 3, 3])