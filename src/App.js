import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";

import Home from "./routes/Home";
import Team from "./routes/Team";
import Events from "./routes/Events";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
