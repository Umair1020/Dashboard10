import React, { useState, useEffect } from 'react'
import "../assets/css/style.css"
import { BsList, BsFilter, BsSearch, BsArrowDown } from 'react-icons/bs';
import { FaceRounded, Home, People } from '@material-ui/icons';
import { FaAccessibleIcon, FaBell, FaLockOpen, FaRegUser } from "react-icons/fa";
import { IoMdDocument, IoIosLogIn } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Profilecard  from './Profilecard';

const Sidebar = ({ isDarkMode, toggleMode }) => {
    const [showProfileCard, setShowProfileCard] = useState(false);

    const handleProfileClick = () => {
        setShowProfileCard(!showProfileCard);
    };
    const toggleSearchBar = () => {
        const searchBar = document.querySelector('.search-bar');
        if (searchBar) {
            searchBar.classList.toggle('search-bar-show');
        }
    };

    // Navbar links active state on scroll
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        const navbarlinks = document.querySelectorAll('#navbar .scrollto');
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = document.querySelector(navbarlink.hash);
            if (!section) return;
            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };

    const renderNavigation = () => {
        if (location.pathname === '/') {
            return (
                <ul className="d-flex align-items-center">
                    <li className="nav-item d-block d-lg-none">
                        {/* ... */}
                    </li>
                    <li className="nav-item dropdown">
                        {/* ... */}
                    </li>
                    {/* Add other items for the home route */}
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <span>&gt;</span>
                    </li>
                    {/* Add other necessary navigation items */}
                </ul>
            );
        } else if (location.pathname === '/agentrequests') {
            return (
                <ul className="d-flex align-items-center">
                    {/* ... */}
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <span>&gt;</span>
                    </li>
                    <li className="nav-item">
                        <Link to="/agentrequests">Agent Requests</Link>
                    </li>
                    {/* Add other items specific to the agentrequests route */}
                </ul>
            );
        }
        // Add more conditions for other routes/pages as needed

        // Default navigation for unknown routes
        return (
            <ul className="d-flex align-items-center">
                {/* ... */}
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <span>&gt;</span>
                </li>
                {/* Add a default link for unknown routes */}
                <li className="nav-item">
                    <Link to={location.pathname}>{location.pathname.slice(1)}</Link>
                </li>
                {/* Add other items for default/unknown routes */}
            </ul>
        );
    };
    useEffect(() => {
        // Event listeners on component mount
        window.addEventListener('scroll', navbarlinksActive);
        window.addEventListener('load', navbarlinksActive);

        return () => {
            // Clean up event listeners on component unmount
            window.removeEventListener('scroll', navbarlinksActive);
            window.removeEventListener('load', navbarlinksActive);
        };
    }, []);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeLink, setActiveLink] = useState(''); // Initialize with an empty string or default route ID

    const handleSetActiveLink = (linkId) => {
        setActiveLink(linkId);
    };
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    const toggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
        setSidebarOpen(!isSidebarOpen);
    };
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isagent = location.pathname === '/agentrequest';
    const ISmaid = location.pathname === '/ourmaid';
    const Platedinterview = location.pathname === '/plantedinterview';
    const isAccess = location.pathname === '/access';
    return (
        <div>
            <Desktop>
                <header id="header" className={`header fixed-top d-flex align-items-center ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: "24%" }}>
                        <a href="index.html" className="logo d-flex align-items-center" style={{ background: "rgba(37, 48, 97, 1)", height: "64px" }}>
                            <img className='mx-auto' src="/logo.png" alt="" />
                        </a>
                    </div>
                    <BsList className="toggle-sidebar-btn " style={{ marginLeft: "0px" }} onClick={toggleSidebar} />

                    {isHomePage && <h2 className='mx-3 d-flex align-items-center'>Home</h2>}
                    {isagent && <h3 className='mx-3'>Agent Request</h3>}
                    {ISmaid && <h3 className='mx-3'>Our Maid</h3>}
                    {Platedinterview && <h3 className='mx-5'>Planted Interview</h3>}
                    {isAccess && <h3 className='mx-3'>Access</h3>}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center ">

                            <li className="nav-item d-block">
                                <button className="toggle-button" onClick={toggleMode}>
                                    {isDarkMode ? (
                                        <span role="img" aria-label="Sun">
                                            ☀️
                                        </span>
                                    ) : (

                                        <span role="img" aria-label="Moon">
                                            🌙
                                        </span>
                                    )}
                                </button>
                            </li>

                            <li className="nav-item dropdown d-flex ">
                                <div className="rounded-corner-radius-16-round-2 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                    <img
                                        className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                        alt=""
                                        src="/icons2.svg"
                                    />
                                    <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                        <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                            13
                                        </div>
                                    </div>
                                </div>
                            </li>



                            <li className="nav-item dropdown pe-3">

                                <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" onClick={handleProfileClick}>
                                    <img src="/user.png" alt="Profile" className="rounded-circle" style={{ maxWidth: "50px" }} />
                                </a>

                                {/* Profile card */}
                                {showProfileCard && (
                                    <div className="profile-card">
                                        <Profilecard />

                                    </div>
                                )}

                            </li>
                        </ul>
                    </nav>


                </header>
                {isSidebarOpen && (
                    <aside id="sidebar" className={`sidebar`} style={{ height: 'auto', overflowY: 'auto', background: "rgba(242, 245, 255, 1)" }}>
                        <br />
                        <img className='mx-auto my-3' src='/user.png' alt="User" />
                        <h3 className='mx-auto fw-bold text-dark'>Mark Smith</h3>
                        <p className='mx-auto text-dark'>Admin/Staff Member</p>
                        <ul className="sidebar-nav mx-auto my-4" id="sidebar-nav">
                            <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                                <Link
                                    to="/"
                                    className="nav-link"
                                    onClick={() => handleSetActiveLink('home')}
                                    style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
                                >
                                    <Home />
                                    <span style={{ marginLeft: "15px" }}>Home</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${activeLink === 'agents' ? 'active' : ''}`}>
                                <Link
                                    to="/agentrequest"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('agents')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <People />
                                    <span style={{ marginLeft: "15px" }}>Agents Requests</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'selfapplied' ? 'active' : ''}`}>
                                <Link
                                    to="/selfapplied"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('selfapplied')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <People />
                                    <span style={{ marginLeft: "15px" }}>self Applied</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'ourmaid' ? 'active' : ''}`}>
                                <Link
                                    to="/ourmaid"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('ourmaid')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <FaRegUser />
                                    <span style={{ marginLeft: "15px" }}>Our Maids</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'plantedinterview' ? 'active' : ''}`}>
                                <Link
                                    to="/plantedinterview"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('plantedinterview')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <IoMdDocument />
                                    <span style={{ marginLeft: "15px" }}>Planed Interviews</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'access' ? 'active' : ''}`}>
                                <Link
                                    to="/access"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('access')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <FaAccessibleIcon />
                                    <span style={{ marginLeft: "15px" }}>Access</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link collapsed my-4" href="">
                                    <IoIosLogIn />
                                    <span style={{ marginLeft: "15px" }}>Login</span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                )}
            </Desktop>
            <Mobile>
                <div className="my-0 mx-[!important] absolute top-[0px] left-[0px] bg-maincolors-algawali-primary-2 shadow-[0px_2px_6px_rgba(0,_7,_38,_0.32)] w-[100%] h-[150px] flex flex-col items-start justify-start p-4 box-border gap-[8px] z-[1] text-center text-3xs text-neutral-whitepure" style={{ position: "fixed" }}>
                    <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="h-14 overflow-hidden flex flex-col items-center justify-center">
                            <img
                                className="relative w-[50.67px] h-[46.34px] overflow-hidden shrink-0"
                                alt=""
                                src="/logo-1-2.svg"
                            />
                        </div>
                        <div className="w-[154.66px] flex flex-row items-center justify-end gap-[8px]">
                            <div className="rounded-corner-radius-16-round-2 flex flex-row items-start justify-start p-3 relative gap-[10px]">
                                <img
                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                    alt=""
                                    src="/icons2.svg"
                                />
                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                        13
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-corner-radius-16-round-2 flex flex-row items-center justify-center p-3 relative gap-[10px]">
                                {/* <img
                                    className="relative w-6 h-6 overflow-hidden shrink-0 z-[0]"
                                    alt=""
                                    src="/icons3.svg"
                                /> */}
                                <BsList className="toggle-sidebar-btn " style={{ marginLeft: "0px", fontSize: "25px" }} onClick={toggleSidebar} />


                                <div className="my-0 mx-[!important] absolute top-[-1px] right-[-1px] rounded-20xl bg-maincolors-algawali-secondry-color-dark flex flex-row items-center justify-center py-1 px-2 opacity-[0] z-[1] border-[1px] border-solid border-maincolors-algawali-background-color">
                                    <div className="relative tracking-[0.02em] leading-[140%] font-medium">
                                        13
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-left text-xs text-neutral-500">
                        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[34px]">
                            <div className="flex flex-row items-start justify-start py-2 px-0">
                                <div className="relative tracking-[0.02em] leading-[136%]">
                                    Home
                                </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-2 px-0 text-base">
                                <div className="relative tracking-[0.02em]">{`>`}</div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-2 px-0 text-neutral-whitepure">
                                <div className="relative tracking-[0.02em] leading-[136%] font-medium">
                                    Agents Requests
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isSidebarOpen && (
                    <aside id="sidebar" className={`sidebar`} style={{ height: 'auto', overflowY: 'auto', background: "rgba(242, 245, 255, 1)" }}>
                        <br />
                        <img className='mx-auto my-3' src='/user.png' alt="User" />
                        <h3 className='mx-auto fw-bold'>Mark Smith</h3>
                        <p className='mx-auto'>Admin/Staff Member</p>
                        <ul className="sidebar-nav mx-auto my-4" id="sidebar-nav">
                            <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                                <Link
                                    to="/"
                                    className="nav-link"
                                    onClick={() => handleSetActiveLink('home')}
                                    style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
                                >
                                    <Home />
                                    <span style={{ marginLeft: "15px" }}>Home</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${activeLink === 'agents' ? 'active' : ''}`}>
                                <Link
                                    to="/agentrequest"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('agents')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <People />
                                    <span style={{ marginLeft: "15px" }}>Agents Requests</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'selfapplied' ? 'active' : ''}`}>
                                <Link
                                    to="/selfapplied"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('selfapplied')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <People />
                                    <span style={{ marginLeft: "15px" }}>self Applied</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'ourmaid' ? 'active' : ''}`}>
                                <Link
                                    to="/ourmaid"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('ourmaid')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <FaRegUser />
                                    <span style={{ marginLeft: "15px" }}>Our Maids</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'plantedinterview' ? 'active' : ''}`}>
                                <Link
                                    to="/plantedinterview"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('plantedinterview')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <IoMdDocument />
                                    <span style={{ marginLeft: "15px" }}>Planed Interviews</span>
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'access' ? 'active' : ''}`}>
                                <Link
                                    to="/access"
                                    className="nav-link collapsed"
                                    onClick={() => handleSetActiveLink('access')}
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    <FaAccessibleIcon />
                                    <span style={{ marginLeft: "15px" }}>Access</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link collapsed my-4" href="">
                                    <IoIosLogIn />
                                    <span style={{ marginLeft: "15px" }}>Login</span>
                                </a>
                            </li>
                        </ul>
                    </aside>
                )}
            </Mobile>
        </div>
    )
}

export default Sidebar