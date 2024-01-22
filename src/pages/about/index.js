import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  technicalskills,
  professionalskills,
  education,
  workexperience
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7">
            {technicalskills.map((skill, i) => (
              <div key={i}>
                <h3 className="progress-title">{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.value}%` }}
                  >
                    <div className="progress-value">{skill.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Professional Skills</h3>
          </Col>
          <Col lg="7">
            {professionalskills.map((skill, i) => (
              <div key={i}>
                <h3 className="progress-title">{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.value}%` }}
                  >
                    <div className="progress-value">{skill.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {education.map((edu, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{edu.title}</h5>
                {Array.isArray(edu.description) ? (
                  <ul>
                    {edu.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="service_desc">{edu.description}</p>
                )}
              </div>
            ))}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {workexperience.map((exp, i) => (
              <div className="service_ py-4" key={i}>
                <h5 className="service__title">{exp.title}</h5>
                {Array.isArray(exp.description) ? (
                  <ul>
                    {exp.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="service_desc">{exp.description}</p>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default About;
