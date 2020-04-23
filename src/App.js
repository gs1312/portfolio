import React from "react";
import "./App.css";
import img from "./Images/IMG.jpg";
import twtlogo from "./Images/tl.jpg";
import gitlogo from "./Images/git.png";
import instalogo from "./Images/inslogo.jpeg";
import ytlogo from "./Images/ytlogo.jpeg";
import linkedinlogo from "./Images/linklogo.png";

function App() {
  return (
    <div>
      <footer className="ftr">
        <section>
          <img src={img} />
        </section>
        <div className="links">
          <a href="https://www.linkedin.com/in/garvit-sharma-b44935140/">
            <img src={linkedinlogo} className="logo" />
          </a>
          <a href="https://twitter.com/garvit13121999">
            {" "}
            <img src={twtlogo} className="logo" />
          </a>
          <a href="https://www.instagram.com/garvitsharma505/">
            <img src={instalogo} className="logo" />
          </a>
          <a href="https://www.youtube.com/c/GarvitSharma1312">
            <img src={ytlogo} className="logo" />
          </a>
          <a href="https://github.com/gs1312">
            {" "}
            <img src={gitlogo} className="logo" />
          </a>
        </div>
      </footer>
      <div className="desc">
        <h1>Garvit Sharma</h1>
        <h2>
          Jaipur ◦ Rajasthan ◦ India |<a href="tel:7014219521"> 7014219521 </a>{" "}
          |{" "}
          <a href="mailto:garvitsharma13@gmail.com">garvitsharma13@gmail.com</a>
        </h2>
      </div>
      <section className="container">
        <h1>About</h1>
        <p>
          I am a UI/UX designer and developer. I have a Challenge Accepting
          Ability, and ready to work and learn with new technologies. I am doing
          some of my personal projects and also accepting some freelance work.
          As i am from a security backgroud, so i am learing all the possible
          technologies to improve my skills which would help me for a better
          career in Securities.
        </p>
        <h1>Skills</h1>
        {/* <h2>Programming Languages</h2> */}
        <p className="skl">HTML ● CSS ● JavaScript ● Reactjs ● SQL</p>
      </section>
    </div>
  );
}

export default App;
