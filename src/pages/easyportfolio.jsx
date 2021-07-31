import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Easyportfolio extends React.Component{
    render() {
      
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">Easy Portfolio</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Easy Portfolio</li>
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
    <div className="container py-14 py-md-26">
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center">
        <div className="col-lg-6">
          <figure><img className="w-auto" src="src/img/about/Easyportfolio.png" alt /></figure>
        </div>
        {/*/column */}
        <div className="col-lg-6">
          <h3 className="display-5 mb-5">We are a creative company that focuses on establishing long-term relationships with customers.</h3>
          <p className="mb-7">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula.</p>
        </div>
        {/*/column */}
      </div>
      {/*/.row */}
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light">
    <div className="container pt-14 py-md-26">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 mb-10 px-xl-10">What We Do</h3>
          <p className="mb-7">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="position-relative">
        <div className="shape rounded-circle bg-soft-blue rellax w-16 h-16" data-rellax-speed={1} style={{"bottom":"-0.5rem","right":"-2.2rem","z-index":"0","-webkit-transform":"translate3d(0px, 44px, 0px) translate3d(0px, 14px, 0px)","-ms-transform":"translate3d(0px, 44px, 0px) translate3d(0px, 14px, 0px)","transform":"translate3d(0px, 44px, 0px) translate3d(0px, 14px, 0px)"}} />
        <div className="shape bg-dot primary rellax w-16 h-17" data-rellax-speed={1} style={{"top":"-0.5rem","left":"-2.5rem","z-index":"0","-webkit-transform":"translate3d(0px, 14px, 0px) translate3d(0px, -11px, 0px)","-ms-transform":"translate3d(0px, 14px, 0px) translate3d(0px, -11px, 0px)","transform":"translate3d(0px, 14px, 0px) translate3d(0px, -11px, 0px)"}} />
        <div className="row gx-md-5 gy-5 text-center">
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img src="src/img/icons/search-1.svg" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                <h4>Hassle-Free </h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img src="src/img/icons/browser.svg" className="svg-inject icon-svg icon-svg-ss text-red mb-3" alt />
                <h4>Contact-less Delivery</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img src="src/img/icons/chat-2.svg" className="svg-inject icon-svg icon-svg-ss text-green mb-3" alt />
                <h4>Expert Counsel</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img src="src/img/icons/megaphone.svg" className="svg-inject icon-svg icon-svg-ss text-blue mb-3" alt />
                <h4>Technology powered</h4>
                <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
              {/*/.card-body */}
            </div>
            {/*/.card */}
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.position-relative */}
    </div>
    {/* /.container */}
  </section>
</div>
</div>
       );
    }
}

export default Easyportfolio;