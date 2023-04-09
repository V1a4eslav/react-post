import {IArticleRequest} from "./IArticleRequest";

export interface IUpdateArticlesRequest{
    query:string,
    body:IArticleRequest
}