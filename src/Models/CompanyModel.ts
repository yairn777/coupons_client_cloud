import { number } from "yup";

export class CompanyModel{

    public id?:number;
    public name?:string;
    public email?:string;
    public password?:string;


    public constructor(id?:number,name?:string,email?:string,password?:string){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password
    }
}

    
export class CompanyResModel{


    public name?:string;
    public email?:string;
    public password?:string;


    public constructor(name?:string,email?:string,password?:string){
        this.name=name;
        this.email=email;
        this.password=password
    }




}

export enum picture{
    pic1="https://images.unsplash.com/photo-1630418886128-458aea8716d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    pic2= "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
}