import styled from '@emotion/styled';





export const BodyHTML = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
`

export const BoardWrapper = styled.div`
    width: 764px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    margin-top: 30px;

`

export const DivWrapper = styled.div`
display: flex;
width: 100%;
margin: 20px;
`


export const BigTitle = styled.div`
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    width: 100%;
    padding-bottom: 20px;
    padding-top: 40px;
`
export const HRLine = styled.div`
    width: 100%;
    height: 1px;
    background: #6400FF;
    
`

export const SmallTitle = styled.div`
    font-family: 'SUIT';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 40px;
    width: 15%;
    height: 40px;
    text-align: left;
`

export const TitleInput = styled.input`
    width: 90%;
    height: 40px;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
`

export const Context = styled.textarea`
    width: 604px;
    height: 240px;
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 0;
`


export const HalfInput = styled.input`
    width: 35%;
    height: 40px;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    background: #FFFFFF;
    margin-right: 20px;

`
export const ButtonWrapper = styled.div`
    width: 55%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px 20px;
    padding: 30px;

`

export const BoardBtn = styled.button`
    width: 80px;
    height: 30px;
    margin: 5px;
    font-size: 12px;
    line-height: 20px;

    background: #6400FF;
    border-radius: 30px;
    border: none;
    color: #fff;
`

export const CancelBtn = styled.button`
    width: 80px;
    height: 30px;
    margin: 5px;
    font-size: 12px;
    line-height: 20px;

    background: #999;
    border-radius: 30px;
    border: none;
    color: #fff;
`