import React from "react";
import Header from "./components/header";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Contacts from "./components/contacts";

function App() {
  return (
    <div>
      <Header/>
      <Skills/>
      <Timeline/>
      <Contacts/>
    </div>
  );
}

export default App;
