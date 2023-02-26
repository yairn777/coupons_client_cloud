import { type } from 'os';
import { CouponModel } from './../Models/CouponModel';
export class CompanyAppState{

    public coupons:CouponModel[]=[] ;
    public images:any[]=[];



}


export enum CompanyActionType{

    addCoupon="addCoupon",
    updateCoupon="updateCoupon",
    deleteCoupon="deleteCoupon",
    getAllCoupons="getAllCoupons",
    getCouponsByCategory="getCouponsByCategory",
    getCouponsByPrice="getCouponsByPrice",
    clearCoupons="clearCoupons",
    addImage="addImage",
    getAllImages="getAllImages"

}


export interface CompanyAction{
    type:CompanyActionType;
    payload?:any;

}

// export function taskDownloadedAction(task: TodoModel[]): TaskAction {
//     return { type: TasksActionType.TaskDownloaded, payload: task };
// }


export function coupnsListAction(coupon:CouponModel[]):CompanyAction{
    console.log('HELLO HELLO HELLO HELLO HELLO')
return {type:CompanyActionType.getAllCoupons,payload:coupon}
}


export function addCoupon(coupon:CouponModel):CompanyAction{
    return{type:CompanyActionType.addCoupon,payload:coupon}
}

// export function tasksDeletedAction(id:number): TaskAction {
//     return { type: TasksActionType.TaskDeleted, payload: id };
// }



export function deleteCoupon(id:number):CompanyAction{
    return{type:CompanyActionType.deleteCoupon,payload:id};
}


export function getCouponByPrice(price:number,coupon:CouponModel):CompanyAction{
    return {type:CompanyActionType.getCouponsByPrice,payload:coupon}
}

export function getCouponByCategory(coupon:CouponModel):CompanyAction{
    return {type:CompanyActionType.getCouponsByCategory,payload:coupon}
}

export function insertImage(image:any):CompanyAction{
    return {type:CompanyActionType.addImage,payload:image}
}
export function getImages(image:any[]):CompanyAction{
    return {type:CompanyActionType.getAllImages,payload:image}
}
export function updateCouponAction(id:number,coupon:CouponModel):CompanyAction{
    return {type:CompanyActionType.updateCoupon,payload:{id,coupon}}
}




export function clearCoupons():CompanyAction {
    return { type: CompanyActionType.clearCoupons};
}

export function companyReducer(currentState: CompanyAppState=new CompanyAppState(),action:CompanyAction):CompanyAppState{
    const newState={...currentState}

    switch(action.type){
        case CompanyActionType.addCoupon:
            newState.coupons.push(action.payload);
          
            break;
        case CompanyActionType.getAllCoupons:
            newState.coupons=action.payload;
            console.log("@@@@@@@@@@@@@@@ "+newState.coupons+"  @@@@@@@@@@@@@@@")
            break;

        case CompanyActionType.deleteCoupon:
            newState.coupons=newState.coupons.filter(c=>c.id!==action.payload)
            break;
            
        case CompanyActionType.getCouponsByPrice:
            newState.coupons=action.payload.coupon;
            break;
        case CompanyActionType.clearCoupons:
            newState.coupons=[];
            break;
        // case CompanyActionType.addImage:
        //     newState.images.push(action.payload) 
        //     break
            case CompanyActionType.addImage:
                newState.images=action.payload   
                break;
         case CompanyActionType.updateCoupon:
           const idx=newState.coupons.findIndex(co=>co.id===action.payload.id) 
           newState.coupons[idx]=action.payload.coupon;  
           break; 
    }

    return newState;

}
