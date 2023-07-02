import styled from '@emotion/styled'

export const ListWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
padding-top: 50px;
margin-left: 20px;


`

export const Row = styled.div`
display: flex;
border-bottom: 1px solid #BDBDBD;
height: 7%;
color: #4F4F4F;
font-weight: 200;
font-size: 16px;
line-height: 50px;
background: #FFFFFF;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
border-radius: 10px;
margin-bottom: 20px;

cursor: pointer;
:hover{
    border: 1px solid #bdbdbd;
}

`

export const Column = styled.div`
width: 85%;
white-space: nowrap; 
overflow: hidden; 
text-overflow: ellipsis; 
padding-left: 20px;
font-family: 'SUIT';
font-weight: 700;
font-size: 14px;
line-height: 50px;
text-align: left;
padding-left: 40px;
`

export const ColumnSmall = styled.div`
width: 15%;
font-family: 'SUIT';
font-weight: 400;
font-size: 14px;
line-height: 50px;
padding-right: 20px;

text-align: right;
text-transform: uppercase;

color: #999999;
`





