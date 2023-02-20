import React from "react";
import MyPElement from "./MyPElement";

const DemoOutput = props => {
    console.log('Demo output')
    return (
        <MyPElement>{props.show ? 'This is new!' : ''}</MyPElement>
    )
}

export default React.memo(DemoOutput)
// export default DemoOutput