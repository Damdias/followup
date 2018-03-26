import React from "react";

let naviStyle = {
    headerRow:{
        backgroundColor:'#f4f4f4',
        height:40
    }
}

let NaviContainer = (props)=>{
    return (
        <div style={naviStyle.headerRow}>
             {props.children}
        </div>
    )
}

export default NaviContainer;