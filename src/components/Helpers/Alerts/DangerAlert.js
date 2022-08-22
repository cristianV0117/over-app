import React from "react";
import { MDBAlert } from "mdbreact";

const DangerAlert = ({props}) => {
    return (
        <MDBAlert color="danger" >
            {props}
        </MDBAlert>
    )
}

export default DangerAlert