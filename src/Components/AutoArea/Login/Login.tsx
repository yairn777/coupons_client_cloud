import "./Login.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CredentialsModel, LoginModel } from "../../../Models/LoginModels";
import web from "../../Services/WebApi";
import store from "../../../Redux/store";
import { loginAction } from "../../../Redux/AutoRedux";
import notify from "../../Services/Notification";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CompanyModel } from "../../../Models/CompanyModel";
import { companyListAction } from "../../../Redux/AdminAppState";
import { ClientType } from "../../../Models/ClientType";





function Login(): JSX.Element {

    const nevigate=useNavigate();
    // const[companies,setCompanies]=useState<CompanyModel[]>(store.getState().adminReducer.company)
    const[clienyType,setClientType]=useState<ClientType>()


    const schema = yup.object().shape({

    email:
            yup.string()
                .email('Invalid Email Pattern'),
        
    password:
        yup.string()
        .min(3,'must be more 3 char')
        .max(8,'must be less 8 char')
        .required('password is required'),

    clientType:
        yup.string()

     })



    
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });

    
const loginUser = async(model:LoginModel)=>{
    const credentials= new CredentialsModel();
    credentials.email=model.email;
    credentials.password=model.password;
    credentials.clientType=model.clientType
    console.log("+++++=====+++++====++++==="+JSON.stringify(credentials.clientType))

    switch(credentials.clientType){
       
       
    case "ADMINISTRATOR":
    web.Adminlogin(credentials)
    .then((res)=>{
        notify.success('login successfuly')
        store.dispatch(loginAction(res.data))
        console.log(res.data)
            nevigate('/companiesList')
    })
    .catch((err)=>{
        notify.error(err.message)

    })
    break
   
    case 'COMPANY' :
    web.Companylogin(credentials)
    .then((res)=>{
        notify.success('login successfuly')
        store.dispatch(loginAction(res.data))
        
        nevigate("/couponsListTab");
     })
     .catch((err)=>{
        notify.error(err.message)

    })
    break
    
    case 'CUSTOMER':
    web.CustomerLogin(credentials)
    .then((res)=>{
        store.dispatch(loginAction(res.data))
        nevigate("/customerHomePage");
    })
    .catch((err)=>{
        notify.error(err.message)
    })


  }

}


     
    

    
    return (
        <div className="Login flex-cil-top-center">
                    <h1>LOGIN</h1>

            <form onSubmit={handleSubmit(loginUser)}  className='flex-cil-top-center'>
            <label htmlFor="email">Email</label>
            <input{...register("email")} type='text' placeholder="Email" id="Email"></input>
            <span>{errors.email?.message}</span>

            <label htmlFor="password">Password</label>
            <input{...register('password')} type="password" placeholder="insert your password" id="Password"></input>
            <span>{errors.password?.message}</span>


            <label htmlFor="clientType">ClientType</label>
            <select{...register('clientType')} value={clienyType} >
                <option>ADMINISTRATOR</option>
                <option>COMPANY</option>
                <option>CUSTOMER</option>

            </select>


            <br />
           
        
            
            <button>ENTER</button>


          


            </form>

			
        </div>
    );
}

export default Login;
