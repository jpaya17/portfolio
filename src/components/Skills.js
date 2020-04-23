import React from 'react';
import Layout from "./Layout";
import PageTitle from "./PageTitle";
import SkillBar from "./SkillBar";

function Skills() {
  return (
    <Layout>
      <PageTitle title="my technical Skills" />
      <div className="books-pic-container">
        <img className="books" src="/portfolio/img/bookish.png" alt="me-carrying-books" />
      </div>

      <div className="skill-bar-group">
        <SkillBar skillName="JavaScript" percentage="90%" />
        <SkillBar skillName="React" percentage="85%" />
        <SkillBar skillName="Next.js" percentage="85%" />
        <SkillBar skillName="CSS" percentage="90%" />
        <SkillBar skillName="HTML" percentage="90%" />
        <SkillBar skillName="React-Native" percentage="50%" />
        <SkillBar skillName="jQuery" percentage="70%" />
        <SkillBar skillName="Python" percentage="50%" />
        <SkillBar skillName="Figma" percentage="50%" />
        <SkillBar skillName="Git" percentage="65%" />
      </div>
      {style}
    </Layout>
  );
}

const style = (
  <style jsx>{`
    .books {
      width: 15rem;
      height: auto;
    }
    .books-pic-container {
      text-align: center;
      opacity: 0;
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
    }
    .skill-bar-group {
      padding-top: 2rem;
      padding-bottom: 5rem;
      padding-right: var(--global-margin);
      padding-left: var(--global-margin);
      opacity: 0;
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
    }
    @media (min-width: 801px) {
      .skill-bar-group {
        padding-left: var(--desktop-padding);
        padding-right: var(--desktop-padding);
      }
      .books {
        width: 20rem;
        height: auto;
      }
    }
  `}</style>
);

export default Skills;
