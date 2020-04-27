import React from 'react';

function AboutText() {
  return (
    <div className="about-text">
      <h1 className="about-title">
        A passionate <span className="yellow">Mobile Developer</span> specialised on Android applications.
      </h1>
      <p>
        I started working as an Android Developer in 2013.
        From that moment until now I have been learning the most used technologies related to Mobile and Web development.
        <br></br>As it is an industry in constant evolution I like to spend my free time working on personal projects to update
        my knowledge.
      </p>
      <h1 className="about-title">
        The technologies I have used the most so far are
        <span className="yellow"> Android SDK </span> and
        <span className="yellow"> Django. </span>
      </h1>
      <p>
        I took the ‘Android Development Online Course For Professionals' course at <span className="yellow"> MindOrks </span> in 2019 and it was a revelation.
        It completely changed my approach on Software Development and I felt confident to take on more ambitious
        projects using the most trending tools like MVVM, Dagger and RxJava.
        I built an Instagram clone using all these mentioned technologies while I connected with some amazing Indian developers as mentors.
      </p>
      <p>
        Currently I am working at ENGISOFT developing applications for hospitality industry.
        <br></br>
        Also working on my free time on an English-language-learning Android application and collaborating on the UrbanNoise open-source project.
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
