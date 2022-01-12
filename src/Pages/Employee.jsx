import {Link} from 'react-router-dom'



const Employee = () => {
    return (
        <div className="Employee">
            <div class="table_sec">
					<div class="table_header">
						<div class="table_header_heading d-lg-flex w-100">
							<div class="flex_1 d-flex align-items-center">
								<h1>Employees</h1>
							</div>
							<div>
								<Link to="/addemployee"><button type="button" class="btn btn_add_employee">ADD EMPLOYEE</button></Link>
							</div>
						</div>
					</div>
					{/* <!-- table_header-end -->/ */}
					<div class="search_sec">
						<div class="input-group search_bar_width">
							<input type="text" class="form-control top_search_bar" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
							<div class="input-group-append">
								<span class="search_icon_input" id="basic-addon2"><i class="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					{/* <!-- search_sec-end --> */}
					<div class="table_box">
						<table>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Contact</th>
								<th>Action</th>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
							<tr>
								<td>Kaushal</td>
								<td>Devangan</td>
								<td>kaushalxyz@gmail.com</td>
								<td>9988776655</td>
								<td>
									{/* <!-- Button trigger modal --> */}
									<a href="#" class="action_icons" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
									{/* <!-- Modal --> */}
									<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog" role="document">
											<div class="modal-content">
												<div class="modal-header modal_header">
													<h5 class="modal-title" id="exampleModalLabel">Candidate Details</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
													<div class="employee_details_section">
														<div class="row">
															<div class="col-lg-5 col-md-5 col-5 div_border">
																<div class="employee_details_section_heading">
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
															<div class="col-lg-7 col-md-7 col-7">
																<div class="employee_details_section_heading">
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
									<a href="#" class="action_icons"><i class="fas fa-pencil-alt"></i></a>
									<a href="#" class="action_icons"><i class="fas fa-trash"></i></a>
								</td>
							</tr>
						</table>
						<div class="table_pagination">
							<div class="pagination">
								<a href="#">&laquo;</a>
								<a href="#">1</a>
								<a class="active" href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#">6</a>
								<a href="#">&raquo;</a>
							</div>
						</div>
					</div>
				</div>
        </div>
    )
}

export default Employee
