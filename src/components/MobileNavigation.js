import React from "react";
import {mobileNavigation} from "../contans/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
    return (
        <section className="lg:hidden bg-neutral-600 h-14 flex items-center fixed bottom-0 w-full">
            <div className="flex items-center justify-between h-full w-full">
                {mobileNavigation.map((nav) => { 
                    return (
                        <NavLink
                            key={nav.label + "mobileNavigation"}
                            to={nav.href}
                            className={({ isActive }) =>
                                `px-3 flex h-full flex-col justify-center items-center text-neutral-400 ${
                                    isActive ? "text-white" : ""
                                }`
                            }
                        >
                            <div className="text-3xl">{nav.icon}</div>
                            <p className="text-sm">{nav.label}</p>
                        </NavLink>
                    );
                })}
            </div>
        </section>
    );
};

export default MobileNavigation;
