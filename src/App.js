import React from 'react';
import { useRef, useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hello from "./components/Hello";

function App() {
  const [fireAnimation, setFireAnimation] = useState(false);

  let helloSection = useRef();

  function srollDownToHelloSection() {
    helloSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function fireAnimationWhenScrollingDown() {
    setFireAnimation(window.scrollY > 365);
  }

  useEffect(() => {
    window.addEventListener("scroll", fireAnimationWhenScrollingDown);
  }, []);

  return (
    <div>
      <Layout>
        <div
          className="landing-page-container"
          onClick={srollDownToHelloSection}
        >
          <div className="landing-logo-container">
            <div className="landing-logo-wrapper">
              <img className="avatar" src="/portfolio/img/avatar1.png" alt="avatar" />
              <h1 className="over">over-</h1>
              <h1 className="dub">duB</h1>
              <hr></hr>
              <h2 className="web">WEB DEV.</h2>
            </div>
          </div>
          <div className="arrow-container">
            <img className="arrow" src="/portfolio/img/arrow.png" alt="arrow" />
          </div>
        </div>
        <div className="hello-section" ref={helloSection}>
          <Hello fireAnimation={fireAnimation} />
        </div>
      </Layout>

      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .landing-page-container {
      animation: fadeIn 2s;
      animation-fill-mode: forwards;
      cursor: pointer;
    }
    .landing-logo-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .avatar {
      width: 5.5rem;
      height: auto;
      margin-left: -0.5rem;
    }

    .over {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 3.5rem;

      margin-top: -1rem;
    }
    .dub {
      color: var(--color2);
      font-family: var(--font2);
      font-size: 6rem;
      margin-top: -1.6rem;
    }
    h1,
    h2 {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    hr {
      margin-block-start: 0;
      margin-block-end: 0;
      border-color: white;
      width: 5.5rem;
      border-top: 1px solid white;
      margin-inline-start: 5rem;
      margin-top: -1.3rem;
      margin-inline-end: 0;
    }
    .web {
      font-family: var(--font3);
      color: white;
      font-size: 1.15rem;
      margin-left: 5.2rem;
      margin-top: 0.1rem;
    }
    .arrow-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: 10rem;
      transform: translateY(-4rem);
    }
    .hello-section {
      margin-top: -5rem;
      position: relative;
      opacity: 1;
      transition: opacity 1s linear;
    }
    @media (min-width: 801px) {
      .landing-logo-wrapper {
        transform: scale(1.4) translateZ(-1em);
      }
    }
  `}</style>
);

export default App;
