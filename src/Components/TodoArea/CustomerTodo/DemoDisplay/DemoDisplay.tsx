import "./DemoDisplay.css";
import IMAGES from "../../../../images";
import store from "../../../../Redux/store";
import { useEffect, useState } from "react";
import web from "../../../Services/WebApi";
import DemoHomePage2 from "../../DemoHomePage2/DemoHomePage2";
import notify from "../../../Services/Notification";
import { useNavigate, useParams } from "react-router-dom";
import { purchaseNewCoupon } from "../../../../Redux/CustomerAppState";
import { CouponModel } from "../../../../Models/CouponModel";


interface DemoDisplayProps{

    coup:CouponModel;
}


function DemoDisplay(props:DemoDisplayProps): JSX.Element {

         
    const navigate = useNavigate();
    const params = useParams();
    const couponId = +(params.id || 0);
    console.log(couponId);

    const[coupon,setCoupon]=useState<CouponModel[]>(store.getState().generalReducer.coupons.filter(co=>co.id===couponId))
    const[couponToPuchase,setCouponTuPurchase]=useState<CouponModel[]>(coupon)


    const purchase=()=>{
        web.purchaseCoupon(couponId)
        .then((res)=>{
            store.dispatch(purchaseNewCoupon(couponToPuchase[0]))
           
            console.log(coupon)
            navigate('/customerHomePage')

        })
        .catch((err)=>{
            notify.error(err.message)

        })
    
    }


    return (
        <div className="DemoDisplay ">
            <h1>DISPLAY FILES</h1>

   
    



            {coupon.map(co=><DemoHomePage2  key={co.id}  coupon={co}/>)}
            <div>
                <button onClick={purchase}>
                    BUY
                </button>
            </div>

          
        

                

                
                  

        
           
			
        </div>
    );
}

export default DemoDisplay;
