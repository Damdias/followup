import React from "react";

let navicss = {
    menuBar :{
        listStyleType:'none',
        margin:0,
        padding:0,
        position:'relative'
    }
}
let NaviList = (props)=>{
    return (
        <ul style={navicss.menuBar} className="menu" >
            <li>
                <a className="menu-item">Recent Jobs</a>
            </li>
            <li>
                <a className="menu-item">Old Jobs</a>
            </li>
        </ul>
    )
}

export default NaviList;