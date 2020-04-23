import React from 'react';

function HelloText() {
  return (
    <div className="hello-text">
      <p className="upper-text">
        This is Jose Maria. I am a <span className="yellow">Mobile Developer</span>, a traveller
        <span className=""> and a tennis lover.</span>
        <br />
        <p className="smaller2">
          I am currently based in Igualada, Spain working at ENGISOFT.
          Contributor of the UrbanNoise open-source project.
        </p>
        <div className="img-container">
          <img className="sardine" src="/portfolio/img/car.png" alt="car" />
        </div>
      </p>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .hello-text {
      width: 70%;
      color: white;
      font-family: var(--font2);
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding-left: 3rem;
      padding-right: 3rem;
      text-align: left;
      position: relative;
      z-index: -1;
    }
    .sardine {
      margin-top: 2rem;
      width: 12rem;
    }
    .img-container {
      text-align: center;
    }
    .upper-text {
      font-size: 1.6rem;
    }
    .smaller {
      font-size: 1.1rem;
    }
    .smaller2 {
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-family: var(--font5);
    }
    .yellow {
      color: var(--color2);
      font-size: 2rem;
      font-family: var(--font3);
    }
    @media (min-width: 801px) {
      .hello-text {
        width: 85%;
      }
      .upper-text {
        font-size: 2.3rem;
        font-family: var(--font4);
      }
      .smaller2 {
        font-size: 1.8rem;
        line-height: 2.4rem;
        font-family: var(--font4);
      }
      .yellow {
        font-size: 2.3rem;
        font-family: var(--font4);
      }
      .sardine {
        margin-top: 1.5rem;
        width: 15rem;
      }
    }
  `}</style>
);

export default HelloText;
