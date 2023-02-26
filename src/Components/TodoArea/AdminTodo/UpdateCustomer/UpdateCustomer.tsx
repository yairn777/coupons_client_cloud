import "./UpdateCustomer.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { CustomerModel } from "../../../../Models/CustomerModel";
import store from "../../../../Redux/store";
import web from "../../../Services/WebApi";
import { updateCustomerAction } from "../../../../Redux/AdminAppState";
import notify from "../../../Services/Notification";


function UpdateCustomer(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const customerId = +(params.id || 0);

    const [id, setId] = useState<number>(customerId);
    const[customer,setCustomer]=useState<CustomerModel>(store.getState().adminReducer.customer.filter(co=>co.id===id)[0])
    console.log(customer)
    // const[origin,setOrigin]=useState<CustomerModel>({'id':customer.id,'firstName':customer.firstName,'lastName':customer.lastName,'email':customer.email,'password':customer.password})


    
    const schema = yup.object().shape({
        firstName:
            yup.string()
                .required("first name is required"),
        lastName:
            yup.string()
            .required('last name is required'),
        email:
            yup.string()
            .email(),
        password:
            yup.string()
               .max(8,'cant be more then 8 chars')
    });
            

    let defaultValuesObj={...customer}

     const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
            = useForm<CustomerModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });
    
            const { dirtyFields } = useFormState({ control });

            const custUpdate= async(customer:CustomerModel)=>{
                web.updateCustomer(id,customer)
                .then((res)=>{
                    setCustomer(res.data)
                    store.dispatch(updateCustomerAction(id,customer))
                    navigate('/customersList')

                })
                .catch((err)=>{
                    notify.error(err.message)

                })


            }
         
            
      

 


    return (
        <div className="UpdateCustomer flex-cil-top-center">

                    <h1>UPDATE CUSTOMER</h1>
            <form onSubmit={handleSubmit(custUpdate)} className="flex-cil-top-center">
                <label htmlFor="firstName">First Name</label>
                <input {...register('firstName')} type='text' placeholder="first name" id="firstName"/>
                <span>{errors.firstName?.message}</span>

                <label htmlFor="lastName">First Name</label>
                <input {...register('lastName')} type='text' placeholder="last name" id="lastName"/>
                <span>{errors.lastName?.message}</span>

                <label htmlFor="email">Email</label>
                <input {...register('email')} type='email' placeholder="Email" id="email"/>
                <span>{errors.email?.message}</span>

                <label htmlFor="password">Password</label>
                <input {...register('password')} type='password' placeholder="password" id="password"/>
                <span>{errors.password?.message}</span>
                <br/>

                <button>Update</button>
                
             </form>
			
        </div>
    );
}

export default UpdateCustomer;
