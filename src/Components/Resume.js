import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school} className="educationItem">
            <div className="resume-images-div">
              <img className="resume-images" src={education.image} alt="" />
            </div>
            <h3>{education.school}</h3>
            <p className="info">{education.degree}</p>
            <p className="info">
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.id} className="workItem">
            <div className="resume-images-div">
              <img className="resume-images" src={work.image} alt="" />
            </div>
            <h3>{work.company}</h3>
            <p className="info">{work.title}</p>
            <p className="info">
              <em className="date">{work.years}</em>
            </p>
            <div className="workDescriptions">
              <ul>
                {work.description1 && <li>{work.description1}</li>}
                {work.description2 && <li>{work.description2}</li>}
                {work.description3 && <li>{work.description3}</li>}
                {work.description4 && <li>{work.description4}</li>}
                {work.description5 && <li>{work.description5}</li>}
                {work.description6 && <li>{work.description6}</li>}
              </ul>
            </div>
          </div>
        );
      });

      var skills = this.props.data.skills.map(function (skills) {
        return (
          <Carousel.Item className="skills-carousel">
            <h1 className="skillCat">{skills.category}</h1>
            <div className="skill-bars">
              {skills.items.map(function (item) {
                var className = "bar-expand " + item.name.toLowerCase();
                return (
                  <div className="bars">
                    <ul className="skills">
                      <li key={item.name}>
                        <span
                          style={{ width: item.level }}
                          className={className}
                        ></span>
                        <img
                          className="skills-images"
                          src={item.image}
                          alt=""
                        />
                        <p>{item.name}</p>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        );
      });
    }

    return (
      <div>
        <section id="resume">
          <section id="education">
            <div className="row education">
              <div className="three columns header-col">
                <h1>
                  <span>Education</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">{education}</div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section id="work">
            <div className="row work">
              <div className="three columns header-col">
                <h1>
                  <span>Work</span>
                </h1>
              </div>

              <div className="nine columns main-col">{work}</div>
            </div>
          </section>
          <hr />
          <section id="skills">
            <div className="row skill">
              <div className="three columns header-col">
                <h1>
                  <span>Skills</span>
                </h1>
              </div>

              <div className="nine columns main-col skills-carousel">
                <Carousel interval={2500}>{skills}</Carousel>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Resume;
