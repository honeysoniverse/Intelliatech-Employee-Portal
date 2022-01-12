/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-cond-assign */
/* eslint-disable no-func-assign */
import React, { useRef } from 'react'
import { useState } from 'react'
import EyeIcon from '../components/EyeIcon';



export default function Login() {

    const Email = useRef(null);
  const Password = useRef(null);
  const [login ,setLogin] = useState(false) 
  const [errorMsg,setErrorMsg]= useState("")
  const [showPassword, setShowPassword] = useState(false) 
 
  const loginUser = async (e) => {
    e.preventDefault();
    
    var userdata = {
        email: Email.current.value,
        password: Password.current.value
    }
    const response = await fetch("https://intelliaportal.herokuapp.com/api/v1/auth/login", {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userdata)
    })
    const userData=  await response.json();
        if (userData.status === "Success") {
            setLogin(true)
            setTimeout(() => {
                localStorage.setItem('token', userData.accessToken)
                localStorage.setItem('user', JSON.stringify(userData.employeeData))
            }, 50); 
        }
        else {
            setErrorMsg("Incorrect credentials entered!")
        }
}

 if(login === true) {
     setTimeout(()=>{
        window.location.reload()
     },50)
  }
 
  const handleSetShowPassword = () => {
       setShowPassword(!showPassword)
}
    return (
           <div>
<div className="login_main_bg">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
                <img src="img/logo.png" className="img-fluid" />
            </div>
            <div className="col-lg-8">
                <div className="login_box">
                    <div className="admin_login_heading p-4">
                        <h1>Admin Login</h1>
                        <h2>Welcome Back, Please Login to your account</h2>
                        <div className="form_sec">
                            <form onSubmit={loginUser}>
                            <div className="form-group">
                                <input type="text" name="email" placeholder="Email" ref={Email} className="form-control" />
                                {/* <ErrorMessage name="Email"/> */}
                            </div>
                            <div className="form-group">
                                <input name="password" type={(showPassword)?"text":"password"} placeholder="Password" ref={Password}  className="form-control"  /><EyeIcon handleSetShowPassword= {handleSetShowPassword}/> 
                                {/* <ErrorMessage name="Email"/> */}
                            </div>

                                <div className="remember_heading d-lg-flex">
                                    <div className="form-group form-check remember_me flex_1">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                    <div>
                                        <a href="#">Forgot password.?</a>
                                    </div>
                                </div>
                                <button className="btn btn_signin">SIGN IN</button>
                              <div>
                                  <label htmlFor="">{errorMsg}</label>
                              </div>
                            </form>

                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/owl.carousel.min.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>
<script type="text/javascript" src="js/jquery.scrollTo.min.js"></script>
<script type="text/javascript" src="js/all.js"></script>






</div>
            

        
    )
}


