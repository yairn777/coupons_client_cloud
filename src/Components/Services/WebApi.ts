import { CustomerModel } from './../../Models/CustomerModel';
import { CredentialsModel, UserModel } from './../../Models/LoginModels';
import { CouponModel, Category } from './../../Models/CouponModel';
import axios from "axios";
import store from "../../Redux/store";
import globals from "./globals";
import tokenAxios from './InterceporAxios';
import { CompanyModel, CompanyResModel } from '../../Models/CompanyModel';

class webApi{

    private company=globals.urls.company;
    private homePage=globals.urls.homePage;
    private admin=globals.urls.admin;
    private customer=globals.urls.customer;
    taskApi: string;


    // public async getAllTasks():Promise<any>{
    //     const headers = {"authorization": store.getState().userReducer.user.token};

    //   return   await tokenAxios.get<TodoModel[]>(this.taskApi+"/tasks",{headers});
    //  // return await axios.get<TodoModel[]>(globals.urls.taskTyuta)

    //  }



    // public async login(credential: CredentialsModel):Promise<any>{
    //     return await axios.post<UserModel>(this.welcomeApi+'/login',credential);
    // }

        // public async getAllTasks():Promise<any>{
    //     const headers = {"authorization": store.getState().userReduser.user.token};
    //   return   await axios.get<TodoModel[]>(this.taskApi+"/tasks",{headers});


    public async getCouponsForHomePage():Promise<any>{
        return await axios.get<CouponModel[]>(this.homePage);
    }  

    public async getCouponsCategoryForHomePage(param:string):Promise<any>{
        return await axios.get<CouponModel[]>(this.homePage+'/category?category='+param);
    } 

    

    public async Companylogin(credential:CredentialsModel):Promise<any>{
        return await axios.post<UserModel>(this.company+'/login',credential);
    }

    public async Adminlogin(credential:CredentialsModel):Promise<any>{
        return await axios.post<UserModel>(this.admin+'/login',credential);
    }

    public async CustomerLogin(credential:CredentialsModel):Promise<any>{
        return await axios.post<UserModel>(this.customer+'/login',credential);
    }

        
    public async craeteCompany(company:CompanyModel):Promise<any>{
        return await tokenAxios.post<CompanyModel>(this.admin,company)
    }

    public async getAllCompanies():Promise<any>{
        return await tokenAxios.get<CompanyModel[]>(this.admin+'/getAllCompanies')
    }

    public async deleteCompanyById(id:number):Promise<any>{
        return await tokenAxios.delete<any>(this.admin+'/delete_company/'+id)
    }

    public async updateComany(id:number,company:CompanyModel):Promise<any>{
        return await tokenAxios.put<CompanyResModel>(this.admin+'/update_company/'+id,company)
    }
  
    public async getAllCustomers():Promise<any>{
        return await tokenAxios.get<CustomerModel[]>(this.admin+'/getAllCustomers')
    }
   
    public async cretaeCustomer(customer:CustomerModel):Promise<any>{
         return await tokenAxios.post<CustomerModel>(this.admin+'/addCustomer',customer)
    }

    public async deleteCustomerById(id:number):Promise<any>{
        return await tokenAxios.delete<any>(this.admin+'/deleteCustomer/'+id)
    }

    public async updateCustomer(id:number,customer:CustomerModel):Promise<any>{
        return await tokenAxios.put<CustomerModel>(this.admin+'/update_customer/'+id,customer)
    }

    
    
    public async getAllCoupons():Promise<any>{
    // const headers = {"authorization": store.getState().userReduser.user.token};
    console.log("token from Web Api: "+store.getState().userReduser.user.token)
     return await tokenAxios.get<CouponModel[]>(this.company+'/getCompaniesCoupons');
    }

    public async createCoupon(coupon:CouponModel):Promise<any>{
        return await tokenAxios.post<CouponModel>(this.company+'/addCoupon',coupon)
    }


    public async deleteCoupon(id:any):Promise<any>{
        return await tokenAxios.delete<any>(this.company+'/deleteCoupon'+id)
    }

    public async couponsByCategory(param:string):Promise<any>{
        console.log('WEB'+param)
        return await tokenAxios.get<CouponModel[]>(this.company+'/couponsByCategory?category='+ param)
    }

    public async updateCoupon(coupon:CouponModel):Promise<any>{
        return await tokenAxios.put<CouponModel>(this.company+'/updateCoupon',coupon);
    }  
    


    public async purchaseCoupon(param:number):Promise<any>{
        return await tokenAxios.post<CouponModel>(this.customer+'/purchaseCoupon?coupon_id='+param)
    }

    public async customerCoupons():Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.customer+'/customerCoupons')
    }

    // public async getCustomerCouponById(id:number):Promise<any>{
    //     return await tokenAxios.get<CouponModel>(this.customer+'/customerCoupons')
    // }
       
       
    
               

}

const web=new webApi();
export default web;