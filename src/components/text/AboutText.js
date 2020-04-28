import React from 'react';

function AboutText() {
  return (
    <div className="about-text">
      <h1 className="about-title">
        Keen on <span className="yellow">Mobile Developer</span> specialised on <span className="yellow">Android</span> applications.
      </h1>
      <p>
        I started working as an Android Developer in 2013.
        I have been learning the most used technologies related to<span className="yellow"> Mobile </span>and<span className="yellow"> Web development</span> ever since.
        <br></br>As it is an industry in constant evolution, I like to spend my free time working on personal projects to proficient my literacy.
      </p>
      <h1 className="about-title">
        The technologies I have used the most so far are <span className="yellow"> Android SDK </span> and <span className="yellow"> Django. </span>
      </h1>
      <p>
        I took the ‘<span className="yellow">Android Development Online Course For Professionals</span>' course at <span className="yellow"> MindOrks </span> in 2019 and it was a revelation.
        It changed my approach on Software Development thoroughly and I felt confident to take up more ambitious
        projects using the most trending tools like <span className="yellow">MVVM</span>, <span className="yellow">Dagger</span> and <span className="yellow">RxJava</span>.
        I built an Instagram clone using all the above mentioned technologies while making contact with some amazing Indian developers as mentors.
      </p>
      <p>
        Currently I am working at <span className="yellow">ENGISOFT</span> developing applications for hospitality industry.
        <br></br>
        Addittionally, I keep working leisurely on an English-language-learning Android application and collaborating with the <span className="yellow">UrbanNoise</span> open-source project.
      </p>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .about-title {
      font-size: 1.4rem;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .about-text {
      color: white;
      font-family: var(--font4);
      padding-left: 3rem;
      padding-right: 3rem;
      text-align: left;
      font-size: 1rem;
    }
    .yellow {
      color: var(--color2);
      font-family: var(--font4);
    }
    @media (min-width: 801px) {
      .about-title {
        font-size: 2rem;
        text-align: left;
        margin-top: 4rem;
        margin-bottom: 3rem;
        line-height: 2.3rem;
      }
      .about-text {
        font-size: 1.2rem;
        line-height: 1.9rem;
      }
    }
  `}</style>
);

export default AboutText;
