// 오른쪽 myShopping은 내가 구매한 목록을 보여주고 있습니다.
// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze
// "3~4" ⇒ Silver
// 5이상 ⇒ Gold

function myPage(){
    let count = 0;
    let amount = 0;
    let grade = "";
    
    for(let i = 0; i < myShopping.length; i++){
        if(myShopping[i].category ===  "의류"  ){
            count++;
            amount += myShopping[i].price;
        }
    }   
    
    if(count >= 5){
        grade = "Gold";
    }else if(count >= 3){
        grade = "Silver";
    }else{
        grade = "Bronze";
    }
    return `의류를 구매한 횟수는 총 ${count}회, 금액은 ${amount}원이며 등급은 ${grade}입니다.`
}