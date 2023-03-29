export interface IAuthResponse {
    user: IUser
}

export interface IUser {
    email: string
    username: string
    bio: any
    image: string
    token: string
}
