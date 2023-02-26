import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/CouponModel";
import { coupnsListAction } from "../../../Redux/CompanyAppState";
import store from "../../../Redux/store";
import notify from "../../Services/Notification";
import web from "../../Services/WebApi";
import CouponItem from "../CompanyTodo/CouponItem/CouponItem";
import { FaPlus } from "react-icons/fa";

import "./CouponsList.css";
import DemoHomePage2 from "../DemoHomePage2/DemoHomePage2";
import CouponsListTab from "../CompanyTodo/CouponsListTab/CouponsListTab";

function CouponsList(): JSX.Element {

    const[coupns,setCoupons]=useState<CouponModel[]>(store.getState().companyReducer.coupons)

    useEffect(()=>{
            if(store.getState().companyReducer.coupons.length===0){
                web.getAllCoupons()
                .then((res)=>{
                    notify.success('YES YES YES')
                    setCoupons(res.data)
                    console.log(res.data)
                    store.dispatch(coupnsListAction(res.data));
                })
                .catch((err)=>{
                    notify.error(err.message)

                })
    
              
            }

    },[])

    // useEffect(()=>{
    //     return store.subscribe(()=>{
    //         setCoupons(store.getState().companyReducer.coupons)
    //     })
    // },[])

    return (
        <div className="CouponsList">
            <div>
                <h1>COUPONS LIST</h1>
                <Link className="link" to="/addCoupon"><FaPlus/></Link>
                {coupns.map(c=> <  CouponsListTab key={c.id}/>)}
            </div>
			
        </div>
    );
}

export default CouponsList;
