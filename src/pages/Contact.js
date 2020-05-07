import React from "react"
import Navbar from "../components/Navbar"

function Contact() {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="container">
                    <div className="header h">
                        <header>
                            <h1 className="page-header">Brandon Hall</h1>
                        </header>
                    </div>
                </div>



                <div className="main">

                    <div className="container">

                        <div className="card">

                            <h2 className="borderM">Contact</h2>

                            <div className="contactCard">

                                <form className="form">
                                    <div className="form-group">
                                        <label for="exampleInputName1">Name</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"
                                            placeholder="Name"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="email" className="form-control" id="johndoe@gmail.com" placeholder="Email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary submit">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="text-center">
                    <span className="text-muted">Copyright &copy; 2019-2020 Brandon Hall</span>
                </div>
            </footer>
        </div>
    )
}

export default Contact;