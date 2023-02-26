import "./AddCoupon.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import internal from "stream";
import { Category, CouponModel, CouponResModel } from "../../../../Models/CouponModel";
import { start } from "repl";
import web from "../../../Services/WebApi";
import store from "../../../../Redux/store";
import { addCoupon, insertImage } from "../../../../Redux/CompanyAppState";
import notify from "../../../Services/Notification";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { picture } from "../../../../Models/CompanyModel";
import { Blob } from 'buffer'



function AddCoupon(): JSX.Element {
   


   

    const navigate=useNavigate();
    // const[list,setList]=useState<CouponModel[]>(store.getState().companyReducer.coupons)
    // console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTT'+list);


    const[image,setImage]=useState("");
    
    const[preview,setPreview]=useState<string>();
    const[previewRed,setPreviewRed]=useState<any[]>(store.getState().companyReducer.images)
   

   

   
    
    



    
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


    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
       useForm<CouponResModel>({ mode: "all", resolver: yupResolver(schema) });


    //    const doIt=(args:SyntheticEvent)=>{
    //     const val=(args.target as HTMLInputElement).files[0];
    //     // setImage(val);
    //     store.dispatch(insertImage(val))
        
    // }

   
   
   
    // useEffect(()=>{
    //     if(image){
    //         const reader=new FileReader();
    //         reader.onloadend=()=>{
    //             setPreview(reader.result as string)
    //             store.dispatch(insertImage(reader.result))
    //         }
    //         reader.readAsDataURL(image);
    //     }else{
    //         setPreview(null)
    //     }

    // },[])


    




       const create=async(coupon:CouponModel)=>{
            console.log('THIS IS MY DATA 1: '+store.getState().companyReducer.coupons)
            
           const images=String(coupon.image)
            console.dir("IMAGE PIC: "+images)
            web.createCoupon(coupon)
            .then((res)=>{
                store.dispatch(addCoupon(res.data))
                console.log('THIS IS MY DATA 2: '+res.data)
                console.log('THIS IS MY IMAGE : '+ coupon.image)



                navigate("/CouponsListTab");

            })
            .catch((err)=>{
                notify.error(err.message)


            })

       }
 


   
       


   
   
   
 


            {/* ----OPTION-1---- */}




{/* <label htmlFor="category">Choose a Category:</label>
<select onChange={(e)=>{
    const selectedCategory=e.target.value;
    setCategory(selectedCategory);
}}  >
    <option value='SPORT'>SPORT</option>
    <option value='FOOD'>FOOD</option>
    <option value='VACATION'>VACATION</option>
    <option value='ELECTRICITY'>ELECTRICITY</option>

</select>
{categ} */}


            // const convertToString=(args:SyntheticEvent)=>{
            //     const file=(args.target as HTMLInputElement).value;
            //     const reader=new FileReader();

            //     reader.onload=()=>{
            //         setImage(reader.result.toString());

            //     };
            //    reader.readAsDataURL(file)


            // }
 

                            
    return (
        <div className="Tyuta">
                             
               
                             
               
         <form onSubmit={handleSubmit(create)} className="flex-cil-top-center">    
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

                <label htmlFor="image">End Image</label>
                <input{...register("image")} type="file"id="image" name="image" accept="image/*"></input>
                <span>{errors.image?.message+'909090'}</span> 
                <br/>
                <button >Add</button>

               
                

         
       

                {/* <button disabled={!isValid}>Add</button> */}
                {/* <Button disabled={!isValid} variant="success">Add</Button>{' '} */}

                
                </form>
			
                </div>
            );
        }
        


export default AddCoupon;
