import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Easyclaims extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">EasyCLAIMS</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">EasyCLAIMS</li>
            </ol>
          </nav>
          {/* /nav */}
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
        <div className="col-lg-6 position-relative order-lg-2">
          <figure className><img src="src/img/about/Easyclaims.png" alt /></figure>
        </div>
        {/*/column */}
        <div className="col-lg-6">
          <h2 className="display-4 mb-3">Welcome to EasyClaims One-Step.</h2>
          <p className="mb-6">We understand the hassles involved in submitting claims after a bereavement. EasyClaims One-Step helps you reduce the paperwork and tediousness from the process. The following information will help our claims processors understand your situation and start creating an appropriate docket for you. </p>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-soft-primary ">
    <div className="container pt-19 pt-md-10 pb-16 pb-md-10">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 mb-10 px-xl-10">EasyCLAIMS Benefits</h3>
        </div>
        {/* /column */}
      </div>
      <div className="row text-center py-md-2">
        <div className="col-md-6 col-lg-4">
          <div className="card bluee txt-al">
            <div className="card-body">
              <img src="src/img/easy/1.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Secure Payments</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4">
          <div className="card greenn txt-al">
            <div className="card-body">
              <img src="src/img/easy/2.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Secure Payments</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4">
          <div className="card bluee txt-al">
            <div className="card-body">
              <img src="src/img/easy/3.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Secure Payments</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
      </div>
      <div className="row text-center py-md-2">
        <div className="col-md-6 col-lg-4">
          <div className="card greenn txt-al">
            <div className="card-body">
              <img src="src/img/easy/4.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Secure Payments</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4">
          <div className="card bluee txt-al">
            <div className="card-body">
              <img src="src/img/easy/5.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Secure Payments</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
        <div className="col-md-6 col-lg-4">
          <div className="card greenn txt-al">
            <div className="card-body">
              <img src="src/img/easy/6.png" className="svg-inject icon-svg icon-svg-img text-red mb-4" alt />
              <h4>Secure Payments</h4>
              <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            </div>
            {/*/.card-body */}
          </div>
          {/*/.card */}
        </div>
        {/*/column */}
      </div>
    </div>
  </section>
  <section className="wrapper bg-light ">
    <div className="container pt-19 pt-md-10 pb-16 pb-md-10">
      {/* /.row */}
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          <h2 className="display-4 mb-3 text-center">Feel free to connect with us anytime you have a question. We are always happy to help.</h2>
          <form className="contact-form" method="post" action="src/php/contact.php" noValidate="true">
            <div className="messages" />
            <div className="controls">
              <div className="row gx-4">
                <div className="col-md-6">
                  <div className="form-label-group mb-4">
                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Jane" required="required" data-error="First Name is required." />
                    <label htmlFor="form_name">First Name *</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* /column */}
                <div className="col-md-6">
                  <div className="form-label-group mb-4">
                    <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Doe" required="required" data-error="Last Name is required." />
                    <label htmlFor="form_lastname">Last Name *</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* /column */}
                <div className="col-md-6">
                  <div className="form-label-group mb-4">
                    <input id="form_email" type="email" name="email" className="form-control" placeholder="jane.doe@example.com" required="required" data-error="Valid email is required." />
                    <label htmlFor="form_email">Email *</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* /column */}
                <div className="col-md-6">
                  <div className="form-label-group mb-4">
                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Your phone number" />
                    <label htmlFor="form_phone">Phone</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* /column */}
                <div className="col-12">
                  <div className="form-label-group mb-4">
                    <textarea id="form_message" name="message" className="form-control" placeholder="Your message" rows={5} required="required" data-error="Message is required." defaultValue={""} />
                    <label htmlFor="form_message">Message *</label>
                    <div className="help-block with-errors" />
                  </div>
                </div>
                {/* /column */}
                <div className="col-12 text-center">
                  <input type="submit" className="btn btn-primary rounded-pill btn-send mb-3" defaultValue="Send message" />
                  <p className="text-muted"><strong>*</strong> These fields are required.</p>
                </div>
                {/* /column */}
              </div>
              {/* /.row */}
            </div>
            {/* /.controls */}
          </form>
          {/* /form */}
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>

</div>






            
            );
        }
    }
    
    export default Easyclaims;