import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(project => {
        var projectImage = 'images/portfolio/'+project.image;
        return <div key={project.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={project.url} onClick={() => window.open(project.url, "_blank")} title={project.title}>
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1 style={{fontSize: 30, color: '#000000'}}>My Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
