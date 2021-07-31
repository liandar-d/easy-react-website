import React from "react";

import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Blog extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
<div className="content-wrapper">
  <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{"background-image":"url(\"src/img/photos/bg3.jpg\")"}}>
    <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-1 mb-3 text-white">Security</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">security</li>
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
  <section className="wrapper bg-light">
    <div className="container pt-14 pt-md-16">
      <div className="row text-center">
        <div className="col-md-12 col-lg-12 ">
          <h3 className="display-4 mb-10 px-xl-10">Is your data safe with us?</h3>
          <p className>We are paranoid about data security. Just as you care about the security of your family, we ensure your data stays absolutely safe with us. We are not just a comprehensive digital archive with industry-leading security technology, we employ Banking level standards and 2048 bit SSl all through the site. But you may have heard this from others as well. But we went an extra mile to partner with Government of India's DigiLocker Initiative. You can read more about it later, but in short, we keep your data where some of the leading government agencies do.Most importantly, ONLY YOU can access it at all times.</p>
        </div>
        {/* /column */}
      </div>
    </div>
    {/* /.container */}
  </section>
  <section className="wrapper bg-light wrapper-border">
    <div className="container py-14 pt-md-16">
      <div className="row gx-md-8 gx-xl-10">
        <div className="col-lg-12">
          <div className="card bg-soft-leaf mb-10">
            <div className="card-body p-12 pb-0">
              <img src="src/img/easy/aws.png" className="svg-inject icon-svg icon-svg-imgg text-red mb-4" alt />
              <h3 className="h1 post-title mb-3">Securing Your Data with AWS Security Lab</h3>
              <p>We are hosted on Amazon Web Services and needless to say, we use their infrastructure security to the fullest. Within our systems, all your data is stored using AES-256 encryption with a uniquely derived key for each user. We encrypt every single personally identifiable (PII) field in the database, including your name and email address. For searching and indexing, we hash a number of fields using HMAC. We apply the same encryption technique to all files you upload or download.As with all systems such as ours, the security of your information depends on you. Choose a strong password (we enforce that as best we can) and never share it with anyone.</p>
            </div>
          </div>
          {/*/.card */}
        </div>
        {/* /column */}
        <div className="col-lg-12">
          <div className="card bg-soft-leaf mb-10">
            <div className="card-body p-12 pb-0">
              <img src="src/img/easy/digilocker.png" className="svg-inject icon-svg icon-svg-imgg text-red mb-4" alt />
              <h3 className="h1 post-title mb-3">Digital Archive at DigiLocker </h3>
              <p>We are a part of Government of India's DigiLocker initiative. Any file you wish to store on our site, is uploaded on DigiLocker. ONLY you can access these records and share with others when needed. All files have a HMAC signature is checked at both ends to ensure authenticity.</p>
            </div>
          </div>
          {/*/.card */}
        </div>
        {/* /column */}
        <div className="col-lg-12">
          <div className="card bg-soft-leaf mb-10">
            <div className="card-body p-12 pb-0">
              <img src="src/img/easy/ssl.png" className="svg-inject icon-svg icon-svg-imgg text-red mb-4" alt />
              <h3 className="h1 post-title mb-3">Securing Your Data in Transit</h3>
              <p>All communications between you and EasyInherit are encrypted via SSL using 2048-bit certificates and we require SSL on all communications. We support perfect forward secrecy so that even if someone eavesdrops on your communication, they will still not be able to decrypt the data in the event that our key is compromised.</p>
            </div>
          </div>
          {/*/.card */}
        </div>
        <div className="col-lg-12">
          <div className="card bg-soft-leaf mb-10">
            <div className="card-body p-12 pb-0">
              <img src="src/img/easy/aws-inspector.png" className="svg-inject icon-svg icon-svg-imgg text-red mb-4" alt />
              <h3 className="h1 post-title mb-3">Operational Procedures to Keep the Site Secure</h3>
              <p>EasyInherit follows best practices to keep your data secure. We regularly audit our environments and code for security issues and apply patches expeditiously. We use commercial services that regularly check our site and we retain our own security experts to probe and verify the security of our site.</p>
            </div>
          </div>
          {/*/.card */}
        </div>
        <div className="col-lg-12">
          <div className="card bg-soft-leaf mb-10">
            <div className="card-body p-12 pb-0">
              <img src="src/img/easy/privacy_shield.png" className="svg-inject icon-svg icon-svg-imgg text-red mb-4" alt />
              <h3 className="h1 post-title mb-3">Restricted Access to your Information</h3>
              <p>Our strict internal procedures prevent any EasyInherit employee or administrator from gaining access to your account, beyond a limited set of data necessary to help grant you access to your account (e.g. triggering confirmation emails) and restricting access to your account in urgent circumstances (e.g. limiting or removing access). EasyInherit administrators can never see the plan information that you fill out or any documents that you upload. EasyInherit logs and regularly audits all accesses to your account, whether by you, an administrator or your deputies.</p>
            </div>
          </div>
          {/*/.card */}
        </div>
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
</div>
</div>
       );
    }
}

export default Blog;