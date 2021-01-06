import React from "react";
import { Navigation } from "components/Navigation";
import { Welcome } from "components/Welcome";
import { Projects } from "components/Projects";
import { Contact } from "components/Contact";

export const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navigation />
      <Welcome />
      <Projects />
      <Contact />
    </div>
  );
};
