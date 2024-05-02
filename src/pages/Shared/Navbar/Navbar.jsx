import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then((result) => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    //?email=asif@gmail.com&sort=1
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {
        user?.email? <>
        <li><NavLink to='/bookings'>My Bookings</NavLink></li>
        <li><button onClick={handleLogOut}>Log Out</button></li> 
        </>
        :<li><NavLink to='/login'>Login</NavLink></li>
        }
        
        
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-active btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;