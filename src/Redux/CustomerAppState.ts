

import { type } from 'os';
import { CouponModel } from './../Models/CouponModel';


export class CustomerAppState{

    public coupons:CouponModel[]=[];
    public num:number;
}


export enum CustomerActionType{

    allCustomerCoupons="allCustomerCoupons",
    purchaseCoupon="purchaseCoupon",
    couponsByCategory="couponsByCategory",
    couponsByPrice="couponsByPrice",
    clear="clear",
    newNumberAction='newNumberAction'
}


export interface CustomerAction{
    type:CustomerActionType;
    payload?:any;
}


export function customerCoupons(coupon:CouponModel[]):CustomerAction{
    return {type:CustomerActionType.allCustomerCoupons,payload:coupon}
}



export function addNewNumber(num:number):CustomerAction{
    return{type:CustomerActionType.newNumberAction,payload:num}
}


export function clear():CustomerAction {
    return { type:CustomerActionType.clear};
}

export function purchaseNewCoupon(coupon:CouponModel):CustomerAction{
    return{type:CustomerActionType.purchaseCoupon,payload:coupon}
}


export function customerReducer(currentState:CustomerAppState=new CustomerAppState(),action:CustomerAction):CustomerAppState{

    const newState={...currentState}

    switch(action.type){
        
        case CustomerActionType.allCustomerCoupons:
            newState.coupons=action.payload;
            break;

        case CustomerActionType.purchaseCoupon:
        newState.coupons.push(action.payload);
        break
        case CustomerActionType.clear:
            newState.coupons=[];
            break
         case CustomerActionType.newNumberAction:
            newState.num=action.payload;   
           
   
    }
   
    return newState;
}