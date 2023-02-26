import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { companyReducer, deleteCoupon } from "../../../../Redux/CompanyAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./DeleteCoupon.css";

function DeleteCoupon(): JSX.Element {


    const navigate=useNavigate();

    const params=useParams();
    const id=+(params.id || 0)
    const[couponId,setCouponId]=useState<number>(id);

    
    const no=()=>{
        navigate('/couponsListTab');
    }

      



    const yes=()=>{
        web.deleteCoupon(id)
        .then((res)=>{
            navigate('/CouponsListTab')
            store.dispatch(deleteCoupon(id))
            


        })
        .catch((err)=>{

            notify.error(err.message);
            

        })

       
    }




 
 
 
    return (
        <div className="DeleteCoupon">
            <h1>DELETE COUPON</h1>
            <h2>are you sure you want do delete coupon {couponId} ?</h2>
            <span>
            <button onClick={yes}>YES</button>

            <button onClick={no}>NO</button>

            </span>
        </div>
    );
}

export default DeleteCoupon;
