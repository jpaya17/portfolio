import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import AboutText from "../components/text/AboutText";

function About() {
  return (
    <Layout>
      <PageTitle title="about Me" />
      <div className="under-the-title">
        <img
          className="dancing-avatar"
          src="/portfolio/img/shower.png"
          alt="dancing-avatar"
        />
        <AboutText />
      </div>
      {style}
    </Layout>
  );
}

const style = (
  <style jsx>{`
    .under-the-title {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      opacity: 0;
      animation: fadeIn 1s;
      animation-fill-mode: forwards;
    }

    .dancing-avatar {
      width: 10rem;
      height: auto;
    }
    @media (min-width: 801px) {
      .under-the-title {
        padding-left: var(--desktop-padding);
        padding-right: var(--desktop-padding);
      }
      .dancing-avatar {
        margin-top: 2rem;
        width: 15rem;
      }
    }
  `}</style>
);

export default About;
