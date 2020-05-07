import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import './style.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="container">
        <div class="header">
          <header>
            <h1 class="page-header">Brandon Hall</h1>
          </header>
        </div>
      </div>

      <div class="main">

        <div class="container">

          <div class="card">
            <h2 class="borderM">About Me</h2>

            <div class="row">

              <img class="aboutImg" src="./images/me.jpg" alt="placeholder"></img>

              <p class="col-lg-8 col-md-6 col-xs-12 align-middle">Brandon was born and raised in Winter Park, FL, and
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

                <span><a href="https://github.com/sofa-kb"><i class="fab fa-github"></i></a> GitHub</span>
                <span><a href="https://www.linkedin.com/in/thewebdevhall/"><i class="fab fa-linkedin-in"></i></a> LinkedIn</span>
                <span><a href="https://drive.google.com/file/d/1YUlmEmD7KFTZSah2ECw954AM6kHpN_HM/view?usp=sharing"><i class="far fa-file-pdf"></i></a> Résumé</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="text-center">
          <span class="text-muted">Copyright &copy; 2019-2020 Brandon Hall</span>
        </div>
      </footer>


    </div>
  );
}

export default App;
