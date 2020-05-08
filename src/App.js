import React from 'react';
import Navbar from './components/Navbar'
import Me from './images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import './style.css'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="header">
          <header>
            <h1 className="page-header">Brandon Hall</h1>
          </header>
        </div>
      </div>

      <div className="main">

        <div className="container">

          <div className="card">
            <h2 className="borderM">About Me</h2>

            <div className="row">

              <img className="aboutImg" src={Me} alt="placeholder"></img>

              <p className="col-lg-8 col-md-6 col-xs-12 align-middle">Brandon was born and raised in Winter Park, FL, and
              currently works at UPS sorting
              packages. He is married with a 2 year old daughter who is the love of his life.
              Brandon has always enjoyed the ability to be able to create and have his ideas be reflected in
              something that will last.

                    <br />
                <br />

                    Brandon is learning coding through UCF Coding Bootcamp in an effort to change his
                    career into something he enjoys doing. He looks forward to learning as much as he can through said
                    course so that he can better himself in the future.

                    <br />
                <br />
                <span><a href="https://github.com/sofa-kb"><FontAwesomeIcon icon={faGithub}/></a> GitHub </span>
                <span><a href="https://www.linkedin.com/in/thewebdevhall/"><FontAwesomeIcon icon={faLinkedin}/></a> LinkedIn </span>
                <span><a href="https://drive.google.com/file/d/1YUlmEmD7KFTZSah2ECw954AM6kHpN_HM/view?usp=sharing"><FontAwesomeIcon icon={faFile}/></a> Résumé</span>
              </p>
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
  );
}

export default App;
