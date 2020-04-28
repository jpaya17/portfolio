(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,n,t){e.exports=t(28)},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(15),l=t.n(i),o=t(4),m=t(6),c=t(9);var s=r.a.createElement("style",{jsx:!0},"\n    .social-icons {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .social-icon-pic {\n      width: 1.5rem;\n      padding: 1rem;\n    }\n  "),d=function(){return r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://www.linkedin.com/in/jpayacastillo",target:"_blank"},r.a.createElement("img",{className:"social-icon-pic",src:"/portfolio/img/linkedin.png",alt:"LinkedIn Profile"})),r.a.createElement("a",{href:"https://github.com/jpaya17",target:"_blank"},r.a.createElement("img",{className:"social-icon-pic",src:"/portfolio/img/github.png",alt:"Github Profile"})),r.a.createElement("a",{href:"https://twitter.com/JoseMpaya",target:"_blank"},r.a.createElement("img",{className:"social-icon-pic",src:"/portfolio/img/twitter.png",alt:"Twitter Profile"})),r.a.createElement("a",{href:"mailto:josepaya17@gmail.com",target:"_blank"},r.a.createElement("img",{className:"social-icon-pic mail",src:"/portfolio/img/mail.png",alt:"Send Email"})),s)};var p=r.a.createElement("style",{jsx:!0},"\n    .hamburger-menu-container {\n      height: 100vh;\n      width: 100vw;\n      left: 0;\n      top: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      z-index: 300;\n    }\n    .nested-menu-container {\n      background: -webkit-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -o-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: -moz-linear-gradient(165deg, white 65%, #f6f6f6 65%);\n      background: linear-gradient(165deg, white 60%, #f6f6f6 60%);\n      height: 100%;\n      width: 100%;\n\n      font-size: 1.05rem;\n      font-family: var(--font3);\n      letter-spacing: 0.1rem;\n    }\n    .menu-contents {\n      height: 100%;\n      display: flex;\n      margin-top: -2rem;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .menu-contents > a {\n      padding: 1rem;\n    }\n\n    .get-in-touch {\n      text-align: center;\n      transform: translateY(3rem);\n    }\n    .get-in-touch > p {\n      color: black;\n\n      font-size: 0.8rem;\n    }\n  "),f=function(e){return r.a.createElement("div",{className:"hamburger-menu-container"},r.a.createElement("div",{className:"nested-menu-container"},r.a.createElement("div",{className:"menu-contents"},r.a.createElement(o.b,{to:"/"},r.a.createElement("a",{onClick:e.handleHamburgerClick},"HELLO")),r.a.createElement(o.b,{to:"/about"},r.a.createElement("a",{onClick:e.handleHamburgerClick},"ABOUT ME")),r.a.createElement(o.b,{to:"/myportfolio"},r.a.createElement("a",{onClick:e.handleHamburgerClick},"PORTFOLIO")),r.a.createElement(o.b,{to:"/skills"},r.a.createElement("a",{onClick:e.handleHamburgerClick},"SKILLS")),r.a.createElement("a",{href:"/img/cv2020.pdf",target:"_blank",onClick:e.handleHamburgerClick},"CV"),r.a.createElement("div",{className:"get-in-touch"},r.a.createElement("p",null,"GET IN TOUCH"),r.a.createElement(d,null)))),p)};var g=r.a.createElement("style",{jsx:!0},"\n    .lines {\n      padding-top: 2.3rem;\n      margin-right: var(--global-margin);\n      width: 100%;\n      height: 40%;\n    }\n\n    .line {\n      margin-bottom: 0.5rem;\n      width: 2rem;\n      border-bottom: 0.2rem solid white;\n      position: relative;\n      transition: transform 0.3s;\n    }\n    @media (min-width: 801px) {\n      .hamburger-container {\n        display: none;\n      }\n    }\n  "),u=r.a.createElement("style",{jsx:!0},"\n    body {\n      overflow: hidden;\n    }\n    .line {\n      border-bottom: 0.2rem solid black;\n      z-index: 400;\n      margin-bottom: 0;\n      transition: transform 0.3s;\n    }\n    .lower-line {\n      transform: rotate(-45deg) translateY(-0.15rem);\n      transform-origin: center;\n    }\n    .upper-line {\n      transform: rotate(45deg) translateY(0.15rem);\n      transform-origin: center;\n    }\n  "),h=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1],l=function(){return i(!t)};return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement("div",{className:"lines",onClick:l},r.a.createElement("div",{className:"line upper-line"}),r.a.createElement("div",{className:"line lower-line"})),t?r.a.createElement(f,{handleHamburgerClick:l}):null,g,t?u:null)},E=[{name:"HELLO",link:"/"},{name:"ABOUT ME",link:"/about"},{name:"PORTFOLIO",link:"/myportfolio"},{name:"SKILLS",link:"/skills"}];var w=r.a.createElement("style",{jsx:!0},"\n    .desktop-nav-container {\n      z-index: 100;\n      width: 100%;\n      position: absolute;\n      padding-top: 2rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-family: var(--font2);\n      font-size: 0.8rem;\n      background-color: var(--color1);\n    }\n    .desktop-nav-container > * {\n      padding: 2.3rem;\n    }\n    .bottom-line {\n      padding-top: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n      margin-left: 0.5rem;\n      visibility: hidden;\n      opacity: 0;\n      transition: visibility 0s, opacity 0.3s linear;\n      position: absolute;\n    }\n    .menu-item-name:hover + .bottom-line {\n      visibility: visible;\n      opacity: 1;\n    }\n    @media (max-width: 801px) {\n      .desktop-nav-container {\n        display: none;\n      }\n    }\n  "),b=function(){return r.a.createElement("div",{className:"desktop-nav-container"},E.map((function(e){return r.a.createElement("div",{className:"title-plus-line-container"},r.a.createElement(o.b,{to:e.link},r.a.createElement("a",{className:"menu-item-name"},e.name)),r.a.createElement("div",{className:"bottom-line"}))})),r.a.createElement("div",{className:"title-plus-line-container"},r.a.createElement("a",{className:"menu-item-name",href:"/portfolio/img/cv2020.pdf",target:"_blank"},"CV"),r.a.createElement("div",{className:"bottom-line"})),w)};var v=r.a.createElement("style",{jsx:!0},"\n    .header-container {\n      height: 5rem;\n      display: flex;\n      justify-content: space-between;\n      position: fixed;\n      top: 0;\n      width: 100%;\n      z-index: 400;\n    }\n  "),k=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement(b,{className:"desktop-nav"}),r.a.createElement(h,null),v)},y=r.a.createElement("style",{jsx:!0,global:!0},'\n    @font-face {\n      font-family: "PxGroteskBold";\n      src: url("fonts/PxGrotesk-Bold.woff2") format("woff2");\n      src: url("fonts/PxGrotesk-Bold.woff") format("woff");\n      src: url("fonts/PxGroteskBold.ttf") format("truetype");\n    }\n    @font-face {\n      font-family: "Sectra";\n      src: url("fonts/Sectra.woff2") format("woff2");\n      src: url("fonts/Sectra.woff") format("woff");\n      src: url("fonts/Sectra.ttf") format("truetype");\n    }\n    @font-face {\n      font-family: "WorkSans-Bold";\n      src: url("fonts/WorkSans-Bold.woff2") format("woff2");\n      src: url("fonts/WorkSans-Bold.woff") format("woff");\n      src: url("fonts/WorkSans-Bold.ttf") format("truetype");\n    }\n    @font-face {\n      font-family: "WorkSans-Regular";\n      src: url("fonts/WorkSans-Regular.ttf") format("truetype");\n    }\n\n    :root {\n      --global-margin: 2rem;\n      --desktop-padding: 25%;\n      --color1: #607D8B;\n      --color2: #fff55a;\n      --font1: "Sectra";\n      --font2: "PxGroteskBold";\n      --font3: "WorkSans-Bold";\n      --font4: "WorkSans-Regular";\n      --line-width: 0.1rem;\n    }\n    body {\n      background-color: var(--color1);\n      margin: 0;\n    }\n    a {\n      text-decoration: none;\n      color: inherit;\n    }\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n\n      to {\n        opacity: 1;\n      }\n    }\n  ');var x=r.a.createElement("style",{jsx:!0},"\n    .container {\n      position: relative;\n      width: 100%;\n    }\n    .footer {\n      width: 100%;\n      position: absolute;\n      bottom: -2;\n      margin-bottom: 1rem;\n      margin-top: 2rem;\n      text-align: center;\n      color: white;\n      font-family: var(--font4);\n      font-size: 0.8rem;\n    }\n    .github-link {\n      color: var(--color2);\n    }\n    .open-source {\n      margin-bottom: 0.5rem;\n    }\n  "),N=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(k,null),e.children,r.a.createElement("div",{className:"footer"},r.a.createElement(d,null))),y,x)};var j=r.a.createElement("style",{jsx:!0},"\n    .page-title-container {\n      padding-top: 30%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      opacity: 0;\n      animation: fadeIn 1s;\n      animation-fill-mode: forwards;\n    }\n    .page-title {\n      color: var(--color2);\n      font-family: var(--font3);\n      text-align: center;\n      font-size: 1.3rem;\n    }\n    .title-line {\n      margin-bottom: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n      margin-left: 3.3rem;\n    }\n    @media (min-width: 801px) {\n      .page-title-container {\n        padding-top: 10rem;\n      }\n    }\n  "),S=function(e){return r.a.createElement("div",{className:"page-title-container"},r.a.createElement("div",{className:"page-title"},e.title),r.a.createElement("div",{className:"title-line"}),j)};var I=r.a.createElement("style",{jsx:!0},"\n    .hello-text {\n      width: 70%;\n      color: white;\n      font-family: var(--font2);\n      margin-top: 2rem;\n      margin-bottom: 2rem;\n      padding-left: 3rem;\n      padding-right: 3rem;\n      text-align: left;\n      position: relative;\n      z-index: -1;\n    }\n    .sardine {\n      margin-top: 2rem;\n      width: 12rem;\n    }\n    .img-container {\n      text-align: center;\n    }\n    .upper-text {\n      font-size: 1.6rem;\n    }\n    .smaller {\n      font-size: 1.1rem;\n    }\n    .smaller2 {\n      font-size: 1.3rem;\n      line-height: 1.5rem;\n      font-family: var(--font5);\n    }\n    .yellow {\n      color: var(--color2);\n    }\n    @media (min-width: 801px) {\n      .hello-text {\n        width: 85%;\n      }\n      .upper-text {\n        font-size: 2.3rem;\n        font-family: var(--font4);\n      }\n      .smaller2 {\n        font-size: 1.8rem;\n        line-height: 2.4rem;\n        font-family: var(--font4);\n      }\n      .sardine {\n        margin-top: 1.5rem;\n        width: 15rem;\n      }\n    }\n  "),O=function(){return r.a.createElement("div",{className:"hello-text"},r.a.createElement("p",{className:"upper-text"},"This is Jose Maria. I am a ",r.a.createElement("span",{className:"yellow"},"Mobile Developer"),", a traveller and a tennis lover.",r.a.createElement("br",null),r.a.createElement("p",{className:"smaller2"},"I am currently based in Igualada, Spain. Working at ",r.a.createElement("span",{className:"yellow"},"ENGISOFT")," and contributing on the ",r.a.createElement("span",{className:"yellow"},"UrbanNoise")," open-source project."),r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"sardine",src:"/portfolio/img/car.png",alt:"car"}))),I)};var z=r.a.createElement("style",{jsx:!0},'\n    .linkbox-container {\n      position: relative;\n      z-index: 10;\n    }\n    .text-box-container {\n      margin-top: 1rem;\n      display: flex;\n      cursor: "pointer";\n    }\n    .text-box {\n      color: white;\n      font-family: var(--font3);\n      border: var(--line-width) solid white;\n      font-size: 1.3rem;\n      width: 11rem;\n      height: 3rem;\n      display: flex;\n      align-items: center;\n      text-decoration: none;\n      transition: all 300ms ease-in-out;\n    }\n    .text-box:hover {\n      text-decoration: underline;\n    }\n\n    .arrow-box {\n      border-width: var(--line-width) var(--line-width) var(--line-width) 0;\n      width: 5rem;\n      border-style: solid;\n      border-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .text {\n      padding-left: 2rem;\n    }\n    .arrow {\n      width: 2rem;\n      height: auto;\n    }\n    @media (min-width: 801px) {\n      .text-box-container {\n        margin-top: 1rem;\n      }\n      .text-box {\n        width: 11rem;\n        height: 3rem;\n        font-size: 1.4rem;\n      }\n      .text {\n        padding-left: 2rem;\n      }\n    }\n  '),A=r.a.createElement("style",{jsx:!0},"\n    .text-box {\n      justify-content: center;\n      width: 80vw;\n    }\n    .text {\n      padding-left: 0;\n      font-size: 1.2rem;\n    }\n    @media (min-width: 801px) {\n      .text-box-container {\n        margin-left: var(--desktop-padding);\n        margin-right: var(--desktop-padding);\n      }\n    }\n  "),D=function(e){return r.a.createElement("div",{className:"linkbox-container"},r.a.createElement(o.b,{to:e.link},r.a.createElement("a",null,r.a.createElement("div",{className:"text-box-container"},r.a.createElement("div",{className:"text-box"},r.a.createElement("a",{href:e.externalLink,target:e.target,className:"text"},e.name)),e.showArrow?r.a.createElement("div",{className:"arrow-box"},r.a.createElement("img",{className:"arrow",src:"/portfolio/img/whitearrow3.png",alt:"arrow"})):null))),z,e.showArrow?null:A)};var P=r.a.createElement("style",{jsx:!0},"\n    .hello-container {\n      opacity: 0;\n      margin-bottom: 2rem;\n    }\n    .animate {\n      animation: fadeIn 1.5s;\n      animation-fill-mode: forwards;\n    }\n\n    .under-the-title {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    @media (min-width: 801px) {\n      .hello-container {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n      .under-the-title {\n        margin-bottom: 3rem;\n      }\n    }\n  "),M=function(e){var n=e.fireAnimation?"hello-container animate":"hello-container";return r.a.createElement("div",{className:n},r.a.createElement(S,{title:"Hi there!"}),r.a.createElement("div",{className:"under-the-title"},r.a.createElement(O,null),r.a.createElement(D,{link:"/about",name:"About me",showArrow:"true"}),r.a.createElement(D,{link:"/myportfolio",name:"Portfolio",showArrow:"true"}),r.a.createElement(D,{link:"/skills",name:"Skills",showArrow:"true"}),r.a.createElement(D,{externalLink:"/portfolio/img/cv2020.pdf",target:"_blank",name:"CV",showArrow:"true"})),P)};var T=r.a.createElement("style",{jsx:!0},"\n    .landing-page-container {\n      animation: fadeIn 2s;\n      animation-fill-mode: forwards;\n      cursor: pointer;\n    }\n    .landing-logo-container {\n      height: 100vh;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n    .avatar {\n      width: 5.5rem;\n      height: auto;\n      margin-left: 0.2rem;\n    }\n    .over {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 3.5rem;\n\n      margin-top: -1rem;\n    }\n    .dub {\n      color: var(--color2);\n      font-family: var(--font2);\n      font-size: 6rem;\n      margin-top: -1.6rem;\n    }\n    h1,\n    h2 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n    }\n    hr {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      border-color: white;\n      width: 5.5rem;\n      border-top: 1px solid white;\n      margin-inline-start: 5rem;\n      margin-top: -1.3rem;\n      margin-inline-end: 0;\n    }\n    .web {\n      font-family: var(--font3);\n      color: white;\n      font-size: 1.15rem;\n      margin-left: 5.2rem;\n      margin-top: 0.1rem;\n    }\n    .arrow-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      margin-bottom: 10rem;\n      transform: translateY(-4rem);\n    }\n    .hello-section {\n      margin-top: -5rem;\n      position: relative;\n      opacity: 1;\n      transition: opacity 1s linear;\n    }\n    @media (min-width: 801px) {\n      .landing-logo-wrapper {\n        transform: scale(1.4) translateZ(-1em);\n      }\n    }\n  "),C=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1],l=Object(a.useRef)();function o(){i(window.scrollY>365)}return Object(a.useEffect)((function(){window.addEventListener("scroll",o),document.title="Jose Maria - Mobile Developer"}),[]),r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement("div",{className:"landing-page-container",onClick:function(){l.current.scrollIntoView({behavior:"smooth"})}},r.a.createElement("div",{className:"landing-logo-container"},r.a.createElement("div",{className:"landing-logo-wrapper"},r.a.createElement("img",{className:"avatar",src:"/portfolio/img/hey.png",alt:"avatar"}),r.a.createElement("h1",{className:"over"},"Jose"),r.a.createElement("h1",{className:"dub"},"Maria"),r.a.createElement("hr",null),r.a.createElement("h2",{className:"web"},"Mobile Developer"))),r.a.createElement("div",{className:"arrow-container"},r.a.createElement("img",{className:"arrow",src:"/portfolio/img/arrow.png",alt:"arrow"}))),r.a.createElement("div",{className:"hello-section",ref:l},r.a.createElement(M,{fireAnimation:t}))),T)};var L=r.a.createElement("style",{jsx:!0},"\n    .about-title {\n      font-size: 1.4rem;\n      text-align: center;\n      margin-top: 2rem;\n      margin-bottom: 2rem;\n    }\n    .about-text {\n      color: white;\n      font-family: var(--font4);\n      padding-left: 3rem;\n      padding-right: 3rem;\n      text-align: left;\n      font-size: 1rem;\n    }\n    .yellow {\n      color: var(--color2);\n      font-family: var(--font4);\n    }\n    @media (min-width: 801px) {\n      .about-title {\n        font-size: 2rem;\n        text-align: left;\n        margin-top: 4rem;\n        margin-bottom: 3rem;\n        line-height: 2.3rem;\n      }\n      .about-text {\n        font-size: 1.2rem;\n        line-height: 1.9rem;\n      }\n    }\n  "),B=function(){return r.a.createElement("div",{className:"about-text"},r.a.createElement("h1",{className:"about-title"},"A passionate ",r.a.createElement("span",{className:"yellow"},"Mobile Developer")," specialised on Android applications."),r.a.createElement("p",null,"I started working as an Android Developer in 2013. From that moment until now I have been learning the most used technologies related to Mobile and Web development.",r.a.createElement("br",null),"As it is an industry in constant evolution I like to spend my free time working on personal projects to update my knowledge."),r.a.createElement("h1",{className:"about-title"},"The technologies I have used the most so far are",r.a.createElement("span",{className:"yellow"}," Android SDK ")," and",r.a.createElement("span",{className:"yellow"}," Django. ")),r.a.createElement("p",null,"I took the \u2018Android Development Online Course For Professionals' course at ",r.a.createElement("span",{className:"yellow"}," MindOrks ")," in 2019 and it was a revelation. It completely changed my approach on Software Development and I felt confident to take on more ambitious projects using the most trending tools like MVVM, Dagger and RxJava. I built an Instagram clone using all these mentioned technologies while I connected with some amazing Indian developers as mentors."),r.a.createElement("p",null,"Currently I am working at ENGISOFT developing applications for hospitality industry.",r.a.createElement("br",null),"Also working on my free time on an English-language-learning Android application and collaborating on the UrbanNoise open-source project."),L)};var G=r.a.createElement("style",{jsx:!0},"\n    .under-the-title {\n      margin-top: 1.5rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-bottom: 3rem;\n      opacity: 0;\n      animation: fadeIn 1s;\n      animation-fill-mode: forwards;\n    }\n\n    .dancing-avatar {\n      width: 10rem;\n      height: auto;\n    }\n    @media (min-width: 801px) {\n      .under-the-title {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n      .dancing-avatar {\n        margin-top: 2rem;\n        width: 15rem;\n      }\n    }\n  "),F=function(){return Object(a.useEffect)((function(){document.title="About Me"}),[]),r.a.createElement(N,null,r.a.createElement(S,{title:"About Me"}),r.a.createElement("div",{className:"under-the-title"},r.a.createElement("img",{className:"dancing-avatar",src:"/portfolio/img/tennis.png",alt:"dancing-avatar"}),r.a.createElement(B,null)),G)};var W=r.a.createElement("style",{jsx:!0},"\n    .project-title-container {\n      padding-top: 1rem;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n    }\n    .project-title {\n      color: var(--color2);\n      font-family: var(--font3);\n      text-align: center;\n      font-size: 1.2rem;\n      margin-bottom: 0.2rem;\n    }\n    .project-title-line {\n      margin-bottom: 0.5rem;\n      width: 1.2rem;\n      border-bottom: 0.2rem solid white;\n    }\n    @media (min-width: 801px) {\n      .project-title {\n        font-family: var(--font2);\n        font-size: 0.9rem;\n        margin-bottom: 0.3rem;\n      }\n      .project-title-line {\n        display: none;\n      }\n    }\n  "),H=function(e){return r.a.createElement("div",{className:"project-title-container"},r.a.createElement("div",{className:"project-title"},e.title),r.a.createElement("div",{class:"project-title-line"}),W)};var R=r.a.createElement("style",{jsx:!0},"\n    .project-item-container {\n      padding-right: var(--global-margin);\n      padding-left: var(--global-margin);\n      margin-top: 2rem;\n    }\n    .link-and-arrow-container {\n      display: flex;\n    }\n    .item-title-container {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n    .link-arrow {\n      width: 1rem;\n      transform: translateY(0.35rem);\n      padding-left: 0.4rem;\n      position: relative;\n      z-index: -1;\n    }\n    p {\n      font-size: 1.1rem;\n      color: white;\n      font-family: var(--font4);\n      margin-block-start: 0.2rem;\n      margin-block-end: 0;\n    }\n    .screenshot {\n      margin-top: 1.7rem;\n      margin-bottom: 1rem;\n      width: 100%;\n      height: auto;\n      border: 10px solid white;\n      border-radius: 5px;\n    }\n    .separation-line {\n      margin-bottom: 0.5rem;\n      width: 100%;\n      float: right;\n      border-bottom: 0.2rem solid white;\n    }\n    .arrow-container {\n      display: flex;\n      justify-content: center;\n      align-items: flex-end;\n      margin-top: 4rem;\n      margin-bottom: -5rem;\n      transform: translateY(-4rem);\n      position: relative;\n      z-index: -1;\n    }\n    .arrow {\n      width: 2rem;\n      opacity: 0.8;\n    }\n    @media (min-width: 801px) {\n      p {\n        font-size: 1rem;\n        margin-block-end: 0.5rem;\n      }\n      .project-info-section {\n        display: grid;\n        grid-template-columns: 50% 50%;\n      }\n      .link-arrow {\n        width: 1rem;\n        transform: translateY(0.4rem);\n        padding-left: 0.7rem;\n      }\n      .arrow {\n        width: 3rem;\n        opacity: 0.8;\n        z-index: -10;\n      }\n      .arrow-container {\n        margin-bottom: -3rem;\n      }\n      .screenshot {\n        margin-top: 2rem;\n      }\n    }\n  "),K=function(e){return r.a.createElement("div",{className:"project-item-container"},r.a.createElement("div",{className:"project-info-section"},r.a.createElement("div",null,r.a.createElement(H,{title:"WEBSITE"}),r.a.createElement("a",{href:e.link,target:"_blank",className:"link-and-arrow-container"},r.a.createElement("p",null,e.name),r.a.createElement("div",{className:"link-arrow-container"},r.a.createElement("img",{className:"link-arrow",src:"/portfolio/img/whitearrow3.png",alt:"arrow"})))),r.a.createElement("div",null,r.a.createElement(H,{title:"COMPANY"}),r.a.createElement("p",null,e.company)),r.a.createElement("div",null,r.a.createElement(H,{title:"ROLE"}),r.a.createElement("p",null,e.role)),r.a.createElement("div",null,r.a.createElement(H,{title:"TOOLS"}),r.a.createElement("p",null,e.tools))),r.a.createElement("a",{href:e.link,target:"_blank"},r.a.createElement("img",{className:"screenshot",src:e.img,alt:"screenshot"})),r.a.createElement("div",{className:"arrow-container"},r.a.createElement("img",{className:"arrow",src:"/portfolio/img/arrow.png",alt:"arrow"})),R)},J={appsm:{name:"Bird Sales",company:"ENGISOFT",year:"2015",role:"Android Developer",tools:"Android SDK & REST API",img:"/portfolio/img/appsm.png",link:"https://play.google.com/store/apps/details?id=com.engisoft.appsm"},apppos:{name:"Engisoft POS",company:"ENGISOFT",year:"2016",role:"Android & iOS Developer",tools:"Android SDK, iOS SDK, REST API & SQLite",img:"/portfolio/img/apppos.png",link:"https://play.google.com/store/apps/details?id=com.engisoft.apppos"},smartlift:{name:"SmartLift Platinum",company:"ENGISOFT",year:"2017",role:"Android Developer",tools:"Android SDK, Bluetooth Low Energy & OpenGL",img:"/portfolio/img/smartlift.png",link:"http://www.smartlift.es/interlift17s?osCsid=pibnfpju23s8kdppdh4m5k8ga6"},mynh:{name:"MyNH",company:"ENGISOFT",year:"2018",role:"Android & iOS Developer",tools:"Ionic Framework & REST API",img:"/portfolio/img/mynh.png",link:"https://play.google.com/store/apps/details?id=com.nh.employee"},deuce:{name:"Deuce",company:"Personal Project",year:"2018",role:"Android Developer",tools:"Android SDK & Firebase",img:"/portfolio/img/deuce.png",link:"https://deuce-android.firebaseapp.com/"},kfew:{name:"MyKfew",company:"ENGISOFT",year:"2019",role:"Web Developer",tools:"Django & Amazon Web Services",img:"/portfolio/img/kfew.png",link:"https://www.kfewsystems.com"},pvmintranet:{name:"PVM Intranet",company:"ENGISOFT",year:"2020",role:"Web Developer",tools:"Spring Boot & Bootstrap",img:"/portfolio/img/pvmintranet.png",link:"http://www.pvmlicensing.com"}};var Y=r.a.createElement("style",{jsx:!0},"\n  @media (min-width: 801px) {\n      .projects-section {\n        margin-top: 5rem;\n        opacity: 0;\n      animation: fadeIn 1s;\n      animation-fill-mode: forwards;\n      }\n      .portfolio-container {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n    }\n   \n    }\n  "),_=function(){return Object(a.useEffect)((function(){document.title="My Portfolio"}),[]),r.a.createElement(N,null,r.a.createElement("div",{className:"portfolio-container"},r.a.createElement(S,{title:"My Portfolio"}),r.a.createElement("div",{className:"projects-section"},r.a.createElement(K,J.appsm),r.a.createElement(K,J.apppos),r.a.createElement(K,J.smartlift),r.a.createElement(K,J.mynh),r.a.createElement(K,J.deuce),r.a.createElement(K,J.kfew),r.a.createElement(K,J.pvmintranet)),Y))};var V=r.a.createElement("style",{jsx:!0},"\n    .skill-bar-container {\n      width: 100%;\n    }\n    .skill-name-container,\n    .skill-measure-bar-container {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      font-family: var(--font4);\n    }\n    .skill {\n      color: white;\n    }\n    .skill-name-container > p {\n      margin-block-start: 0.5rem;\n      margin-block-end: 0.5rem;\n    }\n    .skill-measure-bar-container {\n    }\n    .skill-bar-outline {\n      width: 100%;\n      height: 1rem;\n      border: 1px solid white;\n    }\n    .skill-bar {\n      border-bottom: 1rem solid white;\n    }\n    @media (min-width: 801px) {\n      .skill-name-container {\n        font-size: 1rem;\n      }\n      .skill-name-container > p {\n        margin-block-start: 1.5rem;\n        margin-block-end: 0.8rem;\n      }\n      .skill-bar {\n        border-bottom: 1rem solid white;\n      }\n      .skill-bar-outline {\n        height: 1rem;\n      }\n    }\n  "),U=function(e){return r.a.createElement("div",{className:"skill-bar-container"},r.a.createElement("div",{className:"skill-name-container"},r.a.createElement("p",null,"| ",r.a.createElement("span",{className:"skill"},e.skillName)," |")),r.a.createElement("div",{className:"skill-measure-bar-container"},r.a.createElement("div",{className:"skill-bar-outline"},r.a.createElement("div",{className:"skill-bar",style:{width:e.percentage}}))),V)};var Q=r.a.createElement("style",{jsx:!0},"\n    .books {\n      width: 10rem;\n      height: auto;\n    }\n    .books-pic-container {\n      text-align: center;\n      opacity: 0;\n      animation: fadeIn 1s;\n      animation-fill-mode: forwards;\n    }\n    .skill-bar-group {\n      padding-top: 2rem;\n      padding-bottom: 5rem;\n      padding-right: var(--global-margin);\n      padding-left: var(--global-margin);\n      opacity: 0;\n      animation: fadeIn 1s;\n      animation-fill-mode: forwards;\n    }\n    @media (min-width: 801px) {\n      .skill-bar-group {\n        padding-left: var(--desktop-padding);\n        padding-right: var(--desktop-padding);\n      }\n      .books {\n        width: 15rem;\n        height: auto;\n      }\n    }\n  "),Z=function(){return Object(a.useEffect)((function(){document.title="My Technical Skills"}),[]),r.a.createElement(N,null,r.a.createElement(S,{title:"My Technical Skills"}),r.a.createElement("div",{className:"books-pic-container"},r.a.createElement("img",{className:"books",src:"/portfolio/img/skills.png",alt:"me-carrying-books"})),r.a.createElement(S,{title:"Frameworks / Technologies"}),r.a.createElement("div",{className:"skill-bar-group"},r.a.createElement(U,{skillName:"Android",percentage:"90%"}),r.a.createElement(U,{skillName:"iOS",percentage:"50%"}),r.a.createElement(U,{skillName:"Django",percentage:"65%"}),r.a.createElement(U,{skillName:"Ionic Framework",percentage:"55%"})),r.a.createElement(S,{title:"Programming Languages"}),r.a.createElement("div",{className:"skill-bar-group"},r.a.createElement(U,{skillName:"Java",percentage:"90%"}),r.a.createElement(U,{skillName:"Kotlin",percentage:"70%"}),r.a.createElement(U,{skillName:"Javascript",percentage:"75%"}),r.a.createElement(U,{skillName:"Python",percentage:"50%"}),r.a.createElement(U,{skillName:"Swift",percentage:"35%"})),r.a.createElement(S,{title:"Others"}),r.a.createElement("div",{className:"skill-bar-group"},r.a.createElement(U,{skillName:"Design Patters",percentage:"55%"}),r.a.createElement(U,{skillName:"Clean Architecture",percentage:"65%"}),r.a.createElement(U,{skillName:"S.O.L.I.D Principles",percentage:"85%"}),r.a.createElement(U,{skillName:"Git",percentage:"80%"})),Q)};var $=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/skills"},r.a.createElement(Z,null)),r.a.createElement(m.a,{path:"/myportfolio"},r.a.createElement(_,null)),r.a.createElement(m.a,{path:"/about"},r.a.createElement(F,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(C,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.76fb0cda.chunk.js.map