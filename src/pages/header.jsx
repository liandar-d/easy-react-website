import React from "react";
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Header extends React.Component{
    render() {
        return ( 


<header className="wrapper bg-soft-primary">
  <nav className="navbar classic navbar-expand-lg navbar-dark navbar-bg-dark">
    <div className="container flex-lg-row flex-nowrap align-items-center">
      <div className="navbar-brand w-100"><NavLink to="/"><img src="src/img/logo.png" srcSet="src/img/logo-light@2x.png 2x" alt="" /></NavLink></div>
      <div className="navbar-collapse offcanvas-nav">
        <div className="offcanvas-header d-lg-none d-xl-none">
          <NavLink to="/"><img src="src/img/logo-light.png" srcSet="src/img/logo.png 2x" alt="" /></NavLink>
          <button type="button" className="btn-close btn-close-white offcanvas-close offcanvas-nav-close" aria-label="Close" />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item "><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item "><NavLink className="nav-link" to="about">About</NavLink></li>
          <li className="nav-item "><NavLink className="nav-link" to="services">Service</NavLink></li>
          <li className="nav-item "><NavLink className="nav-link" to="faq">Faq</NavLink></li>
          <li className="nav-item "><NavLink className="nav-link" to="blog">Blog</NavLink></li>
          <li className="nav-item "><NavLink className="nav-link" to="contact">Contact</NavLink></li>
        </ul>
        {/* /.navbar-nav */}
      </div>
      {/* /.navbar-collapse */}
      <div className="navbar-other ms-lg-4">
        <ul className="navbar-nav flex-row align-items-center ms-auto" data-sm-skip="true">
          <li className="nav-item d-none d-md-block">
            <a href="#" className="btn btn-sm btn-white rounded-pill" data-bs-toggle="modal" data-bs-target="#modal-01">Sign In</a>
          </li>
          <li className="nav-item ms-lg-0">
            <div className="navbar-hamburger d-lg-none d-xl-none ms-auto"><button className="hamburger animate plain" data-toggle="offcanvas-nav"><span /></button></div>
          </li>
        </ul>
        {/* /.navbar-nav */}
      </div>
      {/* /.navbar-other */}
    </div>
    {/* /.container */}
  </nav>
  {/* /.navbar */}
  <div className="modal fade" id="modal-01" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content text-center">
        <div className="modal-body">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <h3 className="mb-4">Login to easyinherit</h3>
          <form className="text-start mb-3">
            <div className="form-label-group mb-4">
              <input type="email" className="form-control" placeholder="Email" id="loginEmail" />
              <label htmlFor="loginEmail">Email</label>
            </div>
            <div className="form-label-group mb-4">
              <input type="password" className="form-control" placeholder="Password" id="loginPassword" />
              <label htmlFor="loginPassword">Password</label>
            </div>
            <a className="btn btn-primary rounded-pill btn-login w-100 mb-2">Log In</a>
          </form>
          {/* /form */}
          <p className="mb-1"><a href="#" className="hover">Forgot Password?</a></p>
          <p className="mb-0">Don't have an account? <a href="#" className="hover">Sign up</a></p>
          <div className="divider-icon my-4">or</div>
          <nav className="nav social justify-content-center text-center">
            <a href="#" className="btn btn-circle btn-sm btn-google"><i className="uil uil-google" /></a>
            <a href="#" className="btn btn-circle btn-sm btn-facebook-f"><i className="uil uil-facebook-f" /></a>
            <a href="#" className="btn btn-circle btn-sm btn-twitter"><i className="uil uil-twitter" /></a>
          </nav>
          {/*/.social */}
        </div>
        {/*/.modal-content */}
      </div>
      {/*/.modal-body */}
    </div>
    {/*/.modal-dialog */}
  </div>
</header>


       );
    }
}

export default Header;




