import React from "react";

import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Refund_policy extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">Refund Policy</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Refund Policy</li>
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
    <div className="container py-14 py-md-16">
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
        <div className="col-lg-12">
          <h2 className="display-4 mb-3">Your happiness is important to us.</h2>
          <p className="lead fs-lg">At EasyInherit, we have full confidence in our varied range of services, products and solutions. We leave no stone unturned in providing our esteemed clients fast, reliable and exceptional service guarantee every time in time we do business with them.</p>
          <p className="mb-6">All the services available at EasyInherit's website are carried out for the clients after extensive analysis using complete scope documentation. It ensures full understanding of the work and almost no possibilities of any project cancellation, reversal or dispute.</p>
          <p className="mb-6">However, in the rarest occassion where you are not satisfied with our products or services, we are happy to refund, subject to certain conditions.</p>
          <div className="row gy-3 gx-xl-8">
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check" /></span><span>A subscriber can place the cancellation order for a particular service within 3 days of service agreement via e-mail to info@easyinherit.in</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span> Fees are due after signing a contract. Fee, once paid, will not be refunded in any case if the cancellation is posted after 24 hours of paying a fee.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span> A service stands cancel if next payment is not received within 7 working days.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span> No refund is possible for the fee paid in the form of administrative fees or taxes paid to the government or regulatory bodies.</span></li>
              </ul>
            </div>
            {/*/column */}
            <div className="col-xl-6">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check" /></span><span>here is always a certain set of resources that are involved in achieving every milestone of a campaign. Thus, a refund would not be entertained for the work already completed.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span>EasyInherit is not liable to pay refund if delay or service disruption happens due to third party involvement or factors beyond our control.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span>All refunds are credited to the client's bank account with 7 days from acceptance of a refund request.</span></li>
              </ul>
            </div>
            {/*/column */}
            <p className="lead fs-lg">If case of any questions or clarifications, please write to us info@easyinherit.in. We would be happy to talk to you.</p>
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

export default Refund_policy;