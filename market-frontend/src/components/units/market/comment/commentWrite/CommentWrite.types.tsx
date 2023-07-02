import { ChangeEvent } from 'react';


export interface ICommentWrite{
    isEdit:boolean
    data?:any
    setIsEdit?:any
    el?: any
}
export interface ICommentWritePresenter{
    onChangeContents:(event:ChangeEvent<HTMLTextAreaElement>) => void
    onClickCreateQuestion: ()=>void
    onClickUpdateQuestion:()=>void
    isEdit:boolean
    data?:any
    el?:any
    contents?:String
}