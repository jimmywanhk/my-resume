import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school} className="educationItem">
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
        //console.log(skills.category);
        //console.log(skills.items);
        //var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <Carousel.Item className="skills-carousel">
            <div className="skillsCatDiv">
              <h1 className="skillCat">{skills.category}</h1>
            </div>
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
                      <em>{item.name}</em>
                    </li>
                  </ul>
                </div>
              );
            })}
          </Carousel.Item>
        );
      });
    }

    return (
      <section id="resume">
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

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col skills-carousel">
            <Carousel interval={3000}>{skills}</Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
