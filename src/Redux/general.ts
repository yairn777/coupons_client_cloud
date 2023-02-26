import { CouponModel } from "../Models/CouponModel";

export class GeneralAppState{

    public coupons:CouponModel[]=[];

}


export enum GeneralActionType{
 allCoupons="allCoupons",
 couponsByCategory="couponsByCategory"
}

export interface GeneralAction {
    type: GeneralActionType;
    payload?: any;
}

export function couponsListAction(coupons:CouponModel[]): GeneralAction{
    return { type: GeneralActionType.allCoupons, payload: coupons };
}

export function couponsCategoryAction(coupons:CouponModel[]): GeneralAction{
    return { type: GeneralActionType.couponsByCategory, payload: coupons };
}


export function generalReducer(currentState: GeneralAppState=new GeneralAppState(),action:GeneralAction):GeneralAppState{

    const newState={...currentState}

    switch(action.type){
            case GeneralActionType.allCoupons:
                newState.coupons=action.payload;
                break;
            case GeneralActionType.couponsByCategory:
                    newState.coupons=action.payload;
                    break;
    }
    return newState;

}