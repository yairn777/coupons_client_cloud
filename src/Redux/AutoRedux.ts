import { useNavigate } from 'react-router-dom';
import { combineReducers } from 'redux';
import { textChangeRangeIsUnchanged } from "typescript";
import { UserModel } from "../Models/LoginModels";
import { clearCoupons } from './CompanyAppState';
import store from "./store";




export class AuthAppState{
    
    public user: UserModel=new UserModel();

    public constructor(){
        try{
        const storedUser=JSON.parse(localStorage.getItem('user')|| "");
        if(storedUser){
            this.user=storedUser;
        }}
        catch{
            this.user.email='';
        this.user.token='';

        this.user.clientType=''
        // this.user=null;
            
        
        }
    }

}




export enum AuthActionType {
    Register="Register",
    Login="Login",
    Logout="Logout",
}





export interface AuthAction{
    type: AuthActionType;
    payload?: any;
}






export function registerAction():AuthAction{
    return{type:AuthActionType.Register}
}


export function loginAction(user:UserModel):AuthAction{
    return{type:AuthActionType.Login,payload:user};
}


export function logoutAction():AuthAction{
    return{type:AuthActionType.Logout}
}





export function userReducer(currentState: AuthAppState=new AuthAppState(),action:AuthAction): AuthAppState{


    const newState={...currentState}

    switch(action.type){
        case AuthActionType.Register:
            break;

        case AuthActionType.Login:
            newState.user=action.payload;
            localStorage.setItem('user',JSON.stringify(newState.user));
            break

        case AuthActionType.Logout:
            //newState.user.email='';
            newState.user.email='';
            newState.user.token='';
            newState.user.clientType='';
      
            // newState.user=null;
           
           localStorage.removeItem('user');
           
            break;

     



            }
                

    return newState;


}



