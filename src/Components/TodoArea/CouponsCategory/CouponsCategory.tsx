import { SyntheticEvent, useEffect, useState } from "react";
import { Category, CouponModel } from "../../../Models/CouponModel";
import store from "../../../Redux/store";
import "./CouponsCategory.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import web from "../../Services/WebApi";
import { getCouponByCategory } from "../../../Redux/CompanyAppState";
import notify from "../../Services/Notification";
import CouponItem from "../CompanyTodo/CouponItem/CouponItem";
import { event } from "jquery";
import DemoHomePage2 from "../DemoHomePage2/DemoHomePage2";


function CouponsCategory(): JSX.Element {

    // const[couponsCat,setCouponsCat]=useState<CouponModel[]>(store.getState().companyReducer.coupons)
    // const[chang,setChange]=useState([])




    // useEffect(()=>{
    //     setChange(['AAA','BBB','CCC','DDD','EEE'])

    //     console.log(chang);

    // },[])




    //    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    //    useForm<CouponModel>({ mode: "all", resolver: yupResolver(schema) });




    const [value, setValue] = useState("");




    const [couponsCat, setCouponsCat] = useState<CouponModel[]>(store.getState().companyReducer.coupons)
    const [categ, setCateg] = useState<string>("ALL")







    const couponsCategory = (e: React.ChangeEvent<HTMLSelectElement>):void => {
        const vali = e.currentTarget.value;
        setValue(vali)
        // web.couponsByCategory(vali)
        //     .then(((res) => {
        //         setCouponsCat(res.data)
        //         store.dispatch(getCouponByCategory(res.data))

        //         console.log('GOODU GOODI GOODI')
        //         console.log('MY VALY ' + vali)
        //         console.log(couponsCat)


        //     }))
        //     .catch((err) => {
        //         notify.error(err.message)
        //         console.log('BADI BADI BADI')


        //     })

    }












    return (
        <div className="CouponsCategory flex-cil-top-center">
            <h1>COUPONS CATEGORY</h1>
            <select onChange={couponsCategory} value={categ}>
                <option>ALL</option>
                <option>FOOD</option>
                <option>SPORT</option>
                <option>VACATION</option>
            </select>


            <br />
            {value}




            {couponsCat.map((co => <DemoHomePage2 coupon={co} />))}




        </div>
    );
}

export default CouponsCategory;
