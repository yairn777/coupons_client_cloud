import "./Logo.css";
import src from"../../Assets/header.logo.jpg"
function Logo(): JSX.Element {
    return (
        <div className="Logo">
            <img src={src} alt="logo" />

			
        </div>
    );
}

export default Logo;
