import React from 'react';
import PageContent from './PageContent';
import About from './About';
import Work from './Work';
import Contact from './Contact';


function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Work />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
