const Updateprofile = () => {
    return (
        <div className="Updateprofile" >
            <div className="tabcontentbox">
			<div className="container-fluid">
				<div className="complete_profile_main_box">
					<div className="form_box_heading">
						<h1>Update Profile</h1>
					</div>
					<div className="form_sec mt-4">
						<form>
							<div className="form_inputs">
								<div className="form-group form_group">
									<input type="email" className="form-control form_input" placeholder="ID*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="email" className="form-control form_input" placeholder="First Name*" formControlName="firstName" />
								</div>
								<div className="form-group form_group">
									<input type="text" className="form-control form_input" placeholder="Last Name*" formControlName="lastName" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="text" className="form-control form_input" placeholder="Phone*" formControlName="contactNumber" />
									<div className="invalid-feedback">
										<div>Phone is required</div>
										<div>Phone Number must be 10 digits</div>
										<div>Phone Number must be 10 digits</div>
									</div>
								</div>
								<div className="form-group form_group">
									<input type="text" className="form-control form_input" formControlName="email" placeholder="Email*" />
									<div className="invalid-feedback">
										<div >Email is required</div>
										<div >Email must be a valid email address</div>
									</div>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example">
										<option selected>Status*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
								<div className="form-group form_group">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example">
										<option selected>Reporting To*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="text" className="form-control form_input" placeholder="Reportees" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
								<div className="form-group form_group">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example">
										<option selected>Marital status*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="text_area_sec form-group form_group mr-4">
									<textarea className="textarea_input form-control form_input" rows="4" cols="50"
										placeholder="Permanent Address*" formControlName="permanentAddress"></textarea>
								</div>
								<div className="text_area_sec form-group form_group">
									<textarea className="textarea_input form-control form_input" rows="4" cols="50" placeholder="Current Address*"
										formControlName="currentAddress"
									></textarea>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="text" className="form-control form_input" placeholder="Current city*"
										formControlName="currentCity" />
								</div>
								<div className="form-group form_group">
									<input type="text" className="form-control form_input" placeholder="PostalCode*" formControlName="postalCode" />

								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="email" className="form-control form_input" placeholder="Employee Code*"
										formControlName="employeeCode" />
									<div className="invalid-feedback">
										<div>Employee Code is required</div>
									</div>
								</div>
								<div className="form-group form_group ">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example"
										formControlName="employeeDesignation">
										<option>Employee Designation*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>

								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group">
									<input type="text" className="form-control form_input" placeholder="Previous Company Name*"
										formControlName="previousCompanyName" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4">
									<input type="text" className="form-control form_input" placeholder="Education*" formControlName="education" />
								</div>

								<div className="form-group form_group">
									<select className="form-select form-select-sm input_select" aria-label=".form-select-sm example"
										formControlName="employeeRole">
										<option>Employee Role*</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group mr-4 ml-1">
									<h5>Date Of Joining*</h5>
									<input type="date" name="birthday" className="form-control form_input" formControlName="doj" />
								</div>
								<div className="form-group form_group mr-4 ml-1">
									<h5>Date Of Birth*</h5>
									<input type="date" name="birthday" className="form-control form_input" formControlName="dob" />
								</div>
								<div className="form-group form_group">
									<h5>Gender*</h5>
									<div className="d-flex">
										<div className="form-check form_check">
											<input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1"
												formControlName="gender" value="male" checked />
											<label className="form-check-label" for="flexRadioDefault1">
												Male
											</label>
										</div>
										<div className="form-check form_check">
											<input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2"
												formControlName="gender" value="female" />
											<label className="form-check-label" for="flexRadioDefault2">
												Female
											</label>
										</div>
										<div className="form-check form_check">
											<input className="form-check-input" type="radio" name="gender" id="flexRadioDefault3"
												formControlName="gender" value="other" />
											<label className="form-check-label" for="flexRadioDefault3">
												Other
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="form_inputs">
								<div className="form-group form_group ml-1">
									<h5>Anniversary Date*</h5>
									<input type="date" name="birthday" className="form-control form_input" formControlName="doj" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form_group mr-4">
									<h5>Family Information(at least 1)*</h5>
									<input type="email" className="form-control form_input mb-3" placeholder="Name*" id="exampleInputEmail1" aria-describedby="emailHelp" />
									<input type="email" className="form-control form_input mb-3" placeholder="Relationship*" id="exampleInputEmail1" aria-describedby="emailHelp" />
									<input type="email" className="form-control form_input" placeholder="Contact Number*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
								<div className="form_group">
									<h5>Reference(At least 2 apart from family) *</h5>
									<input type="email" className="form-control form_input mb-3" placeholder="Name*" id="exampleInputEmail1" aria-describedby="emailHelp" />
									<input type="email" className="form-control form_input mb-3" placeholder="Relationship*" id="exampleInputEmail1" aria-describedby="emailHelp" />
									<div className="form_inputs">
										<input type="email" className="form-control form_input mb-3 mr-3" placeholder="Contact Number*" id="exampleInputEmail1" aria-describedby="emailHelp" />
										<input type="email" className="form-control form_input" placeholder="Email ID*" id="exampleInputEmail1" aria-describedby="emailHelp" />
									</div>
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="form-group form_group">
									<input type="email" className="form-control form_input" placeholder="Referred By*" id="exampleInputEmail1" aria-describedby="emailHelp" />
								</div>
							</div>
							{/* <!-- form_inputs-end --> */}
							<div className="form_inputs">
								<div className="input-group upload_document_input mb-3 mr-4">
									<input type="text" className="form-control" placeholder="Upload your Documents" aria-label="Recipient's username" aria-describedby="basic-addon2" />
									<div className="upload-btn-wrapper">
										<button className="btn upload_document_btn">Adhaar Upload</button>
										<input type="file" name="myfile" />
									</div>
								</div>
								<div className="input-group upload_document_input mb-3 mr-4">
									<input type="text" className="form-control" placeholder="Upload your Documents" aria-label="Recipient's username" aria-describedby="basic-addon2" />
									<div className="upload-btn-wrapper">
										<button className="btn upload_document_btn">PAN Upload</button>
										<input type="file" name="myfile" />
									</div>
								</div>
								<div className="input-group upload_document_input mb-3">
									<input type="text" className="form-control" placeholder="Upload your Documents" aria-label="Recipient's username" aria-describedby="basic-addon2" />
									<div className="upload-btn-wrapper">
										<button className="btn upload_document_btn">Others Upload</button>
										<input type="file" name="myfile" />
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn_form_submit">SUBMIT</button>
						</form>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default Updateprofile
