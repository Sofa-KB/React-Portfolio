import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light float-md-right">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">About Me <i className="fas fa-code"></i><span
                        className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio <i className="fas fa-code-branch"></i><span
                        className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/contact">Contact <i className="fas fa-address-book"></i><span
                        className="sr-only">(current)</span></a>
            </li>
        </ul>
    </div>
</nav>
    )
};

export default Navbar;