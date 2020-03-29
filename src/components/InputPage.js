import React from "react";
import { MDBInput } from "mdbreact";

const InputPage = () => {
  return (
    <div className="form-group">
     <MDBInput label="Your email" size="lg" />
     
     <MDBInput label="Password" size="sm" />
    </div>
  );
}

export default InputPage;