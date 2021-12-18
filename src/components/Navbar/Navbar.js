import { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {

    let [toggleMenu,setToggleMenu] = useState(()=> false)    
    let menuRef = useRef();
    let [windowSize,setWindowSize] = useState(()=> window.innerWidth)


    // console.log(toggleMenu)
        
    

    function menuHandler() {
        setToggleMenu((prev) => (
            prev = !prev
            
        ))
    
        }


    useEffect(()=> {

        // console.log(windowSize)

        if(windowSize >= 485) {
            setToggleMenu(false)
        }


        let currentWindow = window.innerWidth;
        function handleResize() {
            currentWindow = window.innerWidth;
                setWindowSize(prev => prev = currentWindow)         
        }

        window.addEventListener("resize", handleResize)

        // return (
        //     window.removeEventListener("resize", handleResize)
        // )

    },[windowSize])





    return (
            <div className="Navbar">

                <div className="nav-left">

                    <ul>
                        <li className="brand-logo">
                            <img src="images/brand-logo.svg" alt="" />
                        </li>
                        <li className="brand-name">
                            <h3> Exerevnisi</h3>
                        </li>
                    </ul>

                    <i  className="fas fa-bars hamburger-menu" onClick={menuHandler}/>

                </div>

                <div className="nav-right">

                        <ul  id="menu-ul">
                            <li className="home">
                                <NavLink to="/"  > Home</NavLink>
                            </li>
                            <li className="product">
                                <NavLink to="/product" activeClassName="activeLink" > Product</NavLink>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                            <li className="people">
                                <NavLink to="/people" activeClassName="activeLink" > People</NavLink>
                            </li>
                            <li className="join-us">
                                <NavLink to="/"  > Join Us</NavLink>
                            </li>
                        </ul>



                    {toggleMenu ? (

                        <ul  ref={menuRef} id="small-menu-ul">
                            <li className="home">
                                <NavLink to="/" > Home </NavLink>
                            </li>
                            <li className="product">
                                <NavLink to="/product"  activeClassName="actLink" > Product </NavLink>
                                <i className="fas fa-chevron-down"></i>
                            </li>
                            <li className="people">
                                <NavLink to="/people" activeClassName="actLink" > People </NavLink>
                            </li>
                            <li className="join-us">
                                <NavLink to="/" > Join Us </NavLink>
                            </li>
                        </ul>

                    ) : null}
                   
                </div>
    
        </div>
            
    )
}

export default Navbar
