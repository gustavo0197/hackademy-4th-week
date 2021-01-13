import React from "react";

export const Projects = () => {
  return (
    <section id="projects">
      <h1 id="projects__title">These are some of my projects</h1>
      <div id="projects__container">
        <div className="project-tile">
          <figure>
            <a href="https://github.com/gustavo0197/react-typescript" target="_blank">
              <img
                className="project-tile__image"
                src={require("assets/images/react-typescript.png")}
                alt="React typescript"
              />
              <figcaption className="project-tile__title">React - Typescript template</figcaption>
            </a>
          </figure>
        </div>
        <div className="project-tile">
          <a href="https://github.com/gustavo0197/dart-jwt-decoder" target="_blank">
            <figure>
              <img
                className="project-tile__image"
                src={require("assets/images/jwt.png")}
                alt="React typescript"
              />
              <figcaption className="project-tile__title">Dart JWT decoder</figcaption>
            </figure>
          </a>
        </div>
        <div className="project-tile">
          <a href="https://github.com/gustavo0197/react-jwt" target="_blank">
            <figure>
              <img
                className="project-tile__image"
                src={require("assets/images/jwt.png")}
                alt="React typescript"
              />
              <figcaption className="project-tile__title">React JWT decoder</figcaption>
            </figure>
          </a>
        </div>
        <div className="project-tile">
          <a href="https://github.com/gustavo0197/express-template" target="_blank">
            <figure>
              <img
                className="project-tile__image"
                src={require("assets/images/express.png")}
                alt="React typescript"
              />
              <figcaption className="project-tile__title">Express - MongoDB template</figcaption>
            </figure>
          </a>
        </div>
        <div className="project-tile">
          <a href="https://github.com/gustavo0197/graphql-template" target="_blank">
            <figure>
              <img
                className="project-tile__image"
                src={require("assets/images/graphql.png")}
                alt="React typescript"
              />
              <figcaption className="project-tile__title">Koa - TS - GraphQL template</figcaption>
            </figure>
          </a>
        </div>
      </div>
      <div id="profile-link__container">
        <a href="https://github.com/gustavo0197" id="profile-link" target="_blank">
          Show all
        </a>
      </div>
    </section>
  );
};
