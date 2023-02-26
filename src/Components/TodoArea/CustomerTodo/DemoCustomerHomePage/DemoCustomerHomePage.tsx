import { useEffect, useState } from "react";
import { CouponModel } from "../../../../Models/CouponModel";
import { customerCoupons } from "../../../../Redux/CustomerAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import CouponsListTab from "../../CompanyTodo/CouponsListTab/CouponsListTab";
import DemoHomePage2 from "../../DemoHomePage2/DemoHomePage2";
import "./DemoCustomerHomePage.css";

function DemoCustomerHomePage(): JSX.Element {

    const[couponsim,setCouponsim]=useState<CouponModel[]>(store.getState().customerReducer.coupons)


useEffect(()=>{
    if(store.getState().customerReducer.coupons.length===0){
        web.customerCoupons()
        .then((res)=>{
            console.log(res.data)
            setCouponsim(res.data)
            store.dispatch(customerCoupons(res.data))
        })
        .catch((err)=>{
            notify.error(err.message)
        })
    }
},[couponsim])


    return (
        <div className="DemoCustomerHomePage flex-cil-top-center">
            <h1>CUSTOMER HOME PAGE</h1>
           <div className="grid-container">


           
         {couponsim.map(c=><DemoHomePage2 coupon={c}/>)}
         </div>
           
			
        </div>
    );
}

export default DemoCustomerHomePage;
