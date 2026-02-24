import { NavLink } from "react-router-dom";
export default function Header(){
    return(
        <div>
            <nav>
            <NavLink to='/'>Home</NavLink>
            <br/>
            <NavLink to='/about'>About</NavLink>
            <br/>
            <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    );
}