import React from 'react';

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/jpayacastillo" target="_blank">
        <img className="social-icon-pic" src="/portfolio/img/linkedin.png" alt="linkedin"/>
      </a>
      <a href="mailto:josepaya17@gmail.com" target="_blank">
        <img className="social-icon-pic mail" src="/portfolio/img/mail.png" alt="mail" />
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
