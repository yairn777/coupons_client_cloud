import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { combineReducers } from "redux";
import { CouponModel } from "../../../Models/CouponModel";
import { UserModel } from "../../../Models/LoginModels";
import { logoutAction } from "../../../Redux/AutoRedux";
import { clearCoupons, CompanyAppState, companyReducer } from "../../../Redux/CompanyAppState";
import { clear, CustomerAppState,customerReducer } from "../../../Redux/CustomerAppState";

import store from "../../../Redux/store";
import web from "../../Services/WebApi";
import "./Logout.css";

function Logout(): JSX.Element {

    const navigate=useNavigate();
    const[user,setUser]=useState<UserModel>(store.getState().userReduser.user)
    // const[coupons,setCoupons]=useState<CouponModel[]>(store.getState().customerReducer.coupons)
    const temoUser=new UserModel;


    useEffect(()=>{
        store.dispatch(logoutAction());
        store.dispatch(clearCoupons());
        store.dispatch(clear())
        
        setUser(temoUser)

         navigate('/homePage');
       
       
    },[])

    return (
        <div className="Logout">
			
        </div>
    );
}

export default Logout;


