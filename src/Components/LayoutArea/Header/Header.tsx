import Logo from "../../SharedArea/Logo/Logo";
import "./Header.css";

import { Button } from "react-bootstrap";
import CustomLink from "../../RoutingArea/CustomLink/CustomLink";
import AutoMenu from "../../AutoArea/AutoMenu/AutoMenu";
import { Link } from "react-router-dom";
import logo from"../../../Assets/header_title3.jpg";
import {  RiHomeSmileFill } from "react-icons/ri";



function Header(): JSX.Element {

    
    return (
        <div className="Header flex-row-none-wrap-list ">
        
     
            <img src={logo}/>
            
            <div className="autuMenuLoginOut">
            <AutoMenu/>   
            <Link to={'/homePage'}>
            <RiHomeSmileFill size={38}/>
            </Link>     
            </div>



           
        


    


         

           

       
        </div>
    );
}

export default Header;
