import React from 'react';

const Footer = () => {
    return (
        <div className="container mt-5">
            <footer className="w-100 py-4 flex-shrink-0 bg-black rounded">
                <div className="container py-4">
                    <div className="row gy-4 gx-5 justify-content-around">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">Skill Share House</h5>
                            <p className="small text-muted">Here, personal skills are shared and it helps to grow anyone from any individual to a community</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a
                                className="text-primary" href="#">Yasir</a></p>
                        </div>
                        >
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Subscribe, to my newsletter to get daily update about course and new features.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Recipient's username"
                                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i
                                        className="fas fa-paper-plane"/></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
