import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import { Category } from "../../../Models/CouponModel";
import Login from "../../AutoArea/Login/Login";
import Logout from "../../AutoArea/Logout/Logout";
import Main from "../../LayoutArea/Main/Main";
import CouponsList from "../../TodoArea/CouponsList/CouponsList";
import CompanyList from "../../TodoArea/CouponsList/CouponsList";
import Tyuta from "../../TodoArea/CompanyTodo/AddCoupon/AddCoupon";
import Home from "../Home/Home";
import Page404 from "../Page404/Page404";
import AddCoupon from "../../TodoArea/CompanyTodo/AddCoupon/AddCoupon";
import DeleteCoupon from "../../TodoArea/CompanyTodo/DeleteCoupon/DeleteCoupon";
import CouponsListTab from "../../TodoArea/CompanyTodo/CouponsListTab/CouponsListTab";
// import CouponsCards from "../../../TodoArea/CouponsCards/CouponsCards";
import CouponsCategory from "../../TodoArea/CouponsCategory/CouponsCategory";
import CreateCompany from "../../TodoArea/AdminTodo/CreateCompany/CreateCompany";
import CompaniesList from "../../TodoArea/AdminTodo/CompaniesList/CompaniesList";
import DeleteCompany from "../../TodoArea/AdminTodo/DeleteCompany/DeleteCompany";
import CusromerList from "../../TodoArea/AdminTodo/CusromerList/CusromerList";
import CreateCustomer from "../../TodoArea/AdminTodo/CreateCustomer/CreateCustomer";
import DeleteCustomer from "../../TodoArea/AdminTodo/DeleteCustomer/DeleteCustomer";
import UpdateCompany from "../../TodoArea/AdminTodo/UpdateCompany/UpdateCompany";
import UpdateCustomer from "../../TodoArea/AdminTodo/UpdateCustomer/UpdateCustomer";
import DemoHomePage from "../../TodoArea/DemoHomePage/DemoHomePage";
import DemoHomePage2 from "../../TodoArea/DemoHomePage2/DemoHomePage2";
import ImageUploadDemo from "../../TodoArea/ImageUploadDemo/ImageUploadDemo";
import DemoDisplay from "../../TodoArea/CustomerTodo/DemoDisplay/DemoDisplay";
import DemoMenuDisplay from "../../TodoArea/AdminTodo/DemoMenuDisplay/DemoMenuDisplay";
import DemoCustomerHomePage from "../../TodoArea/CustomerTodo/DemoCustomerHomePage/DemoCustomerHomePage";
import PurchaseCoupon from "../../TodoArea/CustomerTodo/PurchaseCoupon/PurchaseCoupon";
import UpdateCoupon from "../../TodoArea/CompanyTodo/UpdateCoupon/UpdateCoupon";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
               
                 <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Main/>}/>
                <Route index element={<Home/>}/>
                <Route path="/homePage" element={<Home/>}/>
                {/* <Route index element={<Login/>}/> */}
                <Route path="/couponsList" element={<CouponsList/>}/>
                <Route path="/logout"  element={<Logout/>}/>
                <Route path="/couponsListTab"  element={<CouponsListTab/>}/>

                <Route path="/login"element={<Login/>}/>
                <Route path="/category/:category"  element={<CouponsCategory/>}/>

                <Route path="/addCoupon"element={<AddCoupon/>}/>
                {/* <Route path="/couponsCards"element={<CouponsCards/>}/> */}
                <Route path="/createCompany"element={<CreateCompany/>}/>
                <Route path="/companiesList"element={<CompaniesList/>}/>
                <Route path="companiesList/deleteCompany/:id"element={<DeleteCompany/>}/>
                <Route path="/customersList"element={<CusromerList/>}/>
                <Route path="/createCustomer"element={<CreateCustomer/>}/>
                <Route path="customersList/deleteCustomer/:id"element={<DeleteCustomer/>}/>
                <Route path="companiesList/updateCompany/:id"element={<UpdateCompany/>}/>
                <Route path="customersList/updateCustomer/:id"element={<UpdateCustomer/>}/>
                <Route path="couponsListTab/deleteCoupon/:id"element={<DeleteCoupon/>}/>

                {/* <Route path="/demoHome"element={<DemoHomePage/>}/> */}
                <Route path="/demoHome2"element={<DemoHomePage2 coupon={undefined}/>}/>
                {/* <Route path="/imageUploadDemo"element={<ImageUploadDemo/>}/> */}
                <Route path="homePage/demoDisplay/:id"element={<DemoDisplay coup={undefined}/>}/>
                <Route path="/demoMenuDisplay"element={<DemoMenuDisplay/>}/>
                <Route path="/customerHomePage"element={<DemoCustomerHomePage/>}/>
                <Route path="/purchaseCoupon"element={<PurchaseCoupon/>}/>
                <Route path="couponsListTab/updateCoupon/:id"element={<UpdateCoupon/>}/>














                <Route path="*" element={<Page404/>}/>

                </Routes>
			
            </div>
        );
    }
    
    export default Routing;
    
                               
              

                               
              

               



 