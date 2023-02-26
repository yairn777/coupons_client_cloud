import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { CustomerModel } from "../../../../Models/CustomerModel";
import { customersListAction } from "../../../../Redux/AdminAppState";
import store from "../../../../Redux/store";
import notify from "../../../Services/Notification";
import web from "../../../Services/WebApi";
import "./CusromerList.css";

function CusromerList(): JSX.Element {
    
    const[customersList,setCustomersList]=useState<CustomerModel[]>(store.getState().adminReducer.customer)

    useEffect(()=>{
        web.getAllCustomers()
        .then((res)=>{
            setCustomersList(res.data)
            store.dispatch(customersListAction(res.data))

        })
        .catch((err)=>{
            notify.error(err.message)

        })

    },[])

    return (
        <div className="CusromerList flex-cil-top-center my-containerTable">
            <br/>
            <br/>
            <br/>



               <h1>CUSTOMERS LIST</h1><br/>
               <table className="styled-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Change</th>
                </tr>
                </thead>
                <tbody>
                    {customersList.map((item)=>{
                        
                        return(
                            <tr className="active-row" key={item.id}>
                           
                            <dt>{item.id}</dt>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>
                            <Link to={`deleteCustomer/${item.id}`}>
                                 <MdDelete size={25}/> 
                            </Link>
                            <Link to={`updateCustomer/${item.id}`}>
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

export default CusromerList;
