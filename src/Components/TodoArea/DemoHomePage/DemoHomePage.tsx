import { useState } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import store from "../../../Redux/store";
import "./DemoHomePage.css";
// import src from "../../Assets/1998_final_G6.jpg"
// import final_game_img from "../../../Assets/1998_final_G6.jpg"
interface DemoHomePageProps{
  
  coupon:CouponModel;
}

const[image,setImage]=useState<any>(store.getState().companyReducer.images[0])

function DemoHomePage(props: DemoHomePageProps): JSX.Element {
    return (
        <div className="DemoHomePage   ">
            <div className="flip-card-inner ">
    <div className="flip-card-front">
      < img src={image} alt="Trulli" />
    </div>
    <div className="flip-card-back">
      <h1>{props.coupon.title}</h1> 
      <p>{props.coupon.category}</p> 
      <p>{props.coupon.description}</p>
    </div>
  </div>
     
</div>

			
   
    );
}

export default DemoHomePage;
