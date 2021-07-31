import React from "react";
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Privacy_Policy extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">Privacy Policy</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
          <h2 className="display-4 mb-3">Your privacy is important to us.</h2>
          <p className="mb-6">This privacy statement explains the personal data EasyInherit processes, how EasyInherit processes it, and for what purposes.Please read the product-specific details in this privacy statement, which provide additional relevant information.</p>
          <p className="mb-6">This statement applies to the interactions EasyInherit has with you and the EasyInherit products listed below, as well as other EasyInherit products that display this statement.</p>
          <div className="row gy-3 gx-xl-8">
            <div className="col-xl-12">
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li><span><i className="uil uil-check" /></span><span>We collect data from you, through our interactions with you and through our products. You provide some of this data directly, and we get some of it by collecting data about your interactions, use, and experiences with our products.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span>The data we collect depends on the context of your interactions with EasyInherit and the choices you make, including your privacy settings and the products and features you use. We also obtain data about you from third parties. </span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span><b>Personal Data -</b>  We DO NOT SHARE your personal data with anyone without your explicit permission and in the context of certain products. We share your personal information with our lawyers and legal experts in the context of a Legal Consult AFTER we have mutually signed non-disclosures and a Power of Attorney. Such information is protected and bound by the Attorney-Client privilege.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span><b>Asset Information -</b> We DO NOT SHARE your asset information with anyone without your explicit permission and in the context of certain products. You have full control on permitting and withdrawing such permission, to the system to share data with a person or persons of your choice. At no point does EasyInherit or its employees have access to this data or can further distribute this data.</span></li>
                <li className="mt-3"><span><i className="uil uil-check" /></span><span><b>Cookies and Similar technologies -</b> Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. We use cookies and similar technologies for storing and honouring your preferences and settings, enabling you to sign in,combating fraud and analysing how our products perform. You have full control on refusing to install our cookies or restrict their usage without compromising any of the key functionality of the products.</span></li>
              </ul>
            </div>
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

export default Privacy_Policy;