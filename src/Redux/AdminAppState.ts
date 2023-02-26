import { CustomerModel } from './../Models/CustomerModel';
import { number } from 'yup';
import { CouponModel } from './../Models/CouponModel';
import { CompanyModel } from "../Models/CompanyModel";

export class AdminAppState{

    public company:CompanyModel[]=[];
    public customer:CustomerModel[]=[];
    public coupons:CouponModel[]=[];
    public num:number;



}


export enum AdminActionType{

    comapnyList="comapnyList",
    createCompany="createCompany",
    deleteCompany="deleteCompany",
    updateCompany="updateCompany",
    companyDetailes="companyDetailes",
    clearCompanies="clearCompanies",
    createCustomer="createCustomer",
    customersList=" customersList",
    deleteCustomer="deleteCustomer",
    updateCustomer="updateCustomer",
    allCoupons="allCoupons",
    tempNum="tempNum"
    
}


export interface AdminAction {
    type: AdminActionType;
    payload?: any;
}



export function companyListAction(comapny:CompanyModel[]): AdminAction{
    return { type: AdminActionType.comapnyList, payload: comapny };
}

export function createCompanyAction(comapny:CompanyModel): AdminAction{
    return { type: AdminActionType.createCompany, payload: comapny };
}


export function deleteCompanyAction(id:number): AdminAction{
    return { type: AdminActionType.deleteCompany, payload: id };
}

export function companyDetailsAction(): AdminAction{
    return { type:AdminActionType.companyDetailes };
}

export function companyUpdateAction(id:number,company:CompanyModel): AdminAction{
    return { type: AdminActionType.updateCompany,payload:{company,id} };
}

export function clearComapnyAction(): AdminAction{
    return { type:AdminActionType.clearCompanies };
}
export function customersListAction(customers:CustomerModel[]): AdminAction{
    return { type:AdminActionType.customersList,payload:customers };
}

export function deleteCustomerAction(id:number): AdminAction{
    return { type:AdminActionType.deleteCustomer,payload:id };
}

export function updateCustomerAction(id:number,customer:CustomerModel): AdminAction{
    return { type:AdminActionType.updateCustomer,payload:{id,customer} };
}

export function createCustomerAction(customer:CustomerModel): AdminAction{
    return { type:AdminActionType.createCustomer,payload:{customer} };
}

export function allCoupons(coupons:CouponModel[]): AdminAction{
    return { type:AdminActionType.allCoupons,payload:{coupons} };
}

export function tempNumCoupons(num:number): AdminAction{
    return { type:AdminActionType.tempNum,payload:{num} };
}





export function adminReducer(currentState: AdminAppState=new AdminAppState(),action:AdminAction):AdminAppState{

    const newState={...currentState}

    switch(action.type){
            case AdminActionType.createCompany:
                newState.company.push(action.payload)
                break;
            
            case AdminActionType.comapnyList:
                newState.company=action.payload;
                break;
            case AdminActionType.deleteCompany:
            
                newState.company=newState.company.filter(c=>c.id!==action.payload);    
                break;
            case AdminActionType.updateCompany:
                const idx=newState.company.findIndex(c=>c.id ===action.payload.id);
                    newState.company[idx]=action.payload;
                    break;
            case AdminActionType.clearCompanies:
                    newState.company=[];
                    break
                 
            case AdminActionType.customersList:
                    newState.customer=action.payload;
                    break
            case AdminActionType.createCustomer:
                    newState.customer.push(action.payload);
                    break
            case AdminActionType.deleteCustomer:
                     newState.customer=newState.customer.filter(cust=>cust.id!==action.payload)
                    break
            case AdminActionType.allCoupons:
                    newState.coupons=action.payload;
                    break
            case AdminActionType.updateCustomer:
                const idxc=newState.customer.findIndex(c=>c.id ===action.payload.id);
                newState.customer[idxc]=action.payload;
                break
                case AdminActionType.tempNum:
                        newState.num=action.payload

                               break
                 }
                        
                    

                    return newState;

}

