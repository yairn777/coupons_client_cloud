import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCompanyAction } from "../../../../Redux/AdminAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {
    const navigate=useNavigate();

    const params=useParams();
    const id=+(params.id || 0)
    const[companyId,setCompanyId]=useState<number>(id);


    const yes=()=>{
        web.deleteCompanyById(companyId)
        .then(()=>{
            store.dispatch(deleteCompanyAction(companyId))
            navigate('/companiesList');


        })
        .catch((err)=>{
            notify.error(err.message)
        })
    }

    const no=()=>{
        navigate('/companiesList');

    }

    return (
        <div className="DeleteCompany flex-cil-top-center">
            <h1>DELETE COMPANY</h1>
            <span>are you sure you want delete company {companyId}</span>
            <br/>
            
        <span>
        <button onClick={yes}>YES</button>  <button onClick={no}>NO</button>
        </span>

            
                
			
        </div>
    );
}

export default DeleteCompany;
