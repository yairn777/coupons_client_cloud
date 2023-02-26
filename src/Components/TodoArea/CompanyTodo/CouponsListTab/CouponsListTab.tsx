import moment from "moment";
import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../../Models/CouponModel";
import { coupnsListAction } from "../../../../Redux/CompanyAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./CouponsListTab.css";
import logo from"../../../../Assets/plus.jpg"



function CouponsListTab(): JSX.Element {

const[coupi,setCoupi]=useState<CouponModel[]>(store.getState().companyReducer.coupons)

console.log("=========="+coupi)

useEffect(()=>{
    if(store.getState().companyReducer.coupons.length===0){
        web.getAllCoupons()
        .then((res)=>{
            notify.success('YES YES YES')
            setCoupi(res.data)
            console.log(res.data)
            store.dispatch(coupnsListAction(res.data));
        })
        .catch((err)=>{
            notify.error(err.message)

        })

      
    }

},[])

    return (
        
        <div className="CouponsListTab my-containerTable flex-cil-top-center " >
            <br/>
            
            <h1>COUPONS TABLE</h1>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Change</th>



                </tr>
                </thead>
                <tbody>
                    {coupi.map((item)=>{
                        
                        return(
                            <tr className="active-row" key={item.id}>
                           
                            <dt>{item.id}</dt>
                            <td>{item.category}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td  >{moment(item.startDate).format("DD/MM/yyyy")}</td>
                            <td >{moment(item.endDate).format("DD/MM/yyyy")}</td>
                            <td>{item.price}$</td>
                            <td>{item.amount}</td>
                            <td>
                                <div className="linkButton"  >
                            <Link  to={`deleteCoupon/${item.id}`}>
                                 <MdDelete size={25}/> 
                            </Link>
                            <Link to={`updateCoupon/${item.id}`} >
                                 <MdModeEdit size={25} />
                            </Link>
                            </div>
                            </td>



                        </tr>
                        )


                    })
                 
                    }                       
                </tbody>
            </table>
 
            <Link style={{}} className="addLink" to='/addCoupon'>{<img style={{height:45,width:45}} src={logo}/>}</Link>
        
        </div>
    );
}

 
 export default CouponsListTab;
 
           




  
