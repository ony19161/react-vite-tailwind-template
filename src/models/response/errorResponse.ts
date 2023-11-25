export interface ErrorBody {
    code: number,
    msg: string
}

export interface ErrorResponse<T = any> {
    error: T;
}