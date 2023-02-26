import { url } from "inspector";
import { map } from "jquery";
import { SyntheticEvent, useEffect, useState } from "react";
import { CouponModel } from "../../../Models/CouponModel";
import store from "../../../Redux/store";
import "./DemoHomePage2.css";

import { Link, useNavigate } from "react-router-dom";
import buyIcon from "../../../Assets/buy_icon.jpg"
import { addNewNumber } from "../../../Redux/CustomerAppState";
import notify from "../../Services/Notification";





interface DemoHomePage2Props{
  
    coupon:CouponModel;
}


function DemoHomePage2(props:DemoHomePage2Props): JSX.Element {

  const navigate=useNavigate();

  const[bol,setBol]=useState(true)
  const[num,setNum]=useState<number>();
  const[isLogged,setIsLogged]=useState(false);
  const[customerCoupons,setCustomerCoupons]=useState<CouponModel[]>(store.getState().customerReducer.coupons)
  


  



  useEffect(()=>{
  (store.getState().userReduser.user.clientType==='CUSTOMER')?
    setIsLogged(true)
    
    :
    setIsLogged(false)
  

  },[])




   const oop=(args:number)=>{
   const val=args;

   const coupons:CouponModel[]=customerCoupons.filter(co=>co.id===val)
    if(coupons.length===0){
      navigate('demoDisplay/'+val)

    }else{
      notify.error('you cant by ths same coupon twice')
    }

    
   }
  

 
  

    
   
    return (
       
        <div className="DemoHomePage2 ">
          
            <div className="flip-card-inner">
           
    <div className="flip-card-front" >
   
    
   
         <img src={props.coupon.image} alt='jhjh' width='300px' height='300px' />
    

   
    </div>
 
    <div className="flip-card-back">
      <h1>{props.coupon.title}</h1> 
      {/* <p>{props.coupon.category}</p>  */}
      <p>{props.coupon.description}</p>
      <h3>only {props.coupon.price}$</h3>
     
      <div className="iconImage" >
      {/* <Link  style={{pointerEvents: (bol)?null:'none'}} to={"/demoDisplay"}   >
        {


            <img src={buyIcon} style={{height:45,width:45}}/>


        }
          </Link> */}

          <button disabled={!isLogged} value={props.coupon.id} onClick={e=>oop(props.coupon.id)}>
          <img src={buyIcon} style={{height:45,width:45}}/>
          </button>

          
     
 
            
      </div>
    </div>
  </div>
           
           
         
     
            

        </div>

    );
}

export default DemoHomePage2;
