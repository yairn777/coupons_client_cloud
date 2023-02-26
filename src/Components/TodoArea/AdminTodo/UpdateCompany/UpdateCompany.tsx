import "./UpdateCompany.css";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { CompanyModel, CompanyResModel } from "../../../../Models/CompanyModel";
import store from "../../../../Redux/store";
import web from "../../../Services/WebApi";
import { companyUpdateAction } from "../../../../Redux/AdminAppState";
import notify from "../../../Services/Notification";


function UpdateCompany(): JSX.Element {

    const navigate = useNavigate();
    const params = useParams();
    const companyId = +(params.id || 0);

    const [id, setId] = useState<number>(companyId);
    const[company,setCompany]=useState<CompanyModel>(store.getState().adminReducer.company.filter(co=>co.id===id)[0])
    console.log(company)
    const[origin,setOrigin]=useState<CompanyModel>({'id':company.id,'name':company.name,'email':company.email,'password':company.password})


    const schema = yup.object().shape({
        name:
            yup.string()
                .required("Name is required"),
        email:
            yup.string()
            .email()
            .required('Email must be requred'),
            
       password:
            yup.string()
               .max(8,'cant be more then 8 chars')

    });

    let defaultValuesObj={...origin}

     const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
            = useForm<CompanyModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

            const { dirtyFields } = useFormState({ control });


            const compUpdte = async (company:CompanyModel)=>{
                web.updateComany(id,company)
                .then((res)=>{
                    setCompany(res.data)
                    store.dispatch(companyUpdateAction(id,res.data))
                    navigate('/companiesList')
                 })
                .catch((err)=>{
                    notify.error(err.message)
                    navigate('/homePage')

                })

            }



   
   
        return (
        <div className="UpdateCompany flex-cil-top-center ">
            <h1>UPDATE COMPANY</h1>
            <form onSubmit={handleSubmit(compUpdte)} className="flex-cil-top-center">
                <label htmlFor="name">Name</label>
                <input {...register('name')} type='text' placeholder="company name" id="name"/>
                <span>{errors.name?.message}</span>

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

export default UpdateCompany;
