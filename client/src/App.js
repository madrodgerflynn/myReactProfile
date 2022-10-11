import NavBar from "./componenets/NavBar";
import Bio from "./componenets/Bio";
import Contact from "./componenets/Contact";
import MyShtuff from "./componenets/MyShtuff";
import Footer from "./componenets/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Bio");
  function render() {
    if (currentPage === "Bio") {
      return <Bio />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "MyShtuff") {
      return <MyShtuff />;
    }
  }
  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      <div class="renderedData">{render()}</div>
      <Footer />
    </>
  );
}

export default App();
