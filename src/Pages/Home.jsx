/* eslint-disable jsx-a11y/alt-text */
import { data } from "jquery"
import { useEffect , useState} from "react"
import Loading from "../components/Loading"


const Home = () => {
    const [users,setUsers] = useState([])
    const [holidays,setHolidays] = useState([])
    const [birthday,setBirthday] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const TOKEN = localStorage.getItem("token")
    const baseURL = "https://intelliaportal.herokuapp.com"
    const TOKEN_holiday= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGRiZGZmZWEzNjYzOWMxZmMyMjgwZSIsImlhdCI6MTYzODUxNjMyMywiZXhwIjoxNjQ2MjkyMzIzfQ.pyJ7tPpjBo4QmNwrN70LhLyxq-FXl2Yv2v9KWL_yX2U"
    const TOKEN_birthday= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGRiZGZmZWEzNjYzOWMxZmMyMjgwZSIsImlhdCI6MTYzODUxNjMyMywiZXhwIjoxNjQ2MjkyMzIzfQ.pyJ7tPpjBo4QmNwrN70LhLyxq-FXl2Yv2v9KWL_yX2U"
    const TOKEN_applyLeave= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGRiZGZmZWEzNjYzOWMxZmMyMjgwZSIsImlhdCI6MTYzODUxNjMyMywiZXhwIjoxNjQ2MjkyMzIzfQ.pyJ7tPpjBo4QmNwrN70LhLyxq-FXl2Yv2v9KWL_yX2U"
    const leaveData = {
        "employeeId":"614dbdffea36639c1fc2280f",
        "employeeCode":"041",
        "reportingto":"hr@intelliatech.com",
        "leaveType":"Sick Leave",
        "teamemailid":"jitendralodhi@gmail.com",
        "leaveFrom":"2021-04-19T00:00:00.000+00:00",
        "leaveTo":"2021-04-21T00:00:00.000+00:00",
        "leaveReason":"High Fever"
        }

//Fetch Department Members API from Node
 useEffect(()=>{
     
    fetch('https://intelliaportal.herokuapp.com/api/v1/employees/getDepartmentMembers', {
        headers: { "Authorization": `Bearer ${TOKEN}` },
    })
        .then(resp => resp.json())
        .then(json => {
            setUsers(json.deptMembersData)
        }) },[])


//Fetch Upcoming Holidays API from Node
useEffect(()=>{
    fetch('https://intelliaportal.herokuapp.com/api/v1/holidays/getMonthlyHolidays', {
        headers: { "Authorization": `Bearer ${TOKEN_holiday}` }
    })
        .then(resp => resp.json())
        .then(json => {
            setHolidays(json.holidayData)
        }) },[])

        useEffect(()=>{
            fetch('https://intelliaportal.herokuapp.com/api/v1/employees/getEmployeeByDOB', {
                headers: { "Authorization": `Bearer ${TOKEN_birthday}` }
            })
                .then(resp => resp.json())
                .then(json => {
                    setBirthday(json.dobMembersData)
                    setIsLoading(false)
                }) },[])
                 
                

//POST method for Leave Request API 
const applyLeave = async () => {
    const response =  await fetch('https://intelliaportal.herokuapp.com/api/v1/employees/employeeLeaves', {
        headers: { "Authorization": `Bearer ${TOKEN_applyLeave}`, "Content-Type":"application/json"},
        method:'POST',  
        body: JSON.stringify(leaveData),
    })
    const data = await response.json()
}

//set check-in time to localStorage
    useEffect(()=>{
        if(!localStorage.getItem('hours')){const hours = new Date().getHours();
            localStorage.setItem("hours", JSON.stringify(hours))
            const min = new Date().getMinutes();
            localStorage.setItem("min", JSON.stringify(min))} 
        
    },[])

    //Function for removing Check-In time from localStorage at checkout
    const checkOut = () => {
        localStorage.setItem('checkout','checkout')
        localStorage.removeItem('hours')
        localStorage.removeItem('min')
    }
//  Show Log-Time Hours and Minutes                                                                     
    let curHours = new Date().getHours();
    let curMin = new Date().getMinutes();
    let getHours = JSON.parse(localStorage.getItem('hours'));
    let getMin = JSON.parse(localStorage.getItem('min'))
    let hrs2Min_stor = getHours * 60
    let totalMin_stor = hrs2Min_stor + getMin
    let hrs2Min_cur = curHours * 60
    let totalMin_cur = hrs2Min_cur + curMin
    let logHours = ((totalMin_cur - totalMin_stor)>=60)? (Math.floor((totalMin_cur - totalMin_stor)/60)) : 0
    let logMin = Math.abs(totalMin_cur - totalMin_stor - (logHours * 60))
    let logTime = () => {
        return ( 
            <>
            <p>{logHours} Hrs {logMin} Mins</p>
            </>
        )
    }

    // useEffect(() => {
    //     if(isLoading===true) {<Loading />}
    //     else return null
    // },[])


    return (
        (isLoading) ?  <Loading /> :
        <div className="Homepage container-fluid">
            <div class="tabcontentbox">
            <div class="checkout_sec">
                <div class="checkout_btn_sec">
                    <button type="button" class="btn btn_checkout" onClick={checkOut}><span><i class="far fa-clock"></i></span>
                        Check-out</button>
                    <p>Check-In time - {localStorage.getItem('hours')}: {localStorage.getItem('min')}</p>
                </div>
                <div class="apply_for_leave_sec">
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" class="btn btn_apply_for_leave mr-2" data-toggle="modal"
                        data-target="#exampleModal">Apply For Leave</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header modal_header">
                                    <h5 class="modal-title" id="exampleModalLabel">Apply Leave</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="modal_form_sec">
                                        <h1>Leave</h1>
                                        <form>
                                            <div class="form_inputs">
                                                <div class="form-group form_group mr-4">
                                                    <select class="form-select form-select-sm input_select"
                                                        aria-label=".form-select-sm example">
                                                        <option selected>Employee ID</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div class="form-group form_group">
                                                    <input type="password" class="form-control form_input"
                                                        placeholder="Reporting to" id="exampleInputPassword1" />
                                                </div>
                                            </div>
                                            {/* .<!-- form_inputs-end --> */}
                                            <div class="form_inputs">
                                                <div class="form-group form_group mr-4">
                                                    <select class="form-select form-select-sm input_select"
                                                        aria-label=".form-select-sm example">
                                                        <option selected>Leave type</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div class="form-group form_group">
                                                    <input type="password" class="form-control form_input"
                                                        placeholder="Team Email ID" id="exampleInputPassword1" />
                                                </div>
                                            </div>
                                            {/* <!-- form_inputs-end --> */}
                                            <h2>Date</h2>
                                            <div class="form_inputs">
                                                <div class="form-group form_group mr-4">
                                                    <input type="date" class="form-control form_input"
                                                        placeholder="From" id="exampleInputPassword1" />
                                                </div>
                                                <div class="form-group form_group">
                                                    <input type="date" class="form-control form_input"
                                                        placeholder="To" id="exampleInputPassword1" />
                                                </div>
                                            </div>
                                            {/* <!-- form_inputs-end --> */}
                                            <div class="text_area_sec">

                                                <textarea class="textarea_input" rows="4" cols="50"
                                                    placeholder="Reason for leave"></textarea>
                                            </div>
                                            <button type="button" class="btn btn_form_submit">SUBMIT</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button type="button" class="btn btn_log_time mr-4" onClick={logTime}>Log Time</button> */}
                    <button type="button" class="btn btn_log_time mr-4" data-toggle="modal" data-target=".bd-example-modal-sm">Log Time</button>
<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-log modal-sm">
      <div class = "modal-title log-title"><h3>Log Time</h3></div>
    <div class="modal-content log-content log-content">
      Total Time: {logTime()}
    </div>
  </div>
</div>                </div>
            </div>
            {/* <!-- checkout_sec-end --> */}
            <div class="cards_sec mt-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>Birthdays <span>{birthday.length}</span></h1>
                                </div>
                                <div class="birthday_box_inner" >
                                
                               { birthday.map((data)=> 
                              
                               <div class="birthday_box_inner_content">
                                   
                                        <div>
                                            <img src={baseURL + data.avatar} class="img_birthday_box_profile img-fluid"  />
                                        </div>
                                        <div class="birthday_box_heading ml-4">
                                            <h1>{data.firstName} {data.lastName}</h1>
                                            <h2>{data.dob.slice(0,10)}</h2>
                                            <h3>{data.employeeDesignation}</h3>
                                            <h3>{data.gender}</h3>
                                            <h4><span><i class="fas fa-mobile-alt"></i></span><span>{data.contactNumber}</span></h4>
                                        </div>
                                    </div>)}
                                
                                    
                                   
                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>New Hire</h1>
                                </div>
                                <div class="birthday_box_inner">
                                    <div class="birthday_box_inner_content">
                                        <div>
                                            <img src="img/employee_pic.png" class="img_birthday_box_profile" />
                                        </div>
                                        <div class="birthday_box_heading ml-4">
                                            <h1><span>CC0004 -</span> Dinesh</h1>
                                            <h2>Consultant Operator</h2>
                                            <h3>Banglore</h3>
                                            <h4><span><i class="fas fa-mobile-alt"></i></span> +919988776655</h4>
                                        </div>
                                    </div>
                                    {/* <!-- birthday_box_inner_content-end --> */}
                                    <div class="birthday_box_inner_content">
                                        <div>
                                            <img src="img/employee_pic.png" class="img_birthday_box_profile" />
                                        </div>
                                        <div class="birthday_box_heading ml-4">
                                            <h1><span>CC0004 -</span> Dinesh</h1>
                                            <h2>Consultant Operator</h2>
                                            <h3>Banglore</h3>
                                            <h4><span><i class="fas fa-mobile-alt"></i></span> +919988776655</h4>
                                        </div>
                                    </div>
                                    {/* <!-- birthday_box_inner_content-end --> */}
                                    <div class="birthday_box_inner_content">
                                        <div>
                                            <img src="img/employee_pic.png" class="img_birthday_box_profile" />
                                        </div>
                                        <div class="birthday_box_heading ml-4">
                                            <h1><span>CC0004 -</span> Dinesh</h1>
                                            <h2>Consultant Operator</h2>
                                            <h3>Banglore</h3>
                                            <h4><span><i class="fas fa-mobile-alt"></i></span> +919988776655</h4>
                                        </div>
                                    </div>
                                    {/* <!-- birthday_box_inner_content-end --> */}
                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                    </div>.
                    {/* <!-- row-end --> */}
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>Department Members <span>{users.length}</span></h1>
                                </div>
                                <div class="birthday_box_inner">


                                    {/* ========================  */}

                                    {/* <!-- row-end --> */}
                                     {
                                        users.map((data) => {
                                            return (
                                                <div class="row">
                                                    <div class="col-lg-8">
                                                        <div class="employee_list">
                                                            <div>
                                                                <img src={baseURL + data.avatar} class="img-fluid img_birthday_box_profile" alt="profile_pic" style={{'border-radius':'8px', 'min-width':'90px'}} />
                                                            </div>
                                                            <div class="employee_list_heading_heading ml-3">
                                                                <h1><span>{data._id}-</span> <br /> {data.firstName}  {data.lastName}</h1>
                                                                <h2><span><i class="fas fa-mobile-alt"></i></span><span> {data.contactNumber}</span> </h2>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    } 


                                    {/* ============================  */}


                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>Upcoming Holidays <span>{holidays.length}</span></h1>
                                </div>
                                <div class="birthday_box_inner">
                                    { holidays.map((data) => {
                                        return (
                                            
                                            <div class="upcoming_holidays_heading mt-0">
                                            <div class="flex_1">
                                                <h1>{data.occasion.toUpperCase()}</h1>
                                            </div>
                                            <div>
                                                <h2>{(data.holidayDate).slice(0,10)}</h2>
                                                <h3>{data.holidayDay}</h3>
                                            </div>
                                        </div>
                                        )
                                    })}

                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                    </div>
                    {/* <!-- row-end --> */}
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>Leave Report</h1>
                                </div>
                                <div class="birthday_box_inner">
                                    <div class="leave_report_heading">
                                        <div>
                                            <div class="leave_circle">2</div>
                                        </div>
                                        <div>
                                            <h1>Absent</h1>
                                        </div>
                                    </div>
                                    {/* <!-- leave_report_heading-ends --> */}
                                    <div class="leave_report_heading mt-3">
                                        <div>
                                            <div class="leave_circle">0</div>
                                        </div>
                                        <div>
                                            <h1>Leave Without Pay</h1>
                                        </div>
                                    </div>
                                    {/* <!-- leave_report_heading-ends --> */}
                                    <div class="leave_report_heading mt-3">
                                        <div>
                                            <div class="leave_circle">0</div>
                                        </div>
                                        <div>
                                            <h1>On Tour</h1>
                                        </div>
                                    </div>
                                    {/* <!-- leave_report_heading-ends --> */}
                                    <div class="leave_report_heading mt-3">
                                        <div>
                                            <div class="leave_circle">0</div>
                                        </div>
                                        <div>
                                            <h1>Privillage Leave</h1>
                                        </div>
                                    </div>
                                    {/* <!-- leave_report_heading-ends --> */}
                                    <div class="leave_report_heading mt-3">
                                        <div>
                                            <div class="leave_circle">0</div>
                                        </div>
                                        <div>
                                            <h1>Work From Home</h1>
                                        </div>
                                    </div>
                                    {/* <!-- leave_report_heading-ends --> */}
                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>Favorites</h1>
                                </div>
                                <div class="birthday_box_inner">
                                    <div class="favorites_content">
                                        <img src="img/no_favorite.png" class="img_nofavorite" />
                                        <h1>No Favorites Found</h1>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                    </div>
                    {/* <!-- row-end --> */}
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="birthday_box">
                                <div class="birthday_box_header">
                                    <h1>Request For Approval</h1>
                                </div>
                                <div class="birthday_box_inner">
                                    <div class="favorites_content">
                                        <img src="img/no_favorite.png" class="img_nofavorite" />
                                        <h1>No Request Found</h1>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- birthday_box-end --> */}
                        </div>
                    </div>
                    {/* <!-- row-end --> */}
                </div>
            </div>
            {/* <!-- cards_sec-end --> */}
        </div>
        </div>
    )
}

export default Home
