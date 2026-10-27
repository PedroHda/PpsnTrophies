import type{
    ApiErrorCode,
    ApiResponse,
} from "../types/api";

export function createSuccessResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data,
        error: null,
    };
}

export function createErrorResponse<T>(code:ApiErrorCode, message: string): ApiResponse<never> {
    return {
        success: false,
        data: null,
        error: {
            code,
            message,
        },
    };
}