import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Mamadou MENDY</a></h1>
              <span className="email"><i className="icon-mail"></i> uodamam.mendy02@gmail.com</span>
              <span className="number"><i className="icon-phone"></i> +337 51 90 55 50</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#" data-nav-section="home">Introduction</a></li>
                  <li><a href="#" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/momo.mamadou.5074" target="_blank"><i className="icon-facebook2" /></a></li>
                <li><a href="https://twitter.com/mmsupergenius" target="_blank"><i className="icon-twitter2" /></a></li>               
                <li><a href="https://www.linkedin.com/in/mamadou-mendy-1998b9119" target="_blank"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/mmgenius" target="_blank"><i className="icon-github"></i></a></li>
                
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>                   
              </small></p>            
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
