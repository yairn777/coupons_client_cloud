import { ClientType } from './ClientType';

export class LoginModel{

public email?:string;
public password?:string;
public clientType?:ClientType;


public constructor (email?:string,password?:string,clientType?:ClientType){
    this.email=email;
    this.password=password;
    this.clientType=clientType;

}


}




export class CredentialsModel{

    public email?: string;
    public password?: string;
    public clientType?:ClientType;



    public constructor(email?:string,password?:string,clientType?:ClientType){
        
        this.email=email;
        this.password=password;
        this.clientType=clientType;

    }

    }

    export class UserModel{

        public token?: string;
        public email?: string;
        public clientType?:string;
    
    
        public constructor(token?:string,email?:string,clientType?:string){
            this.token=token;
            this.email=email;
            this.clientType=clientType;
        }

    
    }