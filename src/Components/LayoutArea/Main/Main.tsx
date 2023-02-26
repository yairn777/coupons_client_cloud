import { Outlet } from "react-router-dom";
import Login from "../../AutoArea/Login/Login";
import Routing from "../../RoutingArea/Routing/Routing";
import BootstrapCard from "../../SharedArea/BootstrapCard/BootstrapCard";
import Logo from "../../SharedArea/Logo/Logo";
import CompanyList from "../../TodoArea/CouponsList/CouponsList";
// import src from"../../Assets.backgroundWebsite.jpg"
// import src from"../../../../src/Components/Assets.backg.jpg"



import "./Main.css";


function Main(): JSX.Element {
    return (
        <div className="Main flex-cil-top-center">
                          

            <div>

                
                     <Routing/>
                    <Outlet/>
        

           
           </div>

           
          
          
			
        </div>
    );
}

export default Main;
