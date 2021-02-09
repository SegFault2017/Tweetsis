import { ThrowStatement } from "typescript";

interface ITweet{
    text: string,
    id: string,
    createdTime:Date
}

interface IUser{
    name: string
    profile_name: string
    url: string,
}
export interface ITwitterResponse {
    tweet: ITweet,
    user: IUser,
    
}