import { useEffect, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { CouponModel, CouponResModel } from "../../../../Models/CouponModel";
import { allCoupons } from "../../../../Redux/AdminAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import CouponsListTab from "../CouponsListTab/CouponsListTab";
import DemoHomePage2 from "../../DemoHomePage2/DemoHomePage2";
import "./UpdateCoupon.css";
import { updateCouponAction } from "../../../../Redux/CompanyAppState";



function UpdateCoupon(): JSX.Element {


    
    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);
    console.log(couponId);


    const [id, setId] = useState<number>(couponId);
    const[coupon,setCoupon]=useState<CouponModel>(store.getState().companyReducer.coupons.filter(co=>co.id===couponId)[0])
    console.log(coupon)
    const[origin,setOrigin]=useState<CouponModel>({'id':coupon.id,'category':coupon.category,'amount':coupon.amount,
                                                        'description':coupon.description,'image':coupon.image,'price':coupon.price,
                                                                'startDate':coupon.startDate,'endDate':coupon.endDate,'title':coupon.title})
                                                             
    console.log(coupon.id)


        const schema=yup.object().shape({

            category:
                yup.string(),
           
                amount:
            yup.number().min(0,'must be more then 0'),
           
            discreption:
            yup.string()
            .length(150,'you cant right more then 150 chars'),
            
            price:
            yup.number().min(0,'must be more then 0'),
        
        
            startDate:
            yup.date()
            .min(new Date(), 'Inavalid Date')
            .default(new Date())
            .typeError("You must specify a due date")
            .required("due date is required")
            .nullable().default(() => new Date()),
        
        
            
            endDate:
            yup.date()
            .default(new Date())
            .typeError("You must specify a due date")
            .required("due date is required")
            .nullable().default(() => new Date()),
        
        
            tytle:
            yup.string()
            .length(18,'cant be more then 18 chars'),
        
            image:
            yup.string()
        
        
        
         })

         let defaultValuesObj={...origin}

          const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
                 = useForm<CouponResModel>({ defaultValues: defaultValuesObj, mode: "all", resolver: yupResolver(schema) });

                 const { dirtyFields } = useFormState({ control })
        
                 const updateCoupon=async(coupon:CouponResModel)=>{
                    web.updateCoupon(coupon)
                    .then((res)=>{
                        setCoupon(res.data)
                        console.log(coupon)
                   
                        store.dispatch(updateCouponAction(couponId,res.data))
                        navigate('/couponsListTab')
                    })
                    .catch((err)=>{
                        notify.error(err.message)
                    })



                 }
       
   

    return (
        <div className="UpdateCoupon flex-cil-top-center">
            <h1>UPDATE COUPON</h1>

        <form onSubmit={handleSubmit(updateCoupon)} className="flex-cil-top-center">



        <label htmlFor="category">Category</label>
                <select{...register("category")} >
                    <option value='FOOD'>FOOD</option>
                    <option value='SPORT'>SPORT</option>
                    <option value='VACATION'>VACATION</option>
                    <option value='FURNITURE'>FURNITURE</option>
                    <option value='ELECTRICITY'>ELECTRICITY</option>
                </select> 

             
        <label htmlFor="title">Title</label>
                <input{...register("title")} type='text' placeholder="title" id="Title"></input>
                <span>{errors.title?.message}</span>
                
                
                <label htmlFor="description">Description</label>
                 <input {...register("description")}type='text' placeholder="description" id="description"></input>
                 <span>{errors.description?.message}</span>
                
                
                <label htmlFor="amount">Amount</label>
                 <input {...register("amount")}type='number' placeholder="Enter a number" id="amount" ></input>
                 <span>{errors.amount?.message}</span>

                 <label htmlFor="price">Price</label>
                 <input {...register("price")}type='number' placeholder="price" id="price"></input>
                 <span>{errors.price?.message}</span>

                 
                 <label htmlFor="startDate">Start Date</label>
                 <input {...register("startDate")} type='date' placeholder="startDate" id="startDate"></input>
                 <span>{errors.startDate?.message}</span>
                
                <label htmlFor="endtDate">End Date</label>
                <input {...register("endDate")} type='date' placeholder="endtDate" id="endtDate"></input>
                <span>{errors.endDate?.message}</span>
                 <br/>

                 <button>Update</button>


        </form>
            
            
           
           
			
        </div>
    );
}


export default UpdateCoupon;

