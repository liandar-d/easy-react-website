import React from "react";
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Footer extends React.Component{
  render() {
      return ( 
<footer className="bg-dark text-inverse">
  <div className="container pt-13 pt-md-15 pb-7">
    <div className="row gy-6 gy-lg-0">
      <div className="col-md-4">
        <div className="widget">
          <img className="mb-4" src="src/img/logo-light.png" srcSet="src/img/logo-light@2x.png 2x" alt="" />
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {/* /.widget */}
      </div>
      <div className="col-md-4 col-lg-2 ">
        <div className="widget">
          <h4 className="widget-title mb-3 text-white">Need Help?</h4>
          <ul className="list-unstyled mb-0">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        {/* /.widget */}
      </div>
      {/* /column */}
      <div className="col-md-4 col-lg-2">
        <div className="widget">
          <h4 className="widget-title mb-3 text-white">Know More</h4>
          <ul className="list-unstyled mb-0">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>
        {/* /.widget */}
      </div>
      {/* /column */}
      <div className="col-md-12 col-lg-3">
        <div className="widget">
          <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
          <address>C1021, Windmills Of The Mind, Whitefield,Bangalore 560 066, India</address>
          <a href="mailto:first.last@email.com">info@easyinherit.in</a><br /> (+91 ) 99024-35733
        </div>
        {/* /.widget */}
      </div>
      {/* /column */}
    </div>
    {/*/.row */}
    <hr className="mt-13 mt-md-15 mb-7" />
    <div className="d-md-flex align-items-center justify-content-between">
      <p className="mb-2 mb-lg-0">© 2021 Easyinherit. All rights reserved.</p>
      <nav className="nav social social-white text-md-end">
        <a href="#"><i className="uil uil-twitter" /></a>
        <a href="#"><i className="uil uil-facebook-f" /></a>
        <a href="#"><i className="uil uil-dribbble" /></a>
        <a href="#"><i className="uil uil-instagram" /></a>
        <a href="#"><i className="uil uil-youtube" /></a>
      </nav>
      {/* /.social */}
    </div>
    {/* /div */}
  </div>
  {/* /.container */}
</footer>

       );
      }
  }
  
  export default Footer;