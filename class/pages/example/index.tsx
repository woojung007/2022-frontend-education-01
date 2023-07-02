export default function HigherOrderFunctionPage(){


const onClickButton = (id: any) => (event:any) => {
    console.log(id)
}


    return(
        <div>
            <button onClick={onClickButton(123)}>버튼이다</button>
        </div>
    )
}