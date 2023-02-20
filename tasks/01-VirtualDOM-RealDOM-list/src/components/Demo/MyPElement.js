import React from "react";

const MyPElement = props => {
    console.log('P element')
    return (
        <p>
            {props.children}
        </p>
    )
}

export default MyPElement