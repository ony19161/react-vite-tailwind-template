import { autorun, makeAutoObservable, reaction } from "mobx";
import { JsonPayload } from "../models/modelType/jsonPlayLoad";



export default class CommonStore {
    token: string | null = window.sessionStorage.getItem("jwt_token");
    isLoading = false;
	pageIndex: number = 1;
	pageSize: number = 10;
	totalNumberOfRows: number = 0;
	userRequestContent: [] = [];
	jsonPlayLoad: JsonPayload = {
		Id: "",
		UserId: 0,
		Username: "",
		UserRole: "",
		UserRoles: [],
		sub: "",
		email: "",
		UserDisplayName: "",
		Designation: ""
	};	
	isFetchingData: boolean = false;

    constructor() {
		makeAutoObservable(this);

		// -> The following reaction does not
		// get called when the store first loaded
		// -> It only gets called when there is
		// a value change token string
		reaction(
			() => this.token,
			(token) => {
				if (token) {
					window.sessionStorage.setItem("jwt_token", token);
					this.parseToken();
				     
				} else {
					window.sessionStorage.removeItem("jwt_token");
				}
			}
		);

		autorun(() => {
			console.log('Initial run');
			if (window.sessionStorage.getItem("jwt_token") != null) {
				this.parseToken();
			}
		});

	}

    parseToken  = ()=>{
		
		if(this.token==null){
			return null
		}
	
		let base64Url = this.token.split('.')[1];
		let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		let tmpJsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
	
		const tmpJson: JsonPayload = JSON.parse(tmpJsonPayload) as JsonPayload;
		tmpJson.UserRoles = tmpJson.UserRole.split(',');
		this.jsonPlayLoad = Object.assign({},tmpJson );
		//console.log(this.jsonPlayLoad)
	}

    setToken = (token: string | null) => {
		this.token = token;
	};

    setIsLoading = (isLoading: boolean) => {
        this.isLoading = isLoading;
    }

	getIsLoading = () => {
		return this.isLoading;
	}

	setIsFetchingData = (value: boolean) => {
		this.isFetchingData = value; 
	}

}