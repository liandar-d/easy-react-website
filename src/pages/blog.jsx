import React from "react";
import Header from './header';
import Footer from './footer';
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
          <h1 className="display-1 mb-3 text-white">Blog</h1>
          <nav className="d-inline-block" aria-label="breadcrumb">
            <ol className="breadcrumb text-white">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
    <div className="container pt-19 pt-md-10 pb-16 pb-md-10">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          {/* /.blog */}
          <div className="blog grid grid-view">
            <div className="row isotope gx-md-8 gy-8 mb-8" style={{"position":"relative","height":"1347.72px"}}>
              <article className="item post col-md-6" style={{"position":"absolute","left":"0%","top":"0px"}}>
                <div className="card">
                  <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b4.jpg" alt /></a>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <a href="#" className="hover" rel="category">Coding</a>
                      </div>
                      {/* /.post-category */}
                      <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Ligula tristique quis risus</NavLink></h2>
                    </div>
                    {/* /.post-header */}
                    <div className="post-content">
                      <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                    </div>
                    {/* /.post-content */}
                  </div>
                  {/*/.card-body */}
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt" /><span>14 Apr 2021</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment" />4</a></li>
                      <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />5</a></li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </article>
              {/* /.post */}
              <article className="item post col-md-6" style={{"position":"absolute","left":"50%","top":"0px"}}>
                <div className="card">
                  <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b5.jpg" alt /></a>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <a href="#" className="hover" rel="category">Workspace</a>
                      </div>
                      {/* /.post-category */}
                      <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Nullam id dolor elit id nibh</NavLink></h2>
                    </div>
                    {/* /.post-header */}
                    <div className="post-content">
                      <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                    </div>
                    {/* /.post-content */}
                  </div>
                  {/*/.card-body */}
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt" /><span>29 Mar 2021</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment" />3</a></li>
                      <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />3</a></li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </article>
              {/* /.post */}
              <article className="item post col-md-6" style={{"position":"absolute","left":"0%","top":"673.859px"}}>
                <div className="card">
                  <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b6.jpg" alt /></a>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <a href="#" className="hover" rel="category">Meeting</a>
                      </div>
                      {/* /.post-category */}
                      <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Ultricies fusce porta elit</NavLink></h2>
                    </div>
                    {/* /.post-header */}
                    <div className="post-content">
                      <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                    </div>
                    {/* /.post-content */}
                  </div>
                  {/*/.card-body */}
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt" /><span>26 Feb 2021</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment" />6</a></li>
                      <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />3</a></li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </article>
              {/* /.post */}
              <article className="item post col-md-6 blog-post-allign" style={{"position":"absolute","left":"50%","top":"673.859px"}}>
                <div className="card">
                  <figure className="card-img-top overlay overlay1 hover-scale"><a href="#"><span className="bg" /> <img src="src/img/photos/b7.jpg" alt /></a>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <a href="#" className="hover" rel="category">Business Tips</a>
                      </div>
                      {/* /.post-category */}
                      <h2 className="post-title h3 mt-1 mb-3"><NavLink className="link-dark" to="blog-post">Morbi leo risus porta eget</NavLink></h2>
                    </div>
                    <div className="post-content">
                      <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                    </div>
                    {/* /.post-content */}
                  </div>
                  {/*/.card-body */}
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt" /><span>7 Jan 2021</span></li>
                      <li className="post-comments"><a href="#"><i className="uil uil-comment" />2</a></li>
                      <li className="post-likes ms-auto"><a href="#"><i className="uil uil-heart-alt" />5</a></li>
                    </ul>
                    {/* /.post-meta */}
                  </div>
                  {/* /.card-footer */}
                </div>
                {/* /.card */}
              </article>
              {/* /.post */}
            </div>
            {/* /.row */}
          </div>
          {/* /.blog */}
          <nav className="d-flex" aria-label="pagination">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true"><i className="uil uil-arrow-left" /></span>
                </a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true"><i className="uil uil-arrow-right" /></span>
                </a>
              </li>
            </ul>
            {/* /.pagination */}
          </nav>
          {/* /nav */}
        </div>
        {/* /column */}
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