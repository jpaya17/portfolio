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
          <ProjectItem {...ProjectDetails.appsm} />
          <ProjectItem {...ProjectDetails.apppos} />
          <ProjectItem {...ProjectDetails.smartlift} />
          <ProjectItem {...ProjectDetails.mynh} />
          <ProjectItem {...ProjectDetails.deuce} />
          <ProjectItem {...ProjectDetails.kfew} />
          <ProjectItem {...ProjectDetails.pvmintranet} />
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
