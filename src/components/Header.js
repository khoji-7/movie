import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";
import {NavLink, useNavigate, Link} from "react-router-dom";
import { navigation } from "../contans/navigation";
import {IoSearch} from "react-icons/io5";



const Header = () => {
    
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate()
    useEffect(()=>{ 
        if (searchInput) {
           navigate(`/search?q=${searchInput}`)
        }
    },[searchInput])

    const handleSubmit = (e) => {
        e.preventDefault()
    } 

    return (
        <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-70 z-40">
            <div className="container mx-auto px-3 flex items-center h-full">
                <Link to={'/'}>
                    <img src={logo} alt="" width={120} />
                </Link>
                <nav className=" hidden lg:flex flex items-center gap-3 px-2">
                    {navigation.map((nav, index) => {
                        return (
                            <div>
                                <NavLink
                                    key={nav.label}
                                    to={nav.href}
                                    className={({isActive}) =>
                                        `px-3 hover:text-neutral-100 flex items-center gap-2 ${isActive && `text-neutral-100 text-lg`}`
                                    }
                                >   <div>
                                    {nav.icon}
                                </div>
                                    {nav.label}
                                </NavLink>
                            </div>
                        );
                    })}
                </nav>
                <div className="ml-auto flex items-center gap-5">
                    <form className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="bg-transparent px-4 py-2 outline-none"
                            onChange={(e)=>setSearchInput(e.target.value)}
                            value={searchInput} 
                            onSubmit={handleSubmit}
                        />
                        <button className="text-2xl text-white">
                            <IoSearch />
                        </button>
                    </form>

                    <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                        <img src={userIcon} alt="" width="w-full h-full " />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
