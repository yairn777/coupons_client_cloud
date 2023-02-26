import "./CreateCustomer.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { CustomerModel, CustomerResModel } from "../../../../Models/CustomerModel";
import store from "../../../../Redux/store";
import web from "../../../Services/WebApi";
import { useNavigate } from "react-router-dom";
import notify from "../../../Services/Notification";
import { createCustomerAction } from "../../../../Redux/AdminAppState";


function CreateCustomer(): JSX.Element {

    const[cusromer,setCustomer]=useState<CustomerModel[]>(store.getState().adminReducer.customer)
    const navigate=useNavigate();


    const schema =yup.object().shape({

       firstName:
                yup.string()
                .min(2,'must be more 2 char'),  
        lastName:
            yup.string(),
            
         email:
            yup.string().email('Invalid Email Pattern')
            .required("Email is required"),
        
        password:
                yup.string()
                .required("Password is Required"),
        
        
        })

           const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
              useForm<CustomerResModel>({ mode: "all", resolver: yupResolver(schema) });


        const create=(customer:CustomerResModel)=>{
            web.cretaeCustomer(customer)
            .then((res)=>{
                setCustomer(res.data)
                store.dispatch(createCustomerAction(customer))
                navigate('/customersList')
                console.log('ggggggggggggggggggggggggggggggggggggggggggggg')
            })
            .catch((err)=>{
                console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')

                notify.error(err.message)
            })

        }
        


    return (
        <div className="CreateCustomer flex-cil-top-center">
            <h1>CREATE CUSTOMER</h1>
            <form  className="flex-cil-top-center" onSubmit={handleSubmit(create)}>
             
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName')}type="text" placeholder="firstName" id="firstName"/>
                <span>{errors.firstName?.message}</span>

                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName')}type="lastName" placeholder="last Name" id="lastName"/>
                <span>{errors.lastName?.message}</span>

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

export default CreateCustomer;
