export type ApiErrorCode = | "INVALID_REQUEST" | "NOT_FOUND" | "INTERNAL_ERROR" | "UNAUTHORIZED" | "PSN_UNAUTHORIZED" | "INTERNAL_ERROR";

export interface ApiError{
    code: ApiErrorCode;
    message: string;
}

export type ApiResponse<T> = |{
    success: true;
    data: T;
    error: null;
} | {
    success: false;
    data: null;
    error: ApiError;
}