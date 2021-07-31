import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Easylegal extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">EasyLEGAL</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">EasyLEGAL</li>
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
  <section className="wrapper bg-light ">
    <div className="container py-14 pt-md-14 pb-md-18">
      {/*/.row */}
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-14 align-items-center">
        <div className="col-lg-7">
          <figure><img className="w-auto" src="src/img/about/Easylegal.png" alt /></figure>
        </div>
        {/*/column */}
        <div className="col-lg-5">
          <h2 className="fs-16 text-uppercase text-muted mb-3">Let’s Talk</h2>
          <h3 className="display-4 mb-3">Let's make something great together. We are trusted by over 5000+ clients.</h3>
          <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
        {/*/column */}
      </div>
      <div className="row gy-6 mb-14 mb-md-18">
        <div className="col-lg-12  pricing-wrapper">
          <div className="row gy-6 position-relative mt-5">
            <div className="shape bg-dot red rellax w-16 h-18" data-rellax-speed={1} style={{"bottom":"-0.5rem","right":"-1.6rem","-webkit-transform":"translate3d(0px, 101px, 0px)","-ms-transform":"translate3d(0px, 101px, 0px)","transform":"translate3d(0px, 101px, 0px)"}} />
            <div className="col-md-4">
              <div className="pricing card shadow-lg">
                <div className="card-body ">
                  <img src="src/img/easylegal/will_b.png" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                  <h4 className="card-title  mt-2">Will </h4>
                  <div className="prices text-dark">
                    <div className="price price-show"><span className="price-currency">₹</span><span className="price-value">15,000</span> <span className="price-duration">Starting</span></div>
                  </div>
                  <ul className="icon-list bullet-soft-primary mb-9">
                    <li><i className="uil uil-check fs-21" /><span><strong>5</strong> Projects </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>100K</strong> API Access </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>200MB</strong> Storage </span></li>
                    <li><i className="uil uil-check fs-21" /><span> Weekly <strong>Reports</strong></span></li>
                    <li><i className="uil uil-check fs-21" /><span> 7/24 <strong>Support</strong></span></li>
                  </ul>
                  <a href="" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            <div className="col-md-4">
              <div className="pricing card shadow-lg">
                <div className="card-body">
                  <img src="src/img/easylegal/trust_b.png" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                  <h4 className="card-title mt-2">Trust</h4>
                  <div className="prices text-dark">
                    <div className="price price-show"><span className="price-currency">₹</span><span className="price-value">15,000</span> <span className="price-duration">Starting</span></div>
                  </div>
                  <ul className="icon-list bullet-soft-primary  mb-9">
                    <li><i className="uil uil-check fs-21" /><span><strong>5</strong> Projects </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>100K</strong> API Access </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>200MB</strong> Storage </span></li>
                    <li><i className="uil uil-check fs-21" /><span> Weekly <strong>Reports</strong></span></li>
                    <li><i className="uil uil-check fs-21" /><span> 7/24 <strong>Support</strong></span></li>
                  </ul>
                  <a href="" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="col-md-4 ">
              <div className="pricing card shadow-lg">
                <div className="card-body ">
                  <img src="src/img/easylegal/probate_b.png" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                  <h4 className="card-title mt-2">Probate</h4>
                  <div className="prices text-dark">
                    <div className="price price-show"><span className="price-currency">₹</span><span className="price-value">15,000</span> <span className="price-duration">Starting</span></div>
                  </div>
                  <ul className="icon-list bullet-soft-primary mb-9">
                    <li><i className="uil uil-check fs-21" /><span><strong>20</strong> Projects </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>300K</strong> API Access </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>500MB</strong> Storage </span></li>
                    <li><i className="uil uil-check fs-21" /><span> Weekly <strong>Reports</strong></span></li>
                    <li><i className="uil uil-check fs-21" /><span> 7/24 <strong>Support</strong></span></li>
                  </ul>
                  <a href="" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
          <div className="row gy-6 position-relative mt-50">
            <div className="shape bg-dot red rellax w-16 h-18" data-rellax-speed={1} style={{"bottom":"-0.5rem","right":"-1.6rem","-webkit-transform":"translate3d(0px, 101px, 0px)","-ms-transform":"translate3d(0px, 101px, 0px)","transform":"translate3d(0px, 101px, 0px)"}} />
            <div className="col-md-4">
              <div className="pricing card shadow-lg">
                <div className="card-body ">
                  <img src="src/img/easylegal/poa_b.png" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                  <h4 className="card-title mt-2">Power of Attorney</h4>
                  <div className="prices text-dark">
                    <div className="price price-show"><span className="price-currency">₹</span><span className="price-value">15,000</span> <span className="price-duration">Starting</span></div>
                  </div>
                  <ul className="icon-list bullet-soft-primary  mb-9">
                    <li><i className="uil uil-check fs-21" /><span><strong>5</strong> Projects </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>100K</strong> API Access </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>200MB</strong> Storage </span></li>
                    <li><i className="uil uil-check fs-21" /><span> Weekly <strong>Reports</strong></span></li>
                    <li><i className="uil uil-check fs-21" /><span> 7/24 <strong>Support</strong></span></li>
                  </ul>
                  <a href="" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            <div className="col-md-4">
              <div className="pricing card shadow-lg">
                <div className="card-body">
                  <img src="src/img/easylegal/succession_b.png" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                  <h4 className="card-title mt-2">Letter of Succession</h4>
                  <div className="prices text-dark">
                    <div className="price price-show"><span className="price-currency">₹</span><span className="price-value">15,000</span> <span className="price-duration">Starting</span></div>
                  </div>
                  <ul className="icon-list bullet-soft-primary  mb-9">
                    <li><i className="uil uil-check fs-21" /><span><strong>5</strong> Projects </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>100K</strong> API Access </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>200MB</strong> Storage </span></li>
                    <li><i className="uil uil-check fs-21" /><span> Weekly <strong>Reports</strong></span></li>
                    <li><i className="uil uil-check fs-21" /><span> 7/24 <strong>Support</strong></span></li>
                  </ul>
                  <a href="" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className="col-md-4 ">
              <div className="pricing card shadow-lg">
                <div className="card-body ">
                  <img src="src/img/icons/search-1.svg" className="svg-inject icon-svg icon-svg-ss text-yellow mb-3" alt />
                  <h4 className="card-title mt-2">Corporate Plan</h4>
                  <div className="prices text-dark">
                    <div className="price price-show"><span className="price-currency">₹</span><span className="price-value">15,000</span> <span className="price-duration">Starting</span></div>
                  </div>
                  <ul className="icon-list bullet-soft-primary  mb-9">
                    <li><i className="uil uil-check fs-21" /><span><strong>20</strong> Projects </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>300K</strong> API Access </span></li>
                    <li><i className="uil uil-check fs-21" /><span><strong>500MB</strong> Storage </span></li>
                    <li><i className="uil uil-check fs-21" /><span> Weekly <strong>Reports</strong></span></li>
                    <li><i className="uil uil-check fs-21" /><span> 7/24 <strong>Support</strong></span></li>
                  </ul>
                  <a href="" className="btn btn-primary rounded-pill">Choose Plan</a>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/column */}
      </div>
    </div>
    {/* /.container */}
  </section>
</div>
</div>
       );
    }
}

export default Easylegal;