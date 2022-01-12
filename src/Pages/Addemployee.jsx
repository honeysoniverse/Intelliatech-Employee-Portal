import { Link } from "react-router-dom"


const Addemployee = () => {
    return (
        <div className="Addemployee">
            <div className="form_sec">
				<div className="form_box">
					<div className="back_btn">
						<Link to="/Employee"><i className="fas fa-arrow-left"></i></Link>
					</div>
					<div className="form_box_heading">
						<h1>Employee Details</h1>
					</div>
					<div className="form_sec mt-5">
						<form>
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="email" className="form-control form_input" placeholder="First Name*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
								<div className="form-group form_group">
									<input type="password" className="form-control form_input" placeholder="Last Name*" id="exampleInputPassword1" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="email" className="form-control form_input" placeholder="Phone*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
								<div className="form-group form_group">
									<input type="password" className="form-control form_input" placeholder="Email*" id="exampleInputPassword1" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="email" className="form-control form_input" placeholder="Address*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
								<div className="form-group form_group">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example">
										<option selected>City*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
							{/* <!-- form_/inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example">
										<option selected>Application for Position*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div className="form-group form_group">
									<input type="email" className="form-control form_input" placeholder="Previous Company Name*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4 ml-1">
									<h5>Date Of Birth*</h5>
									<div className="d-flex">
										<select className="form-select form-select-sm input_select_date_of_birth" aria-label=".form-select-sm example">
											<option selected>Month</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>

										<select className="form-select form-select-sm input_select_date_of_birth" aria-label=".form-select-sm example">
											<option selected>Year</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<select className="form-select form-select-sm input_select_date_of_birth" aria-label=".form-select-sm example">
											<option selected>Day</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
									</div>
								</div>
								<div className="form-group form_group">
									<h5>Gender*</h5>
									<div className="d-flex">
										<div className="form-check form_check">
											<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
											<label className="form-check-label" for="flexRadioDefault1">
												Male
											</label>
										</div>
										<div className="form-check form_check">
											<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
											<label className="form-check-label" for="flexRadioDefault2">
												Female
											</label>
										</div>
										<div className="form-check form_check">
											<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
											<label className="form-check-label" for="flexRadioDefault2">
												Other
											</label>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="input-group upload_document_input mb-3">
								<input type="text" className="form-control" placeholder="Upload your Documents" aria-label="Recipient's username" aria-describedby="basic-addon2" />
								<div className="upload-btn-wrapper">
									<button className="btn upload_document_btn">Upload Document</button>
									<input type="file" name="myfile" />
								</div>
							</div>
							<div className="text_area_sec">
								<textarea className="textarea_input" id="w3review" name="w3review" rows="4" cols="50">
								</textarea>
							</div>
							<button type="button" className="btn btn_form_submit">SUBMIT</button>
						</form>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Addemployee
