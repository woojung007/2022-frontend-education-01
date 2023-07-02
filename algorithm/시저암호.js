//

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function solution(s, n) {
    let answer = '';
    
  for(let i = 0; i < s.length; i++){
    console.log(s[i])
    if(s[i] === " "){
      answer += s[i] // "  "
    }else{
      let idx = alphabet.indexOf(s[i])
      const word = idx > 25 
      ? alphabet.substring(26)
      // 대문자에 해당하는 문자열을 잘라온다
      : alphabet.substring(0,26)
      // 소문자에 해당하는 문자열을 잘라온다
      
      idx = word.indexOf(s[i]) + n
      
      if(word[idx] === undefined){
        idx -= 26;
        // 맨 앞으로 돌아간다 
      }
      answer += word[idx]
    }
  }
    return answer;
}


// 대소문자 구별해서 시작

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
    let answer = '';
    
  for(let i = 0; i < s.length; i++){
    if(s[i] === " "){
      answer += s[i] // "  "
    }
    else{
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n
      
      // z일때 밀어줄 수 없으니까 빼주기
      if(word[idx] === undefined){
        idx -= 26
      }
      answer += word[idx]
    }
  }
    return answer;
}


// reduce 사용

const lower1 = 'abcdefghijklmnopqrstuvwxyz';
const upper1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s,n){
  const answer = s.split("")
  				  .reduce((acc,cur)=>{
                  console.log(acc,cur)
                  const word = lower.includes(cur) ? lower : upper;
                  let idx = word.indexOf(cur) + n
                  
                  // if(word[idx] === undefined){ 
                  // }
                  
                  if(idx >= 26){
                    idx -= 26
                  }
                  return acc + (
                  cur === " " ? " " : word[idx])
                },"")
  return answer
}

solution("z", 1)


// 유니코드 사용
function solution(s, n) {
  let answer = "";
  for( let i = 0; i < s.length; i++ ) {
      if( s[i] === " " ) {
          answer += " ";
          continue;
      }
      
      let index = s[i].charCodeAt() + n;
      if( index > 122 || (index > 90 && (index - n) < 97) ) {
          // 소문자 z(122) 이상을 넘어가거나
          // 대문자 Z(90) 를 넘어가면서
          // 기존의 index 의 값이 소문자일 경우
          index = index - 26;
      }
      answer += String.fromCharCode( index );
  }
  return answer;
}