import React from "react"
import $, { data } from 'jquery';
import { Link, Navigate } from 'react-router-dom'
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from 'formik'
import * as Yup from "yup"



const Dashboard = () => {


    const [baseurl, setbaseurl] = useState("https://intelliaportal.herokuapp.com")
    const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
    const [Token , token] = useState(localStorage.getItem('token'))

    const actv = () => {
        $('.dropdown_onboarding').hover(function () {

            $('.dropdown-menu-onboarding').toggleClass('show');

        });

    }

    const openBox = () => {
        $('.dropdown_self_service').hover(function () {

            $('.dropdown-menu-self-service').toggleClass('show');
        });
    }

    const openNotification = () => {
        $('.dropdown_notification').click(function () {

            $('.dropdown-menu-notification').toggleClass('show');

        });
        console.log("it is calling");

    }
    const reduceSize = () => {

        $('.menu_icon').click(function () {
            var $this = $('#sideDiv');
            if ($this.hasClass('red')) {
                $('#sideDiv').removeClass('red');
            }
            else {
                $('#sideDiv').addClass('red');
            }
        });
        console.log("it is calling");
    }

    const destroy = () => {
        localStorage.clear();
        window.location.reload()
    }

     //schema for form validation 
     const validate = Yup.object({
        first_name: Yup.string()
            .required("first name is required.....!"),

        last_name: Yup.string()
            .required("last name is required.....!"),

        email: Yup.string().email()
            .required("Please provide email.....!"),

        phone: Yup.number()
            .required("provide valid phone Number.....!")

    })



    return (

        
        <Formik initialValues={{ first_name: "", last_name: "", email: "", phone: "" }}


            validationSchema={validate}
            onSubmit={(values) => {
//                 alert(JSON.stringify(values, null, 2));
                console.log(values)

                var userdata = values
                console.log(userdata)
                fetch("http://localhost:8000/api/v1/employees/onboarding", {
                    method: 'post',
                    headers: { "Authorization": `Bearer ${Token}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify(userdata)
                }).then(response => response.json()).then(response => {
                    console.log(response.status);
                    if (response.status == "Success") {
                        alert("Successful is changed from Honey.....!")
                    }

                    else {
                        alert("Details not saved....!")
                    }

                });

            }

            }>
            {(formik) => (
                <div>


                    <div className="header_top">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-2 col-md-4">
                                    <Link to="/Home"><img src="img/logo.png" className="img_logo" /></Link>
                                </div>
                                <div className="col-lg-6 col-md-2 col-2 menu_mobile">
                                    <a onClick={reduceSize} href="#" className="menu_icon"><i className="fas fa-bars" ></i></a>

                                </div>
                                <div className="col-lg-4 col-md-6 col-10">
                                    <div className="header_right_content">
                                        <div className="notification_icon dropdown dropdown_notification">
                                            <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false" onMouseEnter={openNotification}>
                                                <img src="img/notification.png" className="img_notification_icon" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-notification" aria-labelledby="navbarDropdown">
                                                <div className="notification_header">
                                                    <h1>Notification <span>Mark all as read</span></h1>
                                                </div>
                                                <div className="notification_profile_sec">
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />

                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                    <div className="notification_profile_inner">
                                                        <div>
                                                            <img src="img/employee_pic.png" className="img_notification_profile" />
                                                        </div>
                                                        <div className="notification_profile_heading ml-3">
                                                            <h1>Rajneet has approved your request.</h1>
                                                            <h2>02 April 11:00 AM</h2>
                                                        </div>
                                                    </div>
                                                    {/* <!-- notification_profile_inner-end --> */}
                                                </div>
                                            </div>
                                        </div>


                                        <div class="dropdown">
                                            {
                                                user.map((data) => {

                                                    return (
                                                        <div class="profile_heading">
                                                            <img src={baseurl + data.avatar} class="img_user mr-3 ml-4 " style={{ borderRadius: '25px' }} />

                                                            <h1>{data.firstName} {data.lastName}</h1>

                                                        </div>
                                                    )
                                                })
                                            }

                                            {
                                                user.map((data) => {

                                                    return (

                                                        <div class="dropdown-content">
                                                            <div class="user_dropdown_main">
                                                                <div class="user_profile_sec">
                                                                    <div class="user_account_sec">
                                                                        <img src={baseurl + data.avatar} class="img_user_profile_pic" style={{ borderRadius: '45px', width: '25%' }} />
                                                                        <h1>{data.firstName} {data.lastName} </h1>
                                                                        <h2>{data.email}</h2>
                                                                        <h3>{data.employeeDesignation}</h3>
                                                                        <div class="account_btn_main">
                                                                            <button type="button" class="btn btn_my_account"> <Link to="/profile"> My Account </Link></button>
                                                                            <button type="button" class="btn btn_sign_out" onClick={destroy} >  Sign Out </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- user_profile_sec-end --> */}
                                                                <div class="company_name_sec">
                                                                    <a href="#">Intelliatech Solutions PVT LTD</a>
                                                                </div>
                                                                <div class="themes_sec">
                                                                    <h1>Themes</h1>
                                                                    <div class="menu_color_main">
                                                                        <div class="menu_color_heading">
                                                                            <h1>Menu Color</h1>
                                                                        </div>
                                                                        <div class="on_off_btn">
                                                                            <label class="switch">
                                                                                <input type="checkbox" />
                                                                                <span class="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="menu_color_main">
                                                                        <div class="menu_color_heading">
                                                                            <h1>Theme Color</h1>
                                                                        </div>
                                                                        <div class="colors_theme">
                                                                            <div class="color_circle"></div>
                                                                            <div class="color_circle blue_color"></div>
                                                                            <div class="color_circle"></div>
                                                                            <div class="color_circle"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- themes_sec-end --> */}
                                                                <div class="help_sec">
                                                                    <h1><span class="mr-2"><i class="fas fa-question-circle"></i></span> Help</h1>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    )
                                                })
                                            }




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    {/* navbar end */}

                    <div className="dashboard_sidebar" id="sideDiv">

                        <ul className="mt-lg-3">
                            <li className=" ">
                                <Link to="/Home">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/home.png" className="img_list_icon" /></span> Home</h6>
                                    </div>
                                </Link>
                            </li>

                            <li className="dropdown dropdown_self_service">
                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="sidebartabs" onMouseEnter={openBox}>
                                        <h6><span className="pr-2"><img src="img/user.png" className="img_list_icon" /></span> Self
                                            Service</h6>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-self-service" aria-labelledby="navbarDropdown">
                                    <li><Link to="/Profile" className="dropdown-item" >Profile </Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Team</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Calendar</a></li>
                                </ul>
                            </li>

                            <li className="dropdown dropdown_onboarding " onMouseEnter={actv}>
                                <Link to="/Onboarding" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/on_boarding.png" className="img_list_icon " /></span> On Boarding</h6>
                                    </div>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-onboarding" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalLong">Initiate On Boarding</a>

                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">On Boarding Request</a></li>
                                </ul>
                            </li>

                            {/* <!-- Modal --> */}
                            <div class="modal fade onboarding_modal" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLongTitle">Initiate On Boarding</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <Form class="on_board_form" >
                                                <div class="form_inputs">
                                                    <div class="form-group form_group mr-4">
                                                        <Field name="first_name" type="text" class="form-control" autocomplete="off" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" ref={c => this.first_name = c} />
                                                        <div>
                                                            <ErrorMessage name='first_name' />
                                                        </div>
                                                    </div>
                                                    <div class="form-group form_group">
                                                        <Field name="last_name" type="text" class="form-control" autocomplete="off" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" ref={c => this.last_name = c} />
                                                        <div>
                                                            <ErrorMessage name='last_name' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form_inputs">
                                                    <div class="form-group form_group mr-4">
                                                        <Field name="email" type="email" class="form-control" id="exampleInputPassword1" placeholder="Email" ref={c => this.email = c} />
                                                        <div> <ErrorMessage name="email" />  </div>
                                                    </div>

                                                    <div class="form-group form_group">
                                                        <Field name="phone" type="phone" class="form-control" id="exampleInputPassword1" placeholder="Phone" ref={c => this.phone = c} />
                                                        <ErrorMessage name='phone' />

                                                    </div>
                                                </div>

                                                <button type="submit" class="btn btn_on_boarding_form_submit"   >Submit</button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>



                            </div>




                            <li>
                                <Link to="/Updateprofile">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/complete_profile.png" className="img_list_icon" /></span>
                                            Update Profile</h6>
                                    </div>
                                </Link>
                            </li>

                            {/* <li> */}
                            <li>
                                <a href="#">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/leave_tracker.png" className="img_list_icon" /></span> Leave Tracker</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/clock.png" className="img_list_icon" /></span> Time Tracker</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/Attendance.png" className="img_list_icon" /></span> Attendance</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/files.png" className="img_list_icon" /></span> Files</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/Organization.png" className="img_list_icon" /></span> Organization</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Link to="/Employee">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/Employees.png" className="img_list_icon" /></span> Employees</h6>
                                    </div>
                                </Link>
                            </li>
                            <li className="dropdown dropdown_sepration">
                                <a href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/separation.png" className="img_list_icon" /></span> Separation</h6>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-separation" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Separation Policy</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Initiate Separation</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="sidebartabs">
                                        <h6><span className="pr-2"><img src="img/More.png" className="img_list_icon" /></span> More</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>




                    </div>
                </div>

            )}
        </Formik>
    )
}

export default Dashboard
