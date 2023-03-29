export interface Error2 {
    message: string;
    domain: string;
    reason: string;
}

export interface Error {
    code: number;
    message: string;
    errors: Error2[];
}

export interface Data {
    error: Error;
}

export interface IErrorResponse {
    status: number;
    data: Data;
}