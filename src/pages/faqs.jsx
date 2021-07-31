import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Faqs extends React.Component{
    render() {
      window.scrollTo(0, 0);

        return ( 

<div>
  <div className="content-wrapper">
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="src/img/photos/bg3.jpg" style={{backgroundImage: 'url("src/img/photos/bg3.jpg")'}}>
      <div className="container pt-17 pb-15 pt-md-14 pb-md-14 text-center">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-1 mb-3 text-white">FAQs</h1>
            <nav className="d-inline-block" aria-label="breadcrumb">
              <ol className="breadcrumb text-white">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
        <p className="lead text-center mb-10 px-md-16 px-lg-0">If you don't see an answer to your question, you can send us an email from our contact form.</p>
        <div className="row">
          <div className="col-lg-6 mb-0">
            <div id="accordion-1" className="accordion-wrapper">
              <div className="card">
                <div className="card-header" id="accordion-heading-1-1">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-1" aria-expanded="false" aria-controls="accordion-collapse-1-1">Can I cancel my subscription?</button>
                </div>
                {/* /.card-header */}
                <div id="accordion-collapse-1-1" className="collapse" aria-labelledby="accordion-heading-1-1" data-bs-target="#accordion-1">
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
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-2" aria-expanded="false" aria-controls="accordion-collapse-1-2">Which payment methods do you accept?</button>
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
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-3" aria-expanded="false" aria-controls="accordion-collapse-1-3">How can I manage my Account?</button>
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
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-4" aria-expanded="false" aria-controls="accordion-collapse-1-4">Is my credit card information secure?</button>
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
          <div className="col-lg-6">
            <div id="accordion-2" className="accordion-wrapper">
              <div className="card">
                <div className="card-header" id="accordion-heading-2-1">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-1" aria-expanded="false" aria-controls="accordion-collapse-2-1">How do I get my subscription receipt?</button>
                </div>
                {/* /.card-header */}
                <div id="accordion-collapse-2-1" className="collapse" aria-labelledby="accordion-heading-2-1" data-bs-target="#accordion-2">
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
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-2" aria-expanded="false" aria-controls="accordion-collapse-2-2">Are there any discounts for people in need?</button>
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
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-3" aria-expanded="false" aria-controls="accordion-collapse-2-3">Do you offer a free trial edit?</button>
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
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-4" aria-expanded="false" aria-controls="accordion-collapse-2-4">How do I reset my Account password?</button>
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
  </div>
  {/* /.content-wrapper */}

</div>


       );
    }
}

export default Faqs;