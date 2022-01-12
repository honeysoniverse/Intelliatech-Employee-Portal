function Footer() {
    return (
        <div className="sidebar_bottom_sec">
        <div className="panel with-nav-tabs panel-default">
            <div className="panel-body">
                <div className="tab-content tab_content">
                    <div className="tab-pane fade in active" id="tab1default">
                        <div className="footer_bottom_proflie_sec d-flex">
                            <div className="d-flex align-items-center flex_1">
                                <div>
                                    <img src="img/chat_profile.png" className="img-fluid" />
                                </div>
                                <div className="footer_bottom_proflie_sec_heading flex_1 ml-2">
                                    <h1>Kaushal Devangan</h1>
                                    <h2>Available</h2>
                                </div>
                            </div>
                            <div className="footer_bottom_dots">
                                <span><i className="fas fa-ellipsis-h"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab2default">Default 2</div>
                    <div className="tab-pane fade" id="tab3default">Default 3</div>
                    <div className="tab-pane fade" id="tab4default">Default 4</div>
                    <div className="tab-pane fade" id="tab5default">Default 5</div>
                </div>
            </div>
            <div className="panel-heading">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#tab1default" data-toggle="tab">
                        <div className="sidebar_bottom_sec_heading chat_tab">
                            <p><i className="fas fa-comments"></i></p>
                            <h1>Chats</h1>
                        </div>
                    </a></li>
                    <li><a href="#tab2default" data-toggle="tab">
                        <div className="sidebar_bottom_sec_heading channel_tab ml-3 mr-3">
                            <p><i className="fas fa-users"></i></p>
                            <h1>Channels</h1>
                        </div>
                    </a></li>
                    <li><a href="#tab3default" data-toggle="tab">
                        <div className="sidebar_bottom_sec_heading contact_tab">
                            <p><i className="fas fa-user"></i></p>
                            <h1>Contacts</h1>
                        </div>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer
