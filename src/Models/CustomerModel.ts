export class CustomerModel{
    id?:number;
    firstName?:string;
    lastName:string;
    email?:string;
    password?:string


   public constructor(id?:number,firstName?:string,lastName?:string,email?:string,password?:string){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    

   }
}
export class CustomerResModel{
   
    firstName?:string;
    lastName:string;
    email?:string;
    password?:string


   public constructor(firstName?:string,lastName?:string,email?:string,password?:string){

    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.password=password;
    

   }
}