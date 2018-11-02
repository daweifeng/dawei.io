import React from 'react';
import "../styles/header.css";
import Selector from "./Selector";

export default () => {

    return(
        <div className="header">
            <div className="header-name">Dawei Feng</div>
            <div className="header-selectors">
            <Selector expand={false} name={"Project"} />
            </div>
        </div>
    );
}
