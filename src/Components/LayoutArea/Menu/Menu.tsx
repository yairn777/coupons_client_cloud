import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserModel } from "../../../Models/LoginModels";
import store from "../../../Redux/store";
import AutoMenu from "../../AutoArea/AutoMenu/AutoMenu";
import DemoMenuDisplay from "../../TodoArea/AdminTodo/DemoMenuDisplay/DemoMenuDisplay";
import "./Menu.css";


 interface MenuProps{

    
 }

function Menu(): JSX.Element {
    
    const[typeLogin,setTypeLogin]=useState(store.getState().userReduser.user?.clientType)
    const [userMail,setUserMail]=useState(store.getState().userReduser.user?.email)

    

    useEffect(()=>{
        return store.subscribe(()=>{
            setTypeLogin(store.getState().userReduser.user.clientType)
            setUserMail(store.getState().userReduser.user.email)
             console.log(typeLogin)
             console.log('TYPE FROM STORE:'+store.getState().userReduser.user.clientType)

        })
    },[])


    
     return (
        <div className="Menu FlexContainer">
           
            <br/>
            {(() => {
        switch (typeLogin) {
          case 'ADMINISTRATOR':
            return <DemoMenuDisplay />
          case 'COMPANY':
            return <h1>COMPANY {userMail}</h1>
              

          case 'CUSTOMER':

            return <h1>CUSTOMER {userMail}</h1>
            

        default:
            return ""
        }
      })()}




         
            
                


     </div>
    );
}

export default Menu;
