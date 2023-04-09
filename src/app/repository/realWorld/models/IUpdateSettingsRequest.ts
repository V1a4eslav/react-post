export interface IUpdateSettingsRequest {
    user: IUser
}

interface IUser {
    email: string
    username: string
    bio: any
    image: string
    token: string
    password: string
}
