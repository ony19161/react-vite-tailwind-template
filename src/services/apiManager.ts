import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import fileDownload from "js-file-download";
import { loginResponse } from "../models/response/loginResponse";
import { LoginUser } from "../models/request/loginUser";
import { ApiResponse } from "../models/response/apiResponse";
import { store } from "../stores/store";
import { PagedApiResponse } from "../models/common/pagedApiResponse";
import { ErrorResponse } from "../models/response/errorResponse";

const sleep = (delay: number) => {
     return new Promise((resolve) => {
         setTimeout(resolve, delay);
    })
 }

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;


const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = store.commonStore.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);
    return Promise.reject(error);
}


axios.interceptors.request.use(onRequest, onRequestError);

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        // console.log(error);
        return await Promise.reject<AxiosResponse<ApiResponse<ErrorResponse>>>(error);
    }
}, (error: AxiosError) => {

    if (error.response) {
        const { data } = error.response; 
        let errorData: any = data;

        switch (error.response.status) {
            case 400:
                toast.error(errorData.Msg);
                break;
            case 401:
                toast.error(errorData.Msg);
                store.authStore.logout();
                break;
            case 404:
                toast.error(errorData.Msg);
                break;
            case 500:
                toast.error(errorData.Msg);
                break;
        }
    }
    

    

    return Promise.reject(error);

})

const responseBody = <T>(response: AxiosResponse<ApiResponse<T>>) => response.data.data;
const pagedResponseBody = <T>(response: AxiosResponse<PagedApiResponse<T>>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<ApiResponse<T>>(url).then(responseBody),
    getPagedList: <T>(url: string) => axios.get<PagedApiResponse<T>>(url).then(pagedResponseBody),
    getFile: (url: string, filename: string) => {
        const config: any = {responseType: 'arraybuffer', headers: {'Content-Type': 'blob'}};
        axios.get(url, config).then((response: any) => fileDownload(new Blob([response.data]), filename));
    },
    post: <T>(url: string, body: {}) => axios.post<ApiResponse<T>>(url, body).then(responseBody),
    postPagedList: <T>(url: string, body: {}) => axios.post<PagedApiResponse<T>>(url, body).then(pagedResponseBody),
    put: <T>(url: string, body: {}) => axios.put<ApiResponse<T>>(url, body).then(responseBody),
    delete: <T>(url: string) => axios.delete<ApiResponse<T>>(url).then(responseBody),
    deleteWithBody: <T>(url: string, body: {}) => axios.delete<ApiResponse<T>>(url, { data: body }).then(responseBody)
} 

const authService = {
    Login: (body: LoginUser) => requests.post<loginResponse>('auth/login', body)
}

const apiManager = {
    authService
}


export default apiManager;
