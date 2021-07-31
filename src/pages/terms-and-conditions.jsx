import React from "react";

import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Terms_and_conditions extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">Terms and Conditions</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Terms and Conditions</li>
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
          <p className="mb-6">The information contained in this website is for general information purposes only and specifically for Indian citizens. The information is provided by us - EasyInherit which is a platform by Quaish Bizsense Private Limited is based on best of our knowledge and experience basis our vision of making Inheritance processes hassle-free. The information may need to be interpreted for individuals differently depending upon their language fluency, assets and liabilities, residential and citizenship status etc. We endeavour to keep the information up-to-date and relevant basis the law of the land. We advise on user discretion. We do not assure about the information and counsel provided by us in terms of completeness, accuracy, reliability and appropriateness. The information, products, services, or communication on the website and our other social media handles are to be used in conjunction with specific user discretion. Any reliance you place on such information is therefore strictly at your own risk.</p>
          <p className="mb-6">In no event we will be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or damages arising out of, or in connection with, the use of this website.</p>
          <p className="mb-6"> Through this website you are offered the facility to link to EasyWill a Will Making application and software. Our EasyWill application is developed by EasyInherit team in consultation with lawyers. We at EasyInherit have endeavoured to provide a solution to create and EasyWill for common usage of will drafting. However, we advise all our customers to seek legal assistance from our legal team or independently at their end. EasyInherit takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
          <h3 className>For use of Legal Information</h3>
          <p className="mb-6">EasyInherit does not have any practice in law or any representation of its customers in any court of Law or forum which is prohibited by the Bar Council of India or under any other relevant Act. EasyInherit is not an advertising service for lawyers. EasyInherit merely provides EasyWill Software Application, EasyPortofolio for easy documentation, and Inheritance consultation, translation, litigation co-ordination support and law community services at nominal charges subject to change from time to time and case to case. </p>
          <p className="mb-6"> This site provides information about the law designed to help users to safely cope with their own legal needs. But legal information is not to be confused with legal advice, since the application of law depends on each user’s specific circumstances. Although we extend ourselves to make sure that our documents and data are accurate and useful, we recommend that you to consult a practicing lawyer/law firm if you wish to get professional assurance that our information and your interpretation of it is appropriate to your particular situation.</p>
          <p className="mb-6"> EasyInherit shall not be responsible for any direct, indirect, special, coincidental, consequential or any other damages whatsoever and whosoever caused, arising out of or in connection with the use of the site or Legal Opinion in reliance of the information available on the site, including any loss of use, lost data, lost business profits, business interruption, personal injury, or any other pecuniary loss, whether in an action of contract, negligence or other tortuous action, even if the operator of the site has been informed of the possibility thereof.</p>
          <p className="mb-6">Quaish Bizsense Pvt Ltd. and its directors, employees, or its alliance partners, contract lawyers, advisors, vendors, agencies will not be liable for any damages/litigation/legislation for the services being provided on the website </p>
          <h3 className>For Do-It-Yourself Will Writing Software Application</h3>
          <p className="mb-6">EasyWill is an application software developed by Quaish Bizsense Private Limited with required legal domain knowledge of experienced lawyers as well as reputed software developers to provide a web-based software which allows our customers to write a simple Will by answering few questions. This App is a tool which helps our customers mentioning all important and legally required details subject to conditions that a person who is creating a Will is above 18 years of age and has understood the subject from details provided in EasyInherit and other information in the public domain. The EasyWill app is developed to cover all common details to create a simple Will. </p>
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

export default Terms_and_conditions;