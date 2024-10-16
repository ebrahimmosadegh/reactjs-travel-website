import React from "react";
import SignUpForm from "../SignUp/SignUpForm";
import '../../App.css'
function SignUp() {
    return(
        <div className="sign-up" style={{backgroundImage:`url(image/München.jpg)`}}>
            <SignUpForm />
        </div>
    )
    
}

export default SignUp;