// проверка токена на срок годности
export const isTokenExpired = (expiresIn: string) => {
    const now = Date.now() / 1000;
    return parseInt(expiresIn) < now;
}