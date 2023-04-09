export interface ICommentResponse {
    comments: Comment[]
}

export interface Comment {
    id: number
    createdAt: string
    updatedAt: string
    body: string
    author: Author
}

export interface Author {
    username: string
    bio: any
    image: string
    following: boolean
}