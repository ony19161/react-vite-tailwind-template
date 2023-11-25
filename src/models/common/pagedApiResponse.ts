import { PagingInfo } from "./pagingInfo";

export interface PagedApiResponse<T = any> {
    data: T[],
    pagingInfo: PagingInfo
}

