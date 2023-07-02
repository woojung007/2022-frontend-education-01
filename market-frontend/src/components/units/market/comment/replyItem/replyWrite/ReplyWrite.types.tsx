import { ChangeEvent, MouseEvent } from 'react';


export interface IReplyWrite{
    isReply:boolean
    data?:any
    setIsReply:any
    replyEl?:any
    el?:any

}
export interface IReplyWritePresenter{
    onChangeContents:(event:ChangeEvent<HTMLTextAreaElement>) => void
    onClickCreateAnswer: (event:MouseEvent<HTMLButtonElement>)=>void
    onClickUpdateAnswer:(event: MouseEvent<HTMLButtonElement>)=>void
    isReply:boolean
    data?:any
    replyEl?: any
    el?:any
    contents?:String

}