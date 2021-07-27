import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Contact extends React.Component{
    render() {
        return ( 

<div>
  <div className="content-wrapper">
    < Header />
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{backgroundImage: 'url("src/img/photos/bg3.jpg")'}}>
      <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-1 mb-3 text-white">Contact</h1>
            <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb text-white">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">contact</li>
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
      <div className="container py-14 py-md-56">
        <div className="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
          <div className="col-lg-7 order-lg-2 position-relative">
            <figure><img className="w-auto" src="src/img/concept/concept14.png" srcSet="src/img/concept/concept14@2x.png 2x" alt="" /></figure>
          </div>
          {/*/column */}
          <div className="col-lg-5">
            <h2 className="display-4 mb-3">Let’s Talk</h2>
            <p className="lead fs-lg">Let's make something great together. We are <span className="underline purple">trusted by</span> over 5000+ clients. Join them by using our services and grow your business.</p>
            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </section>
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-14 py-md-56">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row gy-10 gx-lg-8 gx-xl-12">
              <div className="col-lg-8">
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
                      <div className="col-12">
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
              {/*/column */}
              <div className="col-lg-4">
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-location-pin-alt" /> </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Bengaluru</h5>
                    <address>C-1021, Windmills of the Mind, Whitefield, Bengaluru 560 066
                      India <br className="d-none d-md-block" />(+91 ) 99024-35733</address>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-location-pin-alt" /> </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Mumbai</h5>
                    <address>113-114 Raheja Crest 2
                      Lokhandwala Complex
                      Andheri West, Mumbai 400053
                      India
                      India <br className="d-none d-md-block" />(+91 ) 99024-35733</address>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-6 mt-n1"> <i className="uil uil-location-pin-alt" /> </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Kolkata</h5>
                    <address>25/C/2 Belvedere Road
                      Alipore
                      Kolkata 700 027
                      India
                      India <br className="d-none d-md-block" />(+91 ) 99024-35733</address>
                  </div>
                </div>
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
< Footer />

</div>



       );
    }
}

export default Contact;