import { useEffect, useState } from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import store from "../../../Redux/store";
import "./AutoMenu.css";


function AutoMenu(): JSX.Element {

    const [userMail,setUserMail]=useState(store.getState().userReduser.user?.email)
    const[userIsLogged,setUserIsLogged]=useState(store.getState().userReduser.user?.token.length>0)
    console.log(store.getState().userReduser.user.token)


    useEffect(()=>{
        return store.subscribe(()=>{
            setUserIsLogged(store.getState().userReduser.user?.token?.length>0);
            setUserMail(store.getState().userReduser.user?.email)
        })
    },[])
   
   
    return (
      <div className="AutoMenu ">

        {userIsLogged?

            <Link to={"logout"}>Logout</Link>
            :
      

        <Link to={"login"}>Login</Link>
    }

    
    

			
        </div>
    );
}

export default AutoMenu;
