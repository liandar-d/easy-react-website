import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class About extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">About</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">about</li>
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
      <div className="row gx-lg-12 gx-xl-12 gy-12 align-items-center">
        <div className="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
          <figure className><img src="src/img/about/about7.png" alt /></figure>
        </div>
        {/*/column */}
        <div className="col-lg-6">
          <h2 className="display-4 mb-3">Who Are We?</h2>
          <p className="mb-6">Both the EasyInherit co-founders were fortunate enough to have parents who had well documented Wills. But the succession process was exhausting and time-consuming. Even bank account transfers, where the co-founders were nominees, made them face the reality of bureaucratic processes. All to claim what was rightfully theirs.</p>
          <p>They heard the same story from numerous friends and family.</p>
          <p>This led to the idea of EasyInherit which is the platform to facilitate all aspects of Inheritance Management - documentation, probates, succession, claims and transfers.</p>
          <p>All this, in a secure, transparent, efficient and outcome based model.</p>
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
          <h3 className="display-4 mb-10 px-xl-10">Our Philosophy</h3>
          <p className="mb-7">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="position-relative">
        <div className="shape rounded-circle bg-soft-blue rellax w-16 h-16" data-rellax-speed={1} style={{"bottom":"-0.5rem","right":"-2.2rem","z-index":"0","-webkit-transform":"translate3d(0px, 14px, 0px)","-ms-transform":"translate3d(0px, 14px, 0px)","transform":"translate3d(0px, 14px, 0px)"}} />
        <div className="shape bg-dot primary rellax w-16 h-17" data-rellax-speed={1} style={{"top":"-0.5rem","left":"-2.5rem","z-index":"0","-webkit-transform":"translate3d(0px, -11px, 0px)","-ms-transform":"translate3d(0px, -11px, 0px)","transform":"translate3d(0px, -11px, 0px)"}} />
        <div className="row gx-md-5 gy-5 text-center">
          <div className="col-md-6 col-xl-3">
            <div className="card shadow-lg">
              <div className="card-body">
                <img src="src/img/about/hassle-free.png" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
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
                <img src="src/img/about/contactless-delivery.png" className="svg-inject icon-svg icon-svg-ss text-red mb-3" alt />
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
                <img src="src/img/about/counsel.png" className="svg-inject icon-svg icon-svg-ss text-green mb-3" alt />
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
                <img src="src/img/about/technology.png" className="svg-inject icon-svg icon-svg-ss text-blue mb-3" alt />
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
  <section className="wrapper bg-light">
    <div className="container py-10 ">
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h3 className="display-4 mb-10 px-xl-10">Meet the Team</h3>
        </div>
        {/* /column */}
      </div>
      <div className="grid mb-5 ">
        <div className="row isotope gy-6 " style={{"position":"relative","height":"452px"}}>
          <div className="item col-md-6 col-xl-6" style={{"position":"absolute","left":"0%","top":"0px"}}>
            <div className="card shadow-lg">
              <div className="card-body">
                <blockquote className="icon mb-0">
                  <p>Sejal Sheth started the first decade of her career as a marketing professional with the communications agency JWT. Post that she spent the next decade establishing a Sustainability Consulting firm called Green Evangelist. She is an alumnus of NMIMS and has done her Strategic Management from IIM Calcutta. EasyInherit is her vision to make Inheritance for loved ones become a source of ‘joy and pride’ - like it’s meant to be – by eliminating all the ‘daud-bhaag’ around it.</p>
                  <div className="blockquote-details">
                    <div className="info ps-0">
                      <h5 className="mb-1">Sejal Sheth</h5>
                      <p className="mb-0">CO-FOUNDER AND CEO</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item col-md-6 col-xl-6" style={{"position":"absolute","left":"50%","top":"0px"}}>
            <div className="card shadow-lg">
              <div className="card-body">
                <blockquote className="icon mb-0">
                  <p>A technopreneur with more than two decades in the technology industry, this is Soubir's second venture. An alumnus of IIM-K, he worked in the Silicon Valley with companies like Xerox PARC, Hewitt and Oracle on a wide range of technologies and domains. His last venture was a successful CRM product which he continues to direct. EasyInherit was born out of a desire to see his family, and many like his, navigate the legal quagmire of inheritance planning in India.</p>
                  <div className="blockquote-details">
                    <div className="info ps-0">
                      <h5 className="mb-1">Soubir Bose</h5>
                      <p className="mb-0">CO-FOUNDER AND CTO</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
      </div>
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper ">
    <div className="row text-center">
      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <h3 className="display-4 mb-10 px-xl-10">Meet the Team</h3>
      </div>
      {/* /column */}
    </div>
    <div className="row text-center py-md-26">
      <div className="col-md-6 col-lg-2 offset-md-1">
        <div className="card bg-pale-red">
          <div className="card-body">
            <img src="src/img/icons/cloud-computing-3.svg" className="svg-inject icon-svg icon-svg-ss text-red mb-4" alt />
            <h4>Daily Updates</h4>
            <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            <NavLink to="about" className="more hover link-red">Learn More</NavLink>
          </div>
          {/*/.card-body */}
        </div>
      </div>
      {/*/column */}
      <div className="col-md-6 col-lg-2">
        <div className="card bg-pale-aqua">
          <div className="card-body">
            <img src="src/img/icons/shield.svg" className="svg-inject icon-svg icon-svg-ss text-aqua mb-4" alt />
            <h4>Secure Payments</h4>
            <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            <NavLink to="about" className="more hover link-aqua">Learn More</NavLink>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
      <div className="col-md-6 col-lg-2">
        <div className="card bg-pale-red">
          <div className="card-body">
            <img src="src/img/icons/cloud-computing-3.svg" className="svg-inject icon-svg icon-svg-ss text-red mb-4" alt />
            <h4>Daily Updates</h4>
            <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            <NavLink to="about" className="more hover link-red">Learn More</NavLink>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
      <div className="col-md-6 col-lg-2">
        <div className="card bg-pale-aqua">
          <div className="card-body">
            <img src="src/img/icons/shield.svg" className="svg-inject icon-svg icon-svg-ss text-aqua mb-4" alt />
            <h4>Secure Payments</h4>
            <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            <NavLink to="about" className="more hover link-aqua">Learn More</NavLink>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
      <div className="col-md-6 col-lg-2">
        <div className="card bg-pale-red">
          <div className="card-body">
            <img src="src/img/icons/cloud-computing-3.svg" className="svg-inject icon-svg icon-svg-ss text-red mb-4" alt />
            <h4>Daily Updates</h4>
            <p className="mb-2">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
            <NavLink to="about" className="more hover link-red">Learn More</NavLink>
          </div>
          {/*/.card-body */}
        </div>
        {/*/.card */}
      </div>
      {/*/column */}
    </div>
  </section>
</div>
  {/* /.content-wrapper */}
</div>



       );
    }
}

export default About;