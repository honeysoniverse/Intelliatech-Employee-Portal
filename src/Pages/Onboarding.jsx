const Onboarding = () => {
    return (
        <div className="Onboarding">
            <div className="tabcontentbox ">
			<div className="table_sec">
				<div className="table_header">
					<div className="table_header_heading d-lg-flex w-100">
						<div className="flex_1 d-flex align-items-center">
							<h1>On Boarding Request</h1>
						</div>
					</div>
				</div>
				{/* <!-- table_header-end --> */}
				<div className="search_sec">
					<div className="input-group search_bar_width">
						<input type="text" className="form-control top_search_bar" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
						<div className="input-group-append">
							<span className="search_icon_input" id="basic-addon2"><i className="fas fa-search"></i></span>
						</div>
					</div>
				</div>.
				{/* <!-- search_sec-end --> */}
				<div className="table_box">
					<table>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Contact</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
						<tr>
							<td>Kaushal</td>
							<td>Devangan</td>
							<td>kaushalxyz@gmail.com</td>
							<td>9988776655</td>
							<td>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Select</option>
									<option value="1">Draft</option>
									<option value="2">Created</option>
									<option value="3">Pending</option>
									<option value="4">Active</option>
								</select>
							</td>
							<td>
								{/* <!-- Button trigger modal --> */}
								<a href="#" className="action_icons" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-eye"></i></a>
								{/* <!-- Modal --> */}
								<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className="modal-header modal_header">
												<h5 className="modal-title" id="exampleModalLabel">Candidate Details</h5>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												<div className="employee_details_section">
													<div className="row">
														<div className="col-lg-5 col-md-5 col-5 div_border">
															<div className="employee_details_section_heading">
																<h1>Name :</h1>
																<h1>Email :</h1>
																<h1>Phone :</h1>
																<h1>Address :</h1>
																<h1>City :</h1>
																<h1>Application for Position :</h1>
																<h1>Previous Company Name :</h1>
																<h1>Date Of Birth :</h1>
															</div>
														</div>
														<div className="col-lg-7 col-md-7 col-7">
															<div className="employee_details_section_heading">
																<h2>Kaushal Devangan</h2>
																<h2>kaushalxyz@gmail.com</h2>
																<h2>9988776655</h2>
																<h2>78, New Palasia Indore MP</h2>
																<h2>Indore</h2>
																<h2>Android Developer</h2>
																<h2>TechSolutions PVT. LTD</h2>
																<h2>10 Jan 1994</h2>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a href="#" className="action_icons"><i className="fas fa-pencil-alt"></i></a>
								<a href="#" className="action_icons"><i className="fas fa-trash"></i></a>
							</td>
						</tr>
					</table>
					<div className="table_pagination">
						<div className="pagination">
							<a href="#">&laquo;</a>
							<a href="#">1</a>
							<a className="active" href="#">2</a>
							<a href="#">3</a>
							<a href="#">4</a>
							<a href="#">5</a>
							<a href="#">6</a>
							<a href="#">&raquo;</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- table_sec-end --> */}
		</div>
            
        </div>
    )
}

export default Onboarding
