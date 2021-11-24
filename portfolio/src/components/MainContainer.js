import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
import About from "./About";
import Work from "./Work";
// import Nav from "./navbar"
import Contact from "./Contact";

export default function MainContainer() {
//   const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Work") {
//       return <Work />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <About />
      <Work/>
      <Contact/>
    
    </div>
  );
}