import { CompanyModel, CompanyResModel } from "../../../../Models/CompanyModel";
import "./CreateCompany.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import web from "../../../Services/WebApi";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import { createCompanyAction } from "../../../../Redux/AdminAppState";
import { useNavigate } from "react-router-dom";


// interface CreateCompanyProps{
//     company:CompanyModel;
// }




function CreateCompany(): JSX.Element {


    const[comapnies,setCompanies]=useState<CompanyModel[]>(store.getState().adminReducer.company)

    const navigate=useNavigate();



    const schema =yup.object().shape({

    name:
            yup.string()
            .min(2,'must be more 2 char'),  
    
    email:
        yup.string().email('Invalid Email Pattern')
        .required("Email is required"),
    
    password:
            yup.string()
            .required("Password is Required"),
    
    
    })


       const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
          useForm<CompanyModel>({ mode: "all", resolver: yupResolver(schema) });

        


          const create=(company:CompanyResModel)=>{
            web.craeteCompany(company)
            .then((res)=>{
                setCompanies(res.data)
                store.dispatch(createCompanyAction(company))
                console.log(comapnies)
                navigate('/companiesList');

                

            })
            .catch((err)=>{
                notify.error(err.message)
            })


          }
    
    
    return (
        <div className="CreateCompany flex-cil-top-center">
            <h1>CTRAETE COMPANY</h1>
            <form  className="flex-cil-top-center" onSubmit={handleSubmit(create)}>
                <label htmlFor="name">Company name</label>
                <input {...register('name')}type="text" placeholder="comapnyName" id="companyName"/>
                <span>{errors.name?.message}</span>

                <label htmlFor="email">Email</label>
                <input {...register('email')}type="email" placeholder="email" id="email"/>
                <span>{errors.email?.message}</span>

                <label htmlFor="password">Password</label>
                <input {...register('password')}type="password" placeholder="password" id="password"/>
                <span>{errors.password?.message}</span>
                <br/>
                <button >CREATE</button>



            </form>
            
			
        </div>
    );
}

export default CreateCompany;
