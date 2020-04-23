import React from 'react';
import PageTitle from "./PageTitle";
import HelloText from "./text/HelloText";
import LinkBox from "./LinkBox";

function Hello(props) {
  const helloContainerClassName = props.fireAnimation
    ? "hello-container animate"
    : "hello-container";
  return (
    <div className={helloContainerClassName}>
      <PageTitle title="Hi there!" />
      <div className="under-the-title">
        <HelloText />
        <LinkBox link={"/about"} name="about me" showArrow="true" />
        <LinkBox link={"/portfolio"} name="portfolio" showArrow="true" />
        <LinkBox link={"/skills"} name="skills" showArrow="true" />
        <LinkBox
          externalLink={"/portfolio/img/cv2020.pdf"}
          target={"_blank"}
          name="cv"
          showArrow="true"
        />
      </div>
      {style}
    </div>
  );
}
const style = (
  <style jsx>{`
    .hello-container {
      opacity: 0;
      margin-bottom: 2rem;
    }
    .animate {
      animation: fadeIn 1.5s;
      animation-fill-mode: forwards;
    }

    .under-the-title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 801px) {
      .hello-container {
        padding-left: var(--desktop-padding);
        padding-right: var(--desktop-padding);
      }
      .under-the-title {
        margin-bottom: 3rem;
      }
    }
  `}</style>
);
export default Hello;
