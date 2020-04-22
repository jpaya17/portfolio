import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import ProjectItem from "../components/ProjectItem";
import ProjectDetails from "../components/text/ProjectDetails";

function Portfolio() {
  return (
    <Layout>
      <div className="portfolio-container">
        <PageTitle title="my Portfolio" />
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
