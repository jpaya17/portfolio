import React from 'react';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/jpayacastillo" target="_blank">
        <img className="social-icon-pic" src="/portfolio/img/linkedin.png" alt="LinkedIn Profile"/>
      </a>
      <a href="https://github.com/jpaya17" target="_blank">
        <img className="social-icon-pic" src="/portfolio/img/github.png" alt="Github Profile"/>
      </a>
      <a href="https://twitter.com/JoseMpaya" target="_blank">
        <img className="social-icon-pic" src="/portfolio/img/twitter.png" alt="Twitter Profile"/>
      </a>
      <a href="mailto:josepaya17@gmail.com" target="_blank">
        <img className="social-icon-pic mail" src="/portfolio/img/mail.png" alt="Send Email" />
      </a>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .social-icon-pic {
      width: 1.5rem;
      padding: 1rem;
    }
  `}</style>
);

export default SocialIcons;
