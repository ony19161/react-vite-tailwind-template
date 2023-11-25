import { makeAutoObservable, runInAction } from "mobx";
import { LoginUser } from "../models/request/loginUser";
import apiManager from "../services/apiManager";
import { store } from "./store";
import { loginResponse } from "../models/response/loginResponse";



export default class AuthStore {

    loginUser: LoginUser = {
		username: "",
		password: ""
	};

    constructor() {
		makeAutoObservable(this);
	}


    login = async (loginUser: LoginUser) => {
		try {
			//const response = await apiManager.authService.Login(loginUser);	
			const response: loginResponse = {
				apiToken: "sample_demo_token",
				userInfo: {
					name: "Demo user",
					designation: "Demo designation"
				}
			};
			
			runInAction(() => {
				store.commonStore.setToken(response.apiToken);
			});
			
			return response;
		} catch (error: any) {
			return error;
		}
	};

    logout = () => {
		console.log("logout clicked");
		store.commonStore.setToken(null);
		window.sessionStorage.removeItem("jwt_token");
	};

}