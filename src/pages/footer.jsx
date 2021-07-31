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
          <img className="mb-4" src="src/img/logo-light.png" srcSet="src/img/logo-light@2x.png 2x" alt />
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        {/* /.widget */}
      </div>
      <div className="col-md-4 col-lg-2 ">
        <div className="widget">
          <h4 className="widget-title mb-3 text-white">Useful Links</h4>
          <ul className="list-unstyled mb-0">
            <li><NavLink to="refund-policy">Refund Policy</NavLink></li>
            <li><NavLink to="terms-and-conditions">Terms of Use</NavLink></li>
            <li><NavLink to="privacy-policy">Privacy Policy</NavLink></li>
          </ul>
        </div>
        {/* /.widget */}
      </div>
      {/* /column */}
      <div className="col-md-4 col-lg-2">
        <div className="widget">
          <h4 className="widget-title mb-3 text-white">Services</h4>
          <ul className="list-unstyled mb-0">
            <li><NavLink to="easylegal">EasyLEGAL</NavLink></li>
            <li><NavLink to="easyclaims">EasyCLAIMS</NavLink></li>
            <li><NavLink to="easyportfolio">EasyPORTFOLIO</NavLink></li>
          </ul>
        </div>
        {/* /.widget */}
      </div>
      {/* /column */}
      <div className="col-md-12 col-lg-3">
        <div className="widget">
          <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
          <address>C1021, Windmills Of The Mind, Whitefield,Bangalore 560 066, India</address>
          <NavLink to="mailto:info@easyinherit.in">info@easyinherit.in</NavLink><br /> (+91 ) 99024-35733
        </div>
        {/* /.widget */}
      </div>
      {/* /column */}
    </div>
    {/*/.row */}
    <hr className="mt-13 mt-md-15 mb-7" />
    <div className="d-md-flex align-items-center justify-content-between">
      <p className="mb-2 mb-lg-0">All copyright Quaish Bizsense Pvt. Ltd. 2020</p>
      <nav className="nav social social-white text-md-end">
        <a href="https://www.facebook.com/easyinherit/"><i className="uil uil-facebook-f" /></a>
        <a href="https://twitter.com/easyinherit/"><i className="uil uil-twitter" /></a>
        <a href="https://www.linkedin.com/company/easyinherit/"><i className="uil uil-linkedin" /></a>
        <a href="https://api.whatsapp.com/send?phone=9164705620"><i className="uil uil-whatsapp" /></a>
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