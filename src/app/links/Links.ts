// обьект где гранятся все ссылки,куда нужно будет делать запросы
// http://adminshop.pp.ua/api/docs

export interface ILinks {
   authorization: string
   registration: string
}

export const links: ILinks = {
   authorization: 'http://adminshop.pp.ua/auth/login',
   registration: 'http://adminshop.pp.ua/auth/registration'
}