import React from "react";
import preloader from "../../../assets/images/preloader.svg";

export const Preloader = () => {
    return(
        <div>
            <img style={ {height: '100px', width: '100px'} } src={preloader}/>
        </div>
    )
}