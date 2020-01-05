import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
         <QueueAnim interval={300} duration={1000}>
            <div key="1"><h2 style={{color: '#FFFFFF'}}>This is</h2></div>
            <div key="2"><h1 className="responsive-headline">{name}</h1></div>
            <h3 key="3"><span>{description}</span></h3>
            <hr key="3" />
            <ul key="3" className="social">
               {networks}
            </ul>
         </QueueAnim>
         
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
