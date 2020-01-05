import React, { Component } from 'react';
import { Card, Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(project => {
        var projectImage = 'images/portfolio/'+project.image;
        return (
        <Card style={{maxWidth: 345}}>
            <CardActionArea>
              <CardMedia
                style={{height: 140}}
                image={projectImage}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.category}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(project.url, "_blank")}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        )
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
