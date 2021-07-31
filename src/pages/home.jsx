import React from "react";
import Footer from './footer';
import Header from './header';


import { BrowserRouter as Router, NavLink} from "react-router-dom";



class Home extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 
<div>
<div className="content-wrapper">
  <section className="wrapper bg-soft-primary">
    <div className="container pt-10 pb-12 pt-md-14 pb-md-17">
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="animate__animated animate__slideInDown col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0" >
          <h1 className="display-1 mb-5 mx-md-10 mx-lg-0">One stop Claims Solution for<br />
          </h1>
          <h1 className=" display-1 mb-5 mx-md-10 mx-lg-0 ">
          <span className="other-text">Inheritance Claims</span>
          <span className="other-text">Succession Planning</span>
          </h1> <br /> <br />
          <p className="lead fs-lg  mb-7">Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.</p>
          <div className="animate__animated animate__slideInDown d-flex justify-content-center justify-content-lg-start" >
            <span><NavLink to="easyportfolio" className="btn btn-lg btn-primary rounded me-2">Start Free Portfolio</NavLink></span>
          </div>
        </div>
        {/* /column */}
        <div className="col-lg-7">
          <div className="row">
            <figure><img className="w-auto" src="src/img/easy/Banner.png" alt /></figure>
          </div>
          {/* /.row */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light">
    <div className="container pt-md-16">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 px-xl-10">Our Services</h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="row text-center">
        {/* /column */}
        <div className="col-md-4 col-lg-4 ">
          <div className="card ">
            <div className="card-body">
              <img src="src/img/easy/easylegal.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt />
              <h4>EasyLEGAL</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              <NavLink to="easylegal" className="more hover link-green">Learn More</NavLink>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        <div className="col-md-4 col-lg-4 ">
          <div className="card ">
            <div className="card-body">
              <img src="src/img/easy/easywill.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt />
              <h4>EasyPORTFOLIO</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              <NavLink to="easyportfolio" className="more hover link-green">Learn More</NavLink>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/* /column */}
        <div className="col-md-4 col-lg-4">
          <div className="card ">
            <div className="card-body">
              <img src="src/img/easy/We Claim.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt />
              <h4>EasyCLAIMS</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              <NavLink to="easyclaims" className="more hover link-green">Learn More</NavLink>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/* /column */}
      </div>
    </div>
    {/* /.container */}
  </section>
  {/* /section */}
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-401 text-white" data-image-src="src/img/easy/bg3.jpg" style={{"background-image":"url(\"src/img/easy/bg3.jpg\")"}}>
    <div className=" py-14 py-md-16">
      <div className="row text-center">
        <div className="col-lg-12 mx-auto">
          <h3 className="display-4 mb-0 text-center px-xl-10 px-xxl-15 text-white">EasyLEGAL</h3>
          <div className="row gx-lg-12 gx-xl-12 process-wrapper text-center mt-10">
            <div className="col-md-2 offset-md-1"> <img src="src/img/easylegal/will.png" className="svg-inject icon-svg icon-svg-ss text-primary mb-3" alt />
              <h4 className="mb-1 text-white">WILL</h4>
              <p className="blue-names">Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
            </div>
            {/*/column */}
            <div className="col-md-2"> <img src="src/img/easylegal/trust.png" className="svg-inject icon-svg icon-svg-ss text-red mb-3" alt />
              <h4 className="mb-1 text-white">TRUST</h4>
              <p className="blue-names">Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
            </div>
            {/*/column */}
            <div className="col-md-2 text-white"> <img src="src/img/easylegal/probate.png" className="svg-inject icon-svg icon-svg-ss text-leaf mb-3" alt />
              <h4 className="mb-1 text-white">PROBATE</h4>
              <p className="blue-names">Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
            </div>
            {/*/column */}
            <div className="col-md-2"> <img src="src/img/easylegal/poa.png" className="svg-inject icon-svg icon-svg-ss text-leaf mb-3" alt />
              <h4 className="mb-1 text-white">POWER OF ATTORNEY</h4>
              <p className="blue-names">Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
            </div>
            {/*/column */}
            <div className="col-md-2"> <img src="src/img/easylegal/succession.png" className="svg-inject icon-svg icon-svg-ss text-leaf mb-3" alt />
              <h4 className="mb-1 text-white">LETTER OF SUCCESSION</h4>
              <p className="blue-names">Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
            </div>
            {/*/column */}
          </div> <br />
          {/*/.row */}
          <NavLink to="easylegal" className="btn btn-white rounded mb-0 text-nowrap">Know More</NavLink>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light wrapper-border">
    <div className="container py-14 py-md-16">
      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-7 order-lg-2">
          <figure><img className="w-auto" src="src/img/easy/Dashboard.png"  alt /></figure>
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h3 className="display-4 mb-5"><span style={{"color":"#3f78e0"}}>FREE</span>  EasyPORTFOLIO </h3>
          <div className="d-flex flex-row">
            {/* <div>
              <h4 className="mb-8">Secured by</h4>
            </div> */}
            <div>
              {/* <img src="src/img/easy/digilocker logo.png" className="svg-inject icon-svg icon-svg-ss text-primary me-4" alt /> */}
            </div>
          </div>
          <p className="mb-6">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          <div className="row gy-3">
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check" /></span><span>Aenean quam ornare. Curabitur blandit.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span>Nullam quis risus eget urna mollis ornare.</span></li>
              </ul>
            </div>
            {/*/column */}
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check" /></span><span>Etiam porta euismod malesuada mollis.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span>Vivamus sagittis lacus vel augue rutrum.</span></li>
              </ul>
              <br />
              
              <NavLink to="easyportfolio" className="btn btn-primary me-1 mb-2 mb-md-0">Get Started Now</NavLink>

            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light">
    <div className="container pt-14 pt-md-10 pb-md-13">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 mb-10 px-xl-10">EasyCLAIMS</h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="row text-center">
        <div className="col-md-4 col-lg-4 ">
          <div className="card ">
            <div className="card-body">
              <img src="src/img/easy/We identify.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt />
              <h4>We Identify</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/* /column */}
        <div className="col-md-4 col-lg-4 ">
          <div className="card ">
            <div className="card-body">
              <img src="src/img/easy/We Evaluate.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt />
              <h4>We Evaluate</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/* /column */}
        <div className="col-md-4 col-lg-4">
          <div className="card ">
            <div className="card-body">
              <img src="src/img/easy/We Claim.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt />
              <h4>We Claim</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
          <NavLink to="easyclaims" className="btn btn-primary ml-12-lx me-1 mb-2 mb-md-0">Get Started Now</NavLink>

        </div>
        {/* /column */}
      </div>
    </div>
  </section>
  {/* /section */}
  <section className="wrapper bg-soft-primary">
    <div className="container py-14 pt-md-13 pb-md-13">
      <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-lg-n3">
        <div className="col-lg-4">
          <h3 className="display-4 mb-3">We bring solutions to make life easier for our customers.</h3>
          {/* <p className="lead fs-lg mb-0 pe-xxl-5">We bring solutions to make life easier for our customers.</p> */}
        </div>
        {/* /column */}
        <div className="col-lg-8 mt-lg-2">
          <div className="row align-items-center counter-wrapper gy-6 text-center">
            <div className="col-md-3">
              <img src="src/img/easy/Users.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt />
              <h3 className="counter" style={{"visibility":"visible"}}>2504</h3>
              <p>Users</p>
            </div>
            {/*/column */}
            <div className="col-md-3">
              <img src="src/img/easy/Wills.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt />
              <h3 className="counter" style={{"visibility":"visible"}}>150</h3>
              <p>Wills Made</p>
            </div>
            {/*/column */}
            <div className="col-md-3">
              <img src="src/img/easy/Trust.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt />
              <h3 className="counter" style={{"visibility":"visible"}}>43</h3>
              <p>Trusts Made</p>
            </div>
            {/*/column */}
            <div className="col-md-3">
              <img src="src/img/easy/Claims.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt />
              <h3 className="counter" style={{"visibility":"visible"}}>127</h3>
              <p>Claims</p>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light">
    <div className="container py-14 py-md-10">
      <div className="row text-center mt-xl-12">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 mb-9 px-xxl-11">About Us</h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17" >
        <div className="col-md-6 col-lg-4"   style={{"-webkit-animation-name":"_slideInUp","animation-name":"_slideInUp","-webkit-animation-duration":"700ms","animation-duration":"700ms","-webkit-animation-timing-function":"ease","animation-timing-function":"ease","-webkit-animation-delay":"0ms","animation-delay":"0ms","-webkit-animation-direction":"normal","animation-direction":"normal","-webkit-animation-fill-mode":"both","animation-fill-mode":"both"}}>
          <div className="d-flex flex-row">
            <div>
              <img src="src/img/about/Data driven.svg" className="svg-inject icon-svg icon-svg-ss text-aqua me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Data Driven Strategic management</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4"  style={{"-webkit-animation-name":"_slideInUp","animation-name":"_slideInUp","-webkit-animation-duration":"700ms","animation-duration":"700ms","-webkit-animation-timing-function":"ease","animation-timing-function":"ease","-webkit-animation-delay":"300ms","animation-delay":"300ms","-webkit-animation-direction":"normal","animation-direction":"normal","-webkit-animation-fill-mode":"both","animation-fill-mode":"both"}}>
          <div className="d-flex flex-row">
            <div>
              <img src="src/img/about/customer relationship management.svg" className="svg-inject icon-svg icon-svg-ss text-yellow me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Citizen relationship management</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4"  style={{"-webkit-animation-name":"_slideInUp","animation-name":"_slideInUp","-webkit-animation-duration":"700ms","animation-duration":"700ms","-webkit-animation-timing-function":"ease","animation-timing-function":"ease","-webkit-animation-delay":"1500ms","animation-delay":"1500ms","-webkit-animation-direction":"normal","animation-direction":"normal","-webkit-animation-fill-mode":"both","animation-fill-mode":"both"}}>
          <div className="d-flex flex-row">
            <div>
              <img src="src/img/about/noun_interaction_1205973.svg" className="svg-inject icon-svg icon-svg-ss text-purple me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Channel &amp; Interaction</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4"   style={{"-webkit-animation-name":"_slideInUp","animation-name":"_slideInUp","-webkit-animation-duration":"700ms","animation-duration":"700ms","-webkit-animation-timing-function":"ease","animation-timing-function":"ease","-webkit-animation-delay":"600ms","animation-delay":"600ms","-webkit-animation-direction":"normal","animation-direction":"normal","-webkit-animation-fill-mode":"both","animation-fill-mode":"both"}}>
          <div className="d-flex flex-row">
            <div>
              <img src="src/img/about/Fraud detection.svg" className="svg-inject icon-svg icon-svg-ss text-red me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Fraud Detection &amp; Prevention</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4"  style={{"-webkit-animation-name":"_slideInUp","animation-name":"_slideInUp","-webkit-animation-duration":"700ms","animation-duration":"700ms","-webkit-animation-timing-function":"ease","animation-timing-function":"ease","-webkit-animation-delay":"900ms","animation-delay":"900ms","-webkit-animation-direction":"normal","animation-direction":"normal","-webkit-animation-fill-mode":"both","animation-fill-mode":"both"}}>
          <div className="d-flex flex-row">
            <div>
              <img src="src/img/about/servicesmanagement.svg" className="svg-inject icon-svg icon-svg-ss text-pink me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Scheme &amp; Service Management</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
            </div>
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4"  style={{"-webkit-animation-name":"_slideInUp","animation-name":"_slideInUp","-webkit-animation-duration":"700ms","animation-duration":"700ms","-webkit-animation-timing-function":"ease","animation-timing-function":"ease","-webkit-animation-delay":"1200ms","animation-delay":"1200ms","-webkit-animation-direction":"normal","animation-direction":"normal","-webkit-animation-fill-mode":"both","animation-fill-mode":"both"}}>
          <div className="d-flex flex-row">
            <div>
              <img src="src/img/about/Benefitdelivery.svg" className="svg-inject icon-svg icon-svg-ss text-green me-4" alt />
            </div>
            <div>
              <h4 className="mb-1">Benefit delivery</h4>
              <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
            </div>
          </div>
        </div>
        {/*/column */}
      </div>
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper image-wrapper bg-image bg-overlay" data-image-src="src/img/photos/bg1.jpg" style={{"background-image":"url(\"src/img/photos/bg1.jpg\")"}}>
    <div className="container py-12 light-gallery-wrapper text-center">
      <div className="row">
        <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
          <h2 className="display-4 px-lg-10 px-xl-13 px-xxl-10 text-white">Data Security? We handled it.</h2>
          <NavLink to="security" className="btn btn-white rounded mb-0 text-nowrap">Know More</NavLink>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-soft-primary wrapper-border">
    <div className="container py-14 py-md-16">
      <h2 className="display-4 mb-3 text-center">FAQs</h2>
      <p className="lead text-center mb-10 px-md-16 px-lg-0">If you don't see an answer to your question, you can send us an email from our contact form.</p>
      <div className="row">
        <div className="col-lg-4 mb-0">
          <h3 className> Wills & Trusts  </h3>
          <div id="accordion-1" className="accordion-wrapper">
            <div className="card">
              <div className="card-header" id="accordion-heading-1-1">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-1" aria-expanded="false" aria-controls="accordion-collapse-1-1">How do I better manage my assets and properties for my family?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-1-1" className="collapse" aria-labelledby="accordion-heading-1-1" data-bs-target="#accordion-1" style={{}}>
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-1-2">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-2" aria-expanded="false" aria-controls="accordion-collapse-1-2">What should I know about an Asset Portfolio?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-1-2" className="collapse" aria-labelledby="accordion-heading-1-2" data-bs-target="#accordion-1">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-1-3">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-3" aria-expanded="false" aria-controls="accordion-collapse-1-3">What are the general terminologies I must know before writing a Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-1-3" className="collapse" aria-labelledby="accordion-heading-1-3" data-bs-target="#accordion-1">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-1-4">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-4" aria-expanded="false" aria-controls="accordion-collapse-1-4">What role does an Executor/Executrix play?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-1-4" className="collapse" aria-labelledby="accordion-heading-1-4" data-bs-target="#accordion-1">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
          </div>
          {/* /.accordion-wrapper */}
        </div>
        {/*/column */}
        <div className="col-lg-4">
          <h3 className>Death Claims </h3>
          <div id="accordion-2" className="accordion-wrapper">
            <div className="card">
              <div className="card-header" id="accordion-heading-2-1">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-1" aria-expanded="false" aria-controls="accordion-collapse-2-1">What should I know about a Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-1" className="collapse" aria-labelledby="accordion-heading-2-1" data-bs-target="#accordion-2" style={{}}>
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-2-2">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-2" aria-expanded="false" aria-controls="accordion-collapse-2-2">How many people are required to sign my will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-2" className="collapse" aria-labelledby="accordion-heading-2-2" data-bs-target="#accordion-2">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-2-3">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-3" aria-expanded="false" aria-controls="accordion-collapse-2-3">Can I make an Oral Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-3" className="collapse" aria-labelledby="accordion-heading-2-3" data-bs-target="#accordion-2">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-2-4">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-4" aria-expanded="false" aria-controls="accordion-collapse-2-4">Can I make an Oral Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-4" className="collapse" aria-labelledby="accordion-heading-2-4" data-bs-target="#accordion-2">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
          </div>
          {/* /.accordion-wrapper */}
        </div>
        {/*/column */}
        <div className="col-lg-4">
          <h3 className>Estate Planning</h3>
          <div id="accordion-2" className="accordion-wrapper">
            <div className="card">
              <div className="card-header" id="accordion-heading-2-1">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-1" aria-expanded="false" aria-controls="accordion-collapse-2-1">What should I know about a Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-1" className="collapse" aria-labelledby="accordion-heading-2-1" data-bs-target="#accordion-2" style={{}}>
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-2-2">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-2" aria-expanded="false" aria-controls="accordion-collapse-2-2">How many people are required to sign my will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-2" className="collapse" aria-labelledby="accordion-heading-2-2" data-bs-target="#accordion-2">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-2-3">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-3" aria-expanded="false" aria-controls="accordion-collapse-2-3">Can I make an Oral Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-3" className="collapse" aria-labelledby="accordion-heading-2-3" data-bs-target="#accordion-2">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header" id="accordion-heading-2-4">
                <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-4" aria-expanded="false" aria-controls="accordion-collapse-2-4">Can I make an Oral Will?</button>
              </div>
              {/* /.card-header */}
              <div id="accordion-collapse-2-4" className="collapse" aria-labelledby="accordion-heading-2-4" data-bs-target="#accordion-2">
                <div className="card-body">
                  <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.collapse */}
            </div>
            {/* /.card */}
          </div>
          {/* /.accordion-wrapper */}
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light wrapper-border">
    <div className="container py-14 py-md-16">
      <h2 className="display-4 mb-3 text-center">What our customers have to say</h2>
      <p className="lead text-center mb-6 px-md-16 px-lg-0">Customer satisfaction is our major goal. See what our customers are saying about us.</p>
      <div className="position-relative">
        <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed={1} style={{"bottom":"0.5rem","right":"-1.7rem","-webkit-transform":"translate3d(0px, -1px, 0px)","-ms-transform":"translate3d(0px, -1px, 0px)","transform":"translate3d(0px, -1px, 0px)"}} />
        <div className="shape bg-dot primary rellax w-16 h-16" data-rellax-speed={1} style={{"top":"-1rem","left":"-1.7rem","-webkit-transform":"translate3d(0px, -23px, 0px)","-ms-transform":"translate3d(0px, -23px, 0px)","transform":"translate3d(0px, -23px, 0px)"}} />
        <div className="carousel owl-carousel gap-small owl-loaded owl-drag" data-margin={0} data-dots="true" data-autoplay="false" data-autoplay-timeout={5000} data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;992&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1200&quot;:{&quot;items&quot;: &quot;3&quot;}}">
          {/* /.item */}
          <div className="owl-stage-outer"><div className="owl-stage" style={{"-webkit-transform":"translate3d(-740px, 0px, 0px)","-ms-transform":"translate3d(-740px, 0px, 0px)","transform":"translate3d(-740px, 0px, 0px)","-webkit-transition":"all 0s ease 0s","transition":"all 0s ease 0s","width":"2220px"}}><div className="owl-item" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>“With my high travel, I knew I had to organize my paperwork and get a Will in place. But it was always postoned. EasyInherit had it done in a week.”</p>
                          <div className="blockquote-details">
                            <div className="info">
                              <h5 className="mb-1">Vivek Gupta</h5>
                              <p className="mb-0">MD , IPSOS</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.item-inner */}
                </div></div><div className="owl-item" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>“We live in the US and when our parents passed away in India, we had no time to visit various Govt. offices to transfer their assets. EasyInherit had it streamlined for us.”</p>
                          <div className="blockquote-details">
                            <div className="info">
                              <h5 className="mb-1">Rahul Singh</h5>
                              <p className="mb-0">Los Angeles, USA</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.item-inner */}
                </div></div><div className="owl-item active" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>“It was a touchy subject but COVID-19 woke us to reality. Now I know my children will find all papers and documentation in one place. EasyInherit put us at ease.”</p>
                          <div className="blockquote-details">
                            <div className="info">
                              <h5 className="mb-1">Shalini Srivastava</h5>
                              <p className="mb-0">CEO, CouchPootato</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.item-inner */}
                </div></div><div className="owl-item active" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <div className="card">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>“Sorting my parents documents have always been on my mind. The EasyPortfolio turned out to be an amazing tool to start putting things together.”</p>
                          <div className="blockquote-details">
                            <div className="info">
                              <h5 className="mb-1">Nandeeta V. Wagh</h5>
                              <p className="mb-0">Director - HR, Amcor</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      {/* /.card-body */}
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /.item-inner */}
                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i className="uil-arrow-left" /></button><button type="button" role="presentation" className="owl-next"><i className="uil-arrow-right" /></button></div><div className="owl-dots"><button role="button" className="owl-dot"><span /></button><button role="button" className="owl-dot"><span /></button><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button></div></div>
        {/* /.owl-carousel */}
      </div>
      {/* /.position-relative */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper ">
    <div className="container pt-19 pt-md-10 pb-16 pb-md-10">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 mb-10 px-xl-10">Media mentions and publications</h3>
        </div>
        {/* /column */}
      </div>
      <div className="row text-center py-md-2">
        <div className="col-md-6 col-lg-3">
          <div className="card bg-pale-gry">
            <div className="card-body txt-al">
              <img src="src/img/easy/business.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>New Legal Tech Start-up EasyInherit</h4>
              <p className="mb-2">Considering the current situation and witnessing the surge in will-writing amid crisis, a Bengaluru..</p>
              <NavLink to="/" className="more hover link-aqua">Read More</NavLink>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-3">
          <div className="card bg-pale-gry">
            <div className="card-body txt-al">
              <img src="src/img/easy/bw.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Legal Tech Start-Up EasyInherit Launched In India</h4>
              <p className="mb-2">It has been seen that the customers due to the lack of knowledge about..</p>
              <a href="http://bwdisrupt.businessworld.in/article/Amidst-COVID-19-Pandemic-Legal-Tech-Start-Up-EasyInherit-Launched-In-India/16-09-2020-321089/" className="more hover link-aqua">Read More</a>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-3">
          <div className="card bg-pale-gry">
            <div className="card-body txt-al">
              <img src="src/img/easy/express.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Legal tech startup EasyInherit launched to simplify inheritance process</h4>
              <p className="mb-2">The Covid-19 pandemic has triggered a sense of ..</p>
              <a href="https://www.expresscomputer.in/news/legal-tech-startup-easyinherit-launched-to-simplify-inheritance-process/63806/" className="more hover link-aqua">Read More</a>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-3">
          <div className="card bg-pale-gry">
            <div className="card-body txt-al">
              <img src="src/img/easy/legal.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Legal Tech Start-up EasyInherit Launches in India</h4>
              <p className="mb-2">EasyInherits unique legal tech platform helps simplify the process of estate..</p>
              <a href="http://legalstartups.info/news-detail.php?id=74" className="more hover link-aqua">Read More</a>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
        {/*/column */}
      </div>
    </div>
  </section>
  <section className="wrapper bg-light wrapper-border">
    <div className="container py-14 py-md-10">
      <div className="row">
        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
          <h3 className="display-4 mb-6 text-center">Article</h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="position-relative">
        <div className="shape bg-dot primary rellax w-17 h-20" data-rellax-speed={1} style={{"top":"0px","left":"-1.7rem","-webkit-transform":"translate3d(0px, -2px, 0px)","-ms-transform":"translate3d(0px, -2px, 0px)","transform":"translate3d(0px, -2px, 0px)"}} />
        <div className="carousel owl-carousel gap-small blog grid-view owl-loaded owl-drag" data-margin={0} data-dots="true" data-autoplay="false" data-autoplay-timeout={5000} data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;992&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1200&quot;:{&quot;items&quot;: &quot;3&quot;}}">
          {/* /.item */}
          {/* /.item */}
          {/* /.item */}
          {/* /.item */}
          <div className="owl-stage-outer"><div className="owl-stage" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","-webkit-transition":"all 0s ease 0s","transition":"all 0s ease 0s","width":"1480px"}}><div className="owl-item active" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay1 hover-scale"><NavLink to="/"><span className="bg" /> <img src="src/img/photos/b4.jpg" alt /></NavLink>
                          <figcaption>
                            <h5 className="from-top mb-0">Read More</h5>
                          </figcaption>
                        </figure>
                        <div className="card-body">
                          <div className="post-header">
                            <div className="post-category text-line">
                              <NavLink to="/" className="hover" rel="category">Coding</NavLink>
                            </div>
                            {/* /.post-category */}
                            <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Ligula tristique quis risus</NavLink></h2>
                          </div>
                          {/* /.post-header */}
                          <div className="post-content">
                            <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.</p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer">
                          <ul className="post-meta d-flex mb-0">
                            <li className="post-date"><i className="uil uil-calendar-alt" /><span>14 Apr 2021</span></li>
                            <li className="post-comments"><a href="/"><i className="uil uil-comment" />4</a></li>
                            <li className="post-likes ms-auto"><a href="/"><i className="uil uil-heart-alt" />5</a></li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div></div><div className="owl-item active" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay1 hover-scale"><NavLink to="/"><span className="bg" /> <img src="src/img/photos/b5.jpg" alt /></NavLink>
                          <figcaption>
                            <h5 className="from-top mb-0">Read More</h5>
                          </figcaption>
                        </figure>
                        <div className="card-body">
                          <div className="post-header">
                            <div className="post-category text-line">
                              <NavLink to="/" className="hover" rel="category">Workspace</NavLink>
                            </div>
                            {/* /.post-category */}
                            <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Nullam id dolor elit id nibh</NavLink></h2>
                          </div>
                          {/* /.post-header */}
                          <div className="post-content">
                            <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.</p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer">
                          <ul className="post-meta d-flex mb-0">
                            <li className="post-date"><i className="uil uil-calendar-alt" /><span>29 Mar 2021</span></li>
                            <li className="post-comments"><NavLink to="/"><i className="uil uil-comment" />3</NavLink></li>
                            <li className="post-likes ms-auto"><NavLink to="/"><i className="uil uil-heart-alt" />3</NavLink></li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div></div><div className="owl-item active" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay1 hover-scale"><NavLink to="/"><span className="bg" /> <img src="src/img/photos/b6.jpg" alt /></NavLink>
                          <figcaption>
                            <h5 className="from-top mb-0">Read More</h5>
                          </figcaption>
                        </figure>
                        <div className="card-body">
                          <div className="post-header">
                            <div className="post-category text-line">
                              <NavLink to="/" className="hover" rel="category">Meeting</NavLink>
                            </div>
                            {/* /.post-category */}
                            <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Ultricies fusce porta elit</NavLink></h2>
                          </div>
                          {/* /.post-header */}
                          <div className="post-content">
                            <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.</p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer">
                          <ul className="post-meta d-flex mb-0">
                            <li className="post-date"><i className="uil uil-calendar-alt" /><span>26 Feb 2021</span></li>
                            <li className="post-comments"><NavLink to="/"><i className="uil uil-comment" />6</NavLink></li>
                            <li className="post-likes ms-auto"><NavLink to="/"><i className="uil uil-heart-alt" />3</NavLink></li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div></div><div className="owl-item" style={{"width":"370px"}}><div className="item">
                  <div className="item-inner">
                    <article>
                      <div className="card">
                        <figure className="card-img-top overlay overlay1 hover-scale"><NavLink to="/"><span className="bg" /> <img src="src/img/photos/b7.jpg" alt /></NavLink>
                          <figcaption>
                            <h5 className="from-top mb-0">Read More</h5>
                          </figcaption>
                        </figure>
                        <div className="card-body">
                          <div className="post-header">
                            <div className="post-category text-line">
                              <NavLink to="/" className="hover" rel="category">Business Tips</NavLink>
                            </div>
                            {/* /.post-category */}
                            <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Morbi leo risus porta eget</NavLink></h2>
                          </div>
                          {/* /.post-header */}
                          <div className="post-content">
                            <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.</p>
                          </div>
                          {/* /.post-content */}
                        </div>
                        {/*/.card-body */}
                        <div className="card-footer">
                          <ul className="post-meta d-flex mb-0">
                            <li className="post-date"><i className="uil uil-calendar-alt" /><span>7 Jan 2021</span></li>
                            <li className="post-comments"><NavLink to="/"><i className="uil uil-comment" />2</NavLink></li>
                            <li className="post-likes ms-auto"><NavLink to="/"><i className="uil uil-heart-alt" />5</NavLink></li>
                          </ul>
                          {/* /.post-meta */}
                        </div>
                        {/* /.card-footer */}
                      </div>
                      {/* /.card */}
                    </article>
                    {/* /article */}
                  </div>
                  {/* /.item-inner */}
                </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i className="uil-arrow-left" /></button><button type="button" role="presentation" className="owl-next"><i className="uil-arrow-right" /></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button></div></div>
        {/* /.owl-carousel */}
      </div>
      {/* /.position-relative */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light wrapper-border">
    <div className="container py-14 py-md-16">
      <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
        <div className="col-lg-4 mt-lg-2">
          <h4 className="display-5 mb-3 pe-xxl-5">Our esteemed partners</h4>
        </div>
        {/* /column */}
        <div className="col-lg-8">
          <div className="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12 ">
            <div className="col-md-4">
              <figure className="px-3 px-md-0 px-xxl-2"><img src="src/img/easy/Digilocker.jpg" alt /></figure>
            </div>
            {/*/column */}
            <div className="col-md-4">
              <figure className="px-3 px-md-0 px-xxl-2"><img src="src/img/easy/DPIIT.png" alt /></figure>
            </div>
            {/*/column */}
            <div className="col-md-4">
              <figure className="px-3 px-md-0 px-xxl-2"><img src="src/img/easy/Startupindia.jpg" alt /></figure>
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
</div>
  {/* /.content-wrapper */}

</div>

       );
    }
}

export default Home;