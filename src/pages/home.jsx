import React from "react";
import Footer from './footer';
import Header from './header';

import { BrowserRouter as Router, NavLink} from "react-router-dom";



class Home extends React.Component{
    render() {
        return ( 
<div>
  <div className="content-wrapper">
    <Header />
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-12 pt-md-14 pb-md-17">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0" data-cues="slideInDown" data-group="page-title" data-delay={600}>
            <h1 className="display-1 mb-5 mx-md-10 mx-lg-0">One stop Claims Solution for<br />Inheritance: Succession Planning<span className="cursor text-primary" data-owner="typer" /></h1>
            <p className="lead fs-lg mb-7">Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.</p>
            <div className="d-flex justify-content-center justify-content-lg-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay={900}>
              <span><a className="btn btn-lg btn-primary rounded me-2">Get Started</a></span>
              <span><a className="btn btn-lg btn-green rounded">Free Trial</a></span>
            </div>
          </div>
          {/* /column */}
          <div className="col-lg-7">
            <div className="row">
              <figure><img className="w-auto" src="src/img/easy/Banner.png" srcSet="src/img/concept/concept7@2x.png 2x" alt="" /></figure>
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
      <div className="container pt-14 pt-md-16">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h3 className="display-4 mb-10 px-xl-10">Why Easyinherit</h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="row text-center">
          <div className="col-md-4 col-lg-4 ">
            <div className="card ">
              <div className="card-body">
                <img src="src/img/easy/easywill.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
                <h4>EasyWILL</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                <a href="#" className="more hover link-green">Learn More</a>
              </div>
              {/*/.card-body */}
            </div>
          </div>
          {/* /column */}
          <div className="col-md-4 col-lg-4 ">
            <div className="card ">
              <div className="card-body">
                <img src="src/img/easy/easylegal.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
                <h4>EasyLEGAL</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                <a href="#" className="more hover link-green">Learn More</a>
              </div>
              {/*/.card-body */}
            </div>
          </div>
          {/* /column */}
          <div className="col-md-4 col-lg-4">
            <div className="card ">
              <div className="card-body">
                <img src="src/img/easy/We Claim.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
                <h4>EasyCLAIMS</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                <a href="#" className="more hover link-green">Learn More</a>
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
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-401 text-white" data-image-src="src/img/easy/bg3.jpg" style={{backgroundImage: 'url("src/img/easy/bg3.jpg")'}}>
      <div className=" py-14 py-md-16">
        <div className="row text-center">
          <div className="col-lg-12 mx-auto">
            <h3 className="display-4 mb-0 text-center px-xl-10 px-xxl-15 text-white">The Legal Documents you Need</h3>
            <div className="row gx-lg-12 gx-xl-12 process-wrapper text-center mt-10">
              <div className="col-md-2 offset-md-1"> <img src="src/img/easy/will.png" className="svg-inject icon-svg icon-svg-ss text-primary mb-3" alt="" />
                <h4 className="mb-1 text-white">1. Concept</h4>
                <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
              </div>
              {/*/column */}
              <div className="col-md-2"> <img src="src/img/easy/will.png" className="svg-inject icon-svg icon-svg-ss text-red mb-3" alt="" />
                <h4 className="mb-1 text-white">2. Prepare</h4>
                <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
              </div>
              {/*/column */}
              <div className="col-md-2 text-white"> <img src="src/img/easy/will.png" className="svg-inject icon-svg icon-svg-ss text-leaf mb-3" alt="" />
                <h4 className="mb-1 text-white">3. Retouch</h4>
                <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
              </div>
              {/*/column */}
              <div className="col-md-2"> <img src="src/img/easy/will.png" className="svg-inject icon-svg icon-svg-ss text-leaf mb-3" alt="" />
                <h4 className="mb-1 text-white">3. Retouch</h4>
                <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
              </div>
              {/*/column */}
              <div className="col-md-2"> <img src="src/img/easy/will.png" className="svg-inject icon-svg icon-svg-ss text-leaf mb-3" alt="" />
                <h4 className="mb-1 text-white">3. Retouch</h4>
                <p>Nulla vitae elit libero elit non porta gravida eget metus cras.</p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
            <a href="#" className="btn btn-white rounded mb-0 text-nowrap">Know More</a>
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
            <figure><img className="w-auto" src="src/img/easy/Dashboard.png" srcSet="src/img/concept/concept7@2x.png 2x" alt="" /></figure>
          </div>
          {/*/column */}
          <div className="col-lg-5">
            <h3 className="display-4 mb-5">Free Easy Portfolio</h3>
            <div className="d-flex flex-row">
              <div>
                <h4 className="mb-8">Secured by</h4>
              </div>
              <div>
                <img src="src/img/easy/digilocker logo.png" className="svg-inject icon-svg icon-svg-ss text-primary me-4" alt="" />
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
      <div className="container pt-14 pt-md-16">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h3 className="display-4 mb-10 px-xl-10">What We Do For You</h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="row text-center">
          <div className="col-md-4 col-lg-4 ">
            <div className="card ">
              <div className="card-body">
                <img src="src/img/easy/We identify.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
                <h4>We Identify</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                <a href="#" className="more hover link-green">Learn More</a>
              </div>
              {/*/.card-body */}
            </div>
          </div>
          {/* /column */}
          <div className="col-md-4 col-lg-4 ">
            <div className="card ">
              <div className="card-body">
                <img src="src/img/easy/We Evaluate.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
                <h4>We Evaluate</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                <a href="#" className="more hover link-green">Learn More</a>
              </div>
              {/*/.card-body */}
            </div>
          </div>
          {/* /column */}
          <div className="col-md-4 col-lg-4">
            <div className="card ">
              <div className="card-body">
                <img src="src/img/easy/We Claim.png" className="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
                <h4>We Claim</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
                <a href="#" className="more hover link-green">Learn More</a>
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
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 pt-md-13 pb-md-13">
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-lg-n3">
          <div className="col-lg-4">
            <h3 className="display-4 mb-3 pe-xl-15">We are proud of our works</h3>
            <p className="lead fs-lg mb-0 pe-xxl-5">We bring solutions to make life easier for our customers.</p>
          </div>
          {/* /column */}
          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <div className="col-md-4">
                <img src="src/img/icons/check.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt="" />
                <h3 className="counter" style={{visibility: 'visible'}}>2500+</h3>
                <p>Users</p>
              </div>
              {/*/column */}
              <div className="col-md-4">
                <img src="src/img/icons/user.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt="" />
                <h3 className="counter" style={{visibility: 'visible'}}>150+</h3>
                <p>Wills Made</p>
              </div>
              {/*/column */}
              <div className="col-md-4">
                <img src="src/img/icons/briefcase-2.svg" className="svg-inject icon-svg icon-svg-sm text-primary mb-3" alt="" />
                <h3 className="counter" style={{visibility: 'visible'}}>43+</h3>
                <p>Trusts Made</p>
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
        <div className="row gx-lg-8 gx-xl-12 gy-8 mb-14 mb-md-17" data-cues="slideInUp" data-group="services" data-disabled="true">
          <div className="col-md-6 col-lg-4" data-cue="slideInUp" data-group="services" data-show="true" style={{animationName: 'slideInUp', animationDuration: '700ms', animationTimingFunction: 'ease', animationDelay: '0ms', animationDirection: 'normal', animationFillMode: 'both'}}>
            <div className="d-flex flex-row">
              <div>
                <img src="src/img/icons/light-bulb.svg" className="svg-inject icon-svg icon-svg-sm text-aqua me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Data Driven Strategic management</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="col-md-6 col-lg-4" data-cue="slideInUp" data-group="services" data-show="true" style={{animationName: 'slideInUp', animationDuration: '700ms', animationTimingFunction: 'ease', animationDelay: '300ms', animationDirection: 'normal', animationFillMode: 'both'}}>
            <div className="d-flex flex-row">
              <div>
                <img src="src/img/icons/light-bulb.svg" className="svg-inject icon-svg icon-svg-sm text-yellow me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Citizen relationship management</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="col-md-6 col-lg-4" data-cue="slideInUp" data-group="services" data-show="true" style={{animationName: 'slideInUp', animationDuration: '700ms', animationTimingFunction: 'ease', animationDelay: '1500ms', animationDirection: 'normal', animationFillMode: 'both'}}>
            <div className="d-flex flex-row">
              <div>
                <img src="src/img/icons/light-bulb.svg" className="svg-inject icon-svg icon-svg-sm text-purple me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Channel &amp; Interaction</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="col-md-6 col-lg-4" data-cue="slideInUp" data-group="services" data-show="true" style={{animationName: 'slideInUp', animationDuration: '700ms', animationTimingFunction: 'ease', animationDelay: '600ms', animationDirection: 'normal', animationFillMode: 'both'}}>
            <div className="d-flex flex-row">
              <div>
                <img src="src/img/icons/light-bulb.svg" className="svg-inject icon-svg icon-svg-sm text-red me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Fraud Detection &amp; Prevention</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="col-md-6 col-lg-4" data-cue="slideInUp" data-group="services" data-show="true" style={{animationName: 'slideInUp', animationDuration: '700ms', animationTimingFunction: 'ease', animationDelay: '900ms', animationDirection: 'normal', animationFillMode: 'both'}}>
            <div className="d-flex flex-row">
              <div>
                <img src="src/img/icons/light-bulb.svg" className="svg-inject icon-svg icon-svg-sm text-pink me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Scheme &amp; Service Management</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/*/column */}
          <div className="col-md-6 col-lg-4" data-cue="slideInUp" data-group="services" data-show="true" style={{animationName: 'slideInUp', animationDuration: '700ms', animationTimingFunction: 'ease', animationDelay: '1200ms', animationDirection: 'normal', animationFillMode: 'both'}}>
            <div className="d-flex flex-row">
              <div>
                <img src="src/img/icons/light-bulb.svg" className="svg-inject icon-svg icon-svg-sm text-green me-4" alt="" />
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
    <section className="wrapper image-wrapper bg-image bg-overlay" data-image-src="src/img/photos/bg1.jpg" style={{backgroundImage: 'url("src/img/photos/bg1.jpg")'}}>
      <div className="container py-12 light-gallery-wrapper text-center">
        <div className="row">
          <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
            <h2 className="display-4 px-lg-10 px-xl-13 px-xxl-10 text-white">Data Security? We handled it.</h2>
            <a href="#" className="btn btn-white rounded mb-0 text-nowrap">Know More</a>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-16">
        <h2 className="display-4 mb-3 text-center">FAQ</h2>
        <p className="lead text-center mb-10 px-md-16 px-lg-0">If you don't see an answer to your question, you can send us an email from our contact form.</p>
        <div className="row">
          <div className="col-lg-4 mb-0">
            <h3 className> Title </h3>
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
            <h3 className>Title</h3>
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
            <h3 className>Title</h3>
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
          <div className="shape rounded-circle bg-soft-yellow rellax w-16 h-16" data-rellax-speed={1} style={{bottom: '0.5rem', right: '-1.7rem', transform: 'translate3d(0px, -1px, 0px)'}} />
          <div className="shape bg-dot primary rellax w-16 h-16" data-rellax-speed={1} style={{top: '-1rem', left: '-1.7rem', transform: 'translate3d(0px, -23px, 0px)'}} />
          <div className="carousel owl-carousel gap-small owl-loaded owl-drag" data-margin={0} data-dots="true" data-autoplay="false" data-autoplay-timeout={5000} data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;992&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1200&quot;:{&quot;items&quot;: &quot;3&quot;}}">
            {/* /.item */}
            {/* /.item */}
            {/* /.item */}
            {/* /.item */}
            {/* /.item */}
            {/* /.item */}
            <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-740px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2220px'}}><div className="owl-item" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <div className="card">
                        <div className="card-body">
                          <blockquote className="icon mb-0">
                            <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                            <div className="blockquote-details">
                              <img className="rounded-circle w-12" src="src/img/avatars/te1.jpg" srcSet="src/img/avatars/te1@2x.jpg 2x" alt="" />
                              <div className="info">
                                <h5 className="mb-1">Coriss Ambady</h5>
                                <p className="mb-0">Financial Analyst</p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.item-inner */}
                  </div></div><div className="owl-item" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <div className="card">
                        <div className="card-body">
                          <blockquote className="icon mb-0">
                            <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                            <div className="blockquote-details">
                              <img className="rounded-circle w-12" src="src/img/avatars/te2.jpg" srcSet="src/img/avatars/te2@2x.jpg 2x" alt="" />
                              <div className="info">
                                <h5 className="mb-1">Cory Zamora</h5>
                                <p className="mb-0">Marketing Specialist</p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.item-inner */}
                  </div></div><div className="owl-item active" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <div className="card">
                        <div className="card-body">
                          <blockquote className="icon mb-0">
                            <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                            <div className="blockquote-details">
                              <img className="rounded-circle w-12" src="src/img/avatars/te3.jpg" srcSet="src/img/avatars/te3@2x.jpg 2x" alt="" />
                              <div className="info">
                                <h5 className="mb-1">Nikolas Brooten</h5>
                                <p className="mb-0">Sales Manager</p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.item-inner */}
                  </div></div><div className="owl-item active" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <div className="card">
                        <div className="card-body">
                          <blockquote className="icon mb-0">
                            <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                            <div className="blockquote-details">
                              <img className="rounded-circle w-12" src="src/img/avatars/te4.jpg" srcSet="src/img/avatars/te4@2x.jpg 2x" alt="" />
                              <div className="info">
                                <h5 className="mb-1">Coriss Ambady</h5>
                                <p className="mb-0">Financial Analyst</p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.item-inner */}
                  </div></div><div className="owl-item active" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <div className="card">
                        <div className="card-body">
                          <blockquote className="icon mb-0">
                            <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                            <div className="blockquote-details">
                              <img className="rounded-circle w-12" src="src/img/avatars/te5.jpg" srcSet="src/img/avatars/te5@2x.jpg 2x" alt="" />
                              <div className="info">
                                <h5 className="mb-1">Jackie Sanders</h5>
                                <p className="mb-0">Investment Planner</p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                        {/* /.card-body */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.item-inner */}
                  </div></div><div className="owl-item" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <div className="card">
                        <div className="card-body">
                          <blockquote className="icon mb-0">
                            <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.”</p>
                            <div className="blockquote-details">
                              <img className="rounded-circle w-12" src="src/img/avatars/te6.jpg" srcSet="src/img/avatars/te6@2x.jpg 2x" alt="" />
                              <div className="info">
                                <h5 className="mb-1">Laura Widerski</h5>
                                <p className="mb-0">Sales Specialist</p>
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
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
            <h3 className="display-4 mb-6 text-center">Article</h3>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
        <div className="position-relative">
          <div className="shape bg-dot primary rellax w-17 h-20" data-rellax-speed={1} style={{top: '0px', left: '-1.7rem', transform: 'translate3d(0px, -2px, 0px)'}} />
          <div className="carousel owl-carousel gap-small blog grid-view owl-loaded owl-drag" data-margin={0} data-dots="true" data-autoplay="false" data-autoplay-timeout={5000} data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;992&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1200&quot;:{&quot;items&quot;: &quot;3&quot;}}">
            {/* /.item */}
            {/* /.item */}
            {/* /.item */}
            {/* /.item */}
            <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1480px'}}><div className="owl-item active" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <article>
                        <div className="card">
                          <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b4.jpg" alt="" /></a>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="card-body">
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Coding</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Ligula tristique quis risus</a></h2>
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
                              <li className="post-comments"><a href="#"><i className="uil uil-comment" />4</a></li>
                              <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />5</a></li>
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
                  </div></div><div className="owl-item active" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <article>
                        <div className="card">
                          <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b5.jpg" alt="" /></a>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="card-body">
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Workspace</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Nullam id dolor elit id nibh</a></h2>
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
                              <li className="post-comments"><a href="#"><i className="uil uil-comment" />3</a></li>
                              <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />3</a></li>
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
                  </div></div><div className="owl-item active" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <article>
                        <div className="card">
                          <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b6.jpg" alt="" /></a>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="card-body">
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Meeting</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Ultricies fusce porta elit</a></h2>
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
                              <li className="post-comments"><a href="#"><i className="uil uil-comment" />6</a></li>
                              <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />3</a></li>
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
                  </div></div><div className="owl-item" style={{width: '370px'}}><div className="item">
                    <div className="item-inner">
                      <article>
                        <div className="card">
                          <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b7.jpg" alt="" /></a>
                            <figcaption>
                              <h5 className="from-top mb-0">Read More</h5>
                            </figcaption>
                          </figure>
                          <div className="card-body">
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Business Tips</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Morbi leo risus porta eget</a></h2>
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
                              <li className="post-comments"><a href="#"><i className="uil uil-comment" />2</a></li>
                              <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />5</a></li>
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
  </div>
  {/* /.content-wrapper */}
< Footer />

</div>

       );
    }
}

export default Home;