import { useNavigate } from "react-router-dom";
import "./DemoMenuDisplay.css";

function DemoMenuDisplay(): JSX.Element {

    const navigate=useNavigate();

    const toCustomerList=()=>{
        navigate('/customersList');

    }

    const toCompanieisList=()=>{
        navigate('/companiesList');

    }


    const toCreateCustomer=()=>{
        navigate('/createCustomer');

    }

    const toCreateCompany=()=>{
        navigate('/createCompany');

    }

    return (
        <div className="DemoMenuDisplay flex-cil-top-center">
         
            <button className="shiny" onClick={toCreateCompany}>ADD COMPANY</button>
    <br/>
    <br/>

            <button className="shiny" onClick={toCreateCustomer}>ADD CUSTOMER</button>
    <br/>
    <br/>


	<button className="shiny" onClick={toCustomerList}>CUSTOMERS</button>
    <br/>
    <br/>

    

    <button className="shiny" onClick={toCompanieisList}>COMPANIES</button>

			
        </div>
    );
}

export default DemoMenuDisplay;
