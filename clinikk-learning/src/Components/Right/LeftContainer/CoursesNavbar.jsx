import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    {
        to:"/",
        title:"All Courses"
    },
    {
        to:"/newest",
        title:"The Newest"
    },
    {
        to:"/rated",
        title:"Top Rated"
    },
    {
        to:"/popular",
        title:"Most Popular"
    },
]

function CoursesNavbar() {
    return (
        <div>
            {links.map((link) => (
                <NavLink exact 
                style={{padding:10,textDecoration:"none",color:"#939394",fontWeight:"bold"}}
                activeStyle={{ fontWeight: "bold", color: "black" }}
                key={link.to}
                to={link.to}
                >
                    {link.title}
                </NavLink>
            ))}
        </div>
    )
}
export default CoursesNavbar