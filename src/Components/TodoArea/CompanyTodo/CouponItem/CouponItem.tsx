import moment from "moment";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../../Models/CouponModel";
import "./CouponItem.css";
import { MdDelete, MdModeEdit } from "react-icons/md";
import web from "../../../Services/WebApi";

interface CouponItemProps{
  
    coupon:CouponModel;
}

function CouponItem(props:CouponItemProps): JSX.Element {




    return (
        <div className="CouponItem">



            <div className="card">
            <span>{props.coupon.category}</span>
            <img src="https://cataas.com/cat" alt={props.coupon.title}/>

           
            <h2><span className="single-line-only">{props.coupon.title}</span></h2>


                {/* <span>{props.tasks.classification}</span> */}
            <span>{props.coupon.description}</span> <br/>

                <span className="price">only {props.coupon.price}$</span>
                {/* <span className="price">{moment(props.coupon.endDate).format("DD/MM/yyyy")}</span> */}
                <Link to={`deleteCoupon/${props.coupon.id}`}>
                    <MdDelete size={25}/> 
                
                </Link>


        </div>

        </div>
    );
}

export default CouponItem;
function nevigate(arg0: string) {
    throw new Error("Function not implemented.");
}

