import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { CompanyModel } from "../../../../Models/CompanyModel";
import { companyListAction } from "../../../../Redux/AdminAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./CompaniesList.css";

function CompaniesList(): JSX.Element {
    const[comaniesList,setCompaniesList]=useState<CompanyModel[]>(store.getState().adminReducer.company)
    


    useEffect(()=>{
        web.getAllCompanies()
        .then((res)=>{
            setCompaniesList(res.data)
            store.dispatch(companyListAction(res.data))
        
        })
        .catch((err)=>{
            notify.error(err.message)

        })


    },[])

    return (
        <div className="CompaniesList  flex-cil-top-center my-containerTable ">
            <br/>
            <br/>
            <h1>COMPANIES LIST</h1>
               <table className="styled-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Email</th>
                    <th>Coupons count</th>
                    <th>Change</th>
                </tr>
                </thead>
                <tbody>
                    {comaniesList.map((item)=>{
                        
                        return(
                            <tr className="active-row" key={item.id}>
                           
                            <dt>{item.id}</dt>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td></td>
                            <td>
                            <Link to={`deleteCompany/${item.id}`}>
                                 <MdDelete size={25}/>
                            </Link>
                            
                            <Link to={`updateCompany/${item.id}`}>
                                 <MdModeEdit size={25}/>
                            </Link>
                            </td>
                        </tr>
                        )


                    })
                 
                    }                       
                </tbody>
            </table>
  
			
        </div>
    );
}

export default CompaniesList;
