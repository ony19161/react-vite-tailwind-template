import { userInfo } from "./userInfo";

export interface loginResponse {
    apiToken: string;
    userInfo: userInfo
}