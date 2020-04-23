import React from 'react';
import { useEffect } from 'react';

import Layout from "./Layout";
import PageTitle from "./PageTitle";
import ProjectItem from "./ProjectItem";
import ProjectDetails from "./text/ProjectDetails";

const title = "My Portfolio";

function Portfolio() {

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Layout>
      <div className="portfolio-container">
        <PageTitle title={title} />
        <div className="projects-section">
          <ProjectItem {...ProjectDetails.palette} />
          <ProjectItem {...ProjectDetails.elis} />
          <ProjectItem {...ProjectDetails.escuta} />
          <ProjectItem {...ProjectDetails.raum404} />
          <ProjectItem {...ProjectDetails.izem} />
        </div>
        {style}
      </div>
    </Layout>
  );
}

const style = (
  <style jsx>{`
  @media (min-width: 801px) {
      .projects-section {
        margin-top: 5rem;
        opacity: 0;
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
      }
      .portfolio-container {
        padding-left: var(--desktop-padding);
        padding-right: var(--desktop-padding);
      }
    }
   
    }
  `}</style>
);

export default Portfolio;
