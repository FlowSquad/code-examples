import { AxiosResponse } from "axios";
import { Configuration } from "../api";
import { BaseAPI } from "../api/base";
import { ApiError } from "../models/Error/ApiError";

interface FailedApiResponse {
    error: ApiError;
    data: undefined;
}

interface SuccessfulApiResponse<T> {
    data: T;
    error: undefined;
}

export type ApiResponse<T> = SuccessfulApiResponse<T> | FailedApiResponse;

export const hasFailed = <T>(response: ApiResponse<T>): response is FailedApiResponse => {
    return response.error !== undefined;
}

export const apiExec = async <API extends BaseAPI, T>(API: new (config: Configuration) => API, execute: (api: API) => Promise<AxiosResponse<T>>): Promise<ApiResponse<T>> => {
    try {
        const config = new Configuration();
        const response = await execute(new API(config));

        if (Math.floor(response.status / 100) === 2) {
            return {
                data: response.data,
                error: undefined
            };
        } else {
            return {
                error: {
                    message: response.statusText,
                    code: response.status
                },
                data: undefined
            };
        }
    } catch (error) {
        return {
            error: {
                message: error.message,
                code: 0
            },
            data: undefined
        };
    }
};
