import React from "react";
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, NavLink} from "react-router-dom";


class Blog_post extends React.Component{
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
    <div className="container pb-14 pb-md-16">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="blog ">
            <div className="card">
              <div className="card-body">
                <div className="classic-view">
                  <article className="post">
                    <div className="post-content mb-5">
                      <h2 className="h1 mb-4">Cras mattis consectetur purus fermentum</h2>
                      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.</p>
                      <p>Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.</p>
                      <div className="row g-6 mt-3 mb-10 light-gallery-wrapper">
                        <div className="col-md-6">
                          <figure className="hover-scale rounded"><a href="src/img/photos/b8-full.jpg" className="lightbox" data-sub-html=".caption"> <img src="src/img/photos/b8.jpg" alt /></a></figure>
                          <div className="caption d-none">
                            <h5>Heading</h5>
                            <p>Purus Vulputate Sem Tellus Quam</p>
                          </div>
                        </div>
                        {/*/column */}
                        <div className="col-md-6">
                          <figure className="hover-scale rounded"><a href="src/img/photos/b9-full.jpg" className="lightbox"> <img src="src/img/photos/b9.jpg" alt /></a></figure>
                        </div>
                        {/*/column */}
                        <div className="col-md-6">
                          <figure className="hover-scale rounded"><a href="src/img/photos/b10-full.jpg" className="lightbox"> <img src="src/img/photos/b10.jpg" alt /></a></figure>
                        </div>
                        {/*/column */}
                        <div className="col-md-6">
                          <figure className="hover-scale rounded"><a href="src/img/photos/b11-full.jpg" className="lightbox"> <img src="src/img/photos/b11.jpg" alt /></a></figure>
                        </div>
                        {/*/column */}
                      </div>
                      {/* /.row */}
                      <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna.</p>
                      <blockquote className="fs-lg my-8">
                        <p>Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit purus.</p>
                        <footer className="blockquote-footer">Very important person</footer>
                      </blockquote>
                      <h3 className="h2 mb-4">Sit Vulputate Bibendum Purus</h3>
                      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper.</p>
                      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    </div>
                    {/* /.post-content */}
                  </article>
                  {/* /.post */}
                </div>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac. Maecenas faucibus mollis interdum.</p>
                <nav className="nav social">
                  <a href="#"><i className="uil uil-twitter" /></a>
                  <a href="#"><i className="uil uil-facebook-f" /></a>
                  <a href="#"><i className="uil uil-dribbble" /></a>
                  <a href="#"><i className="uil uil-instagram" /></a>
                  <a href="#"><i className="uil uil-youtube" /></a>
                </nav>
                {/* /.social */}
                <hr />
                <h3 className="mb-6">You Might Also Like</h3>
                <div className="carousel owl-carousel blog grid-view mb-16 owl-loaded owl-drag" data-margin={30} data-dots="true" data-autoplay="false" data-autoplay-timeout={5000} data-responsive="{&quot;0&quot;:{&quot;items&quot;: &quot;1&quot;}, &quot;768&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;992&quot;:{&quot;items&quot;: &quot;2&quot;}, &quot;1200&quot;:{&quot;items&quot;: &quot;2&quot;}}">
                  {/* /.item */}
                  {/* /.item */}
                  {/* /.item */}
                  {/* /.item */}
                  <div className="owl-stage-outer"><div className="owl-stage" style={{"-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)","-webkit-transition":"all 0s ease 0s","transition":"all 0s ease 0s","width":"1960px"}}><div className="owl-item active" style={{"width":"459.992px","margin-right":"30px"}}><div className="item">
                          <article>
                            <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"><span className="bg" /> <img src="src/img/photos/b4.jpg" alt /></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Coding</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Ligula tristique quis risus</a></h2>
                            </div>
                            {/* /.post-header */}
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt" /><span>14 Apr 2021</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment" />4</a></li>
                              </ul>
                              {/* /.post-meta */}
                            </div>
                            {/* /.post-footer */}
                          </article>
                          {/* /article */}
                        </div></div><div className="owl-item active" style={{"width":"459.992px","margin-right":"30px"}}><div className="item">
                          <article>
                            <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"><span className="bg" /> <img src="src/img/photos/b5.jpg" alt /></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Workspace</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Nullam id dolor elit id nibh</a></h2>
                            </div>
                            {/* /.post-header */}
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt" /><span>29 Mar 2021</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment" />3</a></li>
                              </ul>
                              {/* /.post-meta */}
                            </div>
                            {/* /.post-footer */}
                          </article>
                          {/* /article */}
                        </div></div><div className="owl-item" style={{"width":"459.992px","margin-right":"30px"}}><div className="item">
                          <article>
                            <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"><span className="bg" /> <img src="src/img/photos/b6.jpg" alt /></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Meeting</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Ultricies fusce porta elit</a></h2>
                            </div>
                            {/* /.post-header */}
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt" /><span>26 Feb 2021</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment" />6</a></li>
                              </ul>
                              {/* /.post-meta */}
                            </div>
                            {/* /.post-footer */}
                          </article>
                          {/* /article */}
                        </div></div><div className="owl-item" style={{"width":"459.992px","margin-right":"30px"}}><div className="item">
                          <article>
                            <figure className="overlay overlay1 hover-scale rounded mb-5"><a href="#"><span className="bg" /> <img src="src/img/photos/b7.jpg" alt /></a>
                              <figcaption>
                                <h5 className="from-top mb-0">Read More</h5>
                              </figcaption>
                            </figure>
                            <div className="post-header">
                              <div className="post-category text-line">
                                <a href="#" className="hover" rel="category">Business Tips</a>
                              </div>
                              {/* /.post-category */}
                              <h2 className="post-title h3 mt-1 mb-3"><a className="link-dark" href="blog-post.html">Morbi leo risus porta eget</a></h2>
                            </div>
                            <div className="post-footer">
                              <ul className="post-meta mb-0">
                                <li className="post-date"><i className="uil uil-calendar-alt" /><span>7 Jan 2021</span></li>
                                <li className="post-comments"><a href="#"><i className="uil uil-comment" />2</a></li>
                              </ul>
                              {/* /.post-meta */}
                            </div>
                            {/* /.post-footer */}
                          </article>
                          {/* /article */}
                        </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i className="uil-arrow-left" /></button><button type="button" role="presentation" className="owl-next"><i className="uil-arrow-right" /></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span /></button><button role="button" className="owl-dot"><span /></button><button role="button" className="owl-dot"><span /></button></div></div>
                {/* /.owl-carousel */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.blog */}
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

export default Blog_post;