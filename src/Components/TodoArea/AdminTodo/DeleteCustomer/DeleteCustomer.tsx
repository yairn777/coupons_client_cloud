import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCustomerAction } from "../../../../Redux/AdminAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./DeleteCustomer.css";

function DeleteCustomer(): JSX.Element {
    const navigate=useNavigate();

    const params=useParams();
    const id=+(params.id || 0)
    const[ccustomerId,setCustomerId]=useState<number>(id);


    
    const yes=()=>{
        web.deleteCustomerById(id)
        .then(()=>{
            store.dispatch(deleteCustomerAction(id))
            navigate('/customersList');


        })
        .catch((err)=>{
            notify.error(err.message)
        })
    }

    const no=()=>{
        navigate('/customersList');

    }
   
   
   
   
    return (
        <div className="DeleteCustomer">
                   <h1>DELETE CUSTOMER</h1>
            <span>are you sure you want delete customer {ccustomerId}</span>
            <br/>
            
        <span>
        <button onClick={yes}>YES</button>  <button onClick={no}>NO</button>
        </span>
			
        </div>
    );
}

export default DeleteCustomer;
