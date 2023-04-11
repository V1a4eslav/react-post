export interface IArticleFavoritedResponse{
    article: Article
}

export interface Article {
    id: number
    slug: string
    title: string
    description: string
    body: string
    createdAt: string
    updatedAt: string
    authorId: number
    tagList: string[]
    author: Author
    favoritedBy: FavoritedBy[]
    favorited: boolean
    favoritesCount: number
}

export interface Author {
    username: string
    bio: any
    image: string
    following: boolean
}

export interface FavoritedBy {
    id: number
    email: string
    username: string
    password: string
    image: string
    bio?: string
    demo: boolean
}
