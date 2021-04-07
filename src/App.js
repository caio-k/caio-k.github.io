import React from "react";
import Header from "./components/header";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Contacts from "./components/contacts";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Projects/>
        <Timeline/>
        <Skills/>
      </main>
      <Contacts/>
    </div>
  );
}

export default App;
