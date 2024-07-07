import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        if (projects.multipleImages) {
          return (
            <div>
              <Carousel key={projects.id} interval={2000}>
                {projects.urls.map(function (url) {
                  return (
                    <Carousel.Item key={url.id}>
                      <img src={url.url} alt="Project Image" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <div className="portfolio-item-desc">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div key={projects.id} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-link"></i>
                  </div>
                </a>
                <div className="portfolio-item-desc">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            </div>
          );
        }
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
