import { useEffect, useState } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import { allCoupons } from "../../../Redux/AdminAppState";
import { couponsListAction } from "../../../Redux/general";
import store from "../../../Redux/store";
import notify from "../../Services/Notification";
import web from "../../Services/WebApi";
import CouponItem from "../../TodoArea/CompanyTodo/CouponItem/CouponItem";
import DemoHomePage from "../../TodoArea/DemoHomePage/DemoHomePage";
import DemoHomePage2 from "../../TodoArea/DemoHomePage2/DemoHomePage2";
import "./Home.css";

function Home(): JSX.Element {

    const [coupons, setCoupons] = useState(store.getState().generalReducer.coupons)
    const [selectedCategory, setSelectedCategory] = useState<string>();
    console.log("All couoons from redux:"  + store.getState().generalReducer.coupons)

    useEffect(() => {
        web.getCouponsForHomePage()
            .then((res) => {
                setCoupons(res.data)
                store.dispatch(couponsListAction(res.data))
                console.log("SDFsdfsdfsdf"+res.data)
                console.log('COUNT COUPONS' + store.getState().adminReducer.coupons.length)
            })
            .catch((err) => {
                notify.error(err.message)
            })
    }, [])

    function changeCouponCategory(e: React.ChangeEvent<HTMLSelectElement>) {
        // const val = e.currentTarget.value;
        const val=e.target.value;
        console.log(val)
        if (val === "ALL") {
            setCoupons(store.getState().generalReducer.coupons);
        
        } else {
            web.getCouponsCategoryForHomePage(val)
            .then((res) => {
                setCoupons(res.data);
            }).catch((err) => {
                notify.error(err.message)
            })

            
        }

        


    }

return (
    <div className="Home my-containerHome flex-cil-top-center ">
        <br/>
      <div>
            <label htmlFor="">CATEGORY</label>&nbsp;&nbsp; 
       
            <select onChange={changeCouponCategory} value={selectedCategory}>
                <option>ALL</option>
                <option>FOOD</option>
                <option>SPORT</option>
                <option>VACATION</option>
                <option>FURNITURE</option>
                <option>ELECTRICITY</option>

                
            </select>

        </div>

        <div className="CouponsList grid-container ">



            {coupons ? coupons.map(c => <DemoHomePage2 key={c.id} coupon={c} />) : <>Loading</>}



        </div>

    </div>
);
}











export default Home;
