import React from 'react';
import { useEffect } from 'react';

import Layout from "./Layout";
import PageTitle from "./PageTitle";
import SkillBar from "./SkillBar";

const title = "My Technical Skills";

function Skills() {

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Layout>
      <PageTitle title={title} />
      <div className="books-pic-container">
        <img className="books" src="/portfolio/img/skills.png" alt="me-carrying-books" />
      </div>
      <PageTitle title="Frameworks / Technologies" />
      <div className="skill-bar-group">
        <SkillBar skillName="Android" percentage="90%" />
        <SkillBar skillName="iOS" percentage="50%" />
        <SkillBar skillName="Django" percentage="65%" />
        <SkillBar skillName="Ionic Framework" percentage="55%" />
      </div>
      <PageTitle title="Programming Languages" />      
      <div className="skill-bar-group">
        <SkillBar skillName="Java" percentage="90%" />
        <SkillBar skillName="Kotlin" percentage="70%" />
        <SkillBar skillName="Javascript" percentage="75%" />
        <SkillBar skillName="Python" percentage="50%" />
        <SkillBar skillName="Swift" percentage="35%" />
      </div>
      <PageTitle title="Others" />
      <div className="skill-bar-group">
        <SkillBar skillName="Design Patters" percentage="55%" />
        <SkillBar skillName="Clean Architecture" percentage="65%" />
        <SkillBar skillName="S.O.L.I.D Principles" percentage="85%" />
        <SkillBar skillName="Git" percentage="80%" />
      </div>
      <PageTitle title="Languages" />
      <div className="skill-bar-group">
        <SkillBar skillName="English" percentage="75%" />
        <SkillBar skillName="Spanish" percentage="90%" />
        <SkillBar skillName="Catalan" percentage="90%" />
      </div>
      {style}
    </Layout>
  );
}

const style = (
  <style jsx>{`
    .books {
      width: 10rem;
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
        width: 15rem;
        height: auto;
      }
    }
  `}</style>
);

export default Skills;
