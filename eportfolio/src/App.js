import { useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
        <div className="sidebar">
          <button onClick={() => handleSectionChange("home")}>Home</button>
          <button onClick={() => handleSectionChange("cover-letter")}>Cover Letter</button>
        </div>

      {activeSection === "home" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* About me */}
          <section className="about">
            <h2>About Me</h2>
            <p>
              I'm a junior at the University of Pittsburgh majoring in Computer Science with a minor in Information Science.
            </p>
            <p>
              The first time I formally learned about Computer Science was in my AP Computer Science A class in high school.
              One of the projects was to code BlackJack as a text game. I struggled a lot at first and tried to put everything
              into a single class. Then, when I was talking to my teacher, he told me to draw out the different parts. After 
              drawing everything out, structuring sort of clicked for me. After completing the project, I kept working and added
              a casino hub and other features. When my teacher gave me a 108%, it felt very rewarding and I really began to enjoy
              coding. This has helped me develop a strong work ethic and structure to my learning of Computer Science.
            </p>
          </section>

          {/* Languages */}
          <section className="languages">
            <h3>Languages</h3>
            <ul>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                Java
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                Python
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="CSharp"/>
                C#
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                JavaScript
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                CSS
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
                HTML
              </li>
            </ul>
          </section>

          {/* Frontend Frameworks */}
          <section className="languages">
            <h4>Frontend Frameworks</h4>
            <ul>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                React JS
              </li>
            </ul>
          </section>
        </div>
      )}

      {activeSection === "cover-letter" && (
        <div>
        <h1 className="name">Justin Liang</h1>
        <p className="subtitle">Software Engineer | Frontend Developer</p>
        <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

        {/* Cover Letter */}
        <section className="cover">
          <h5>Cover Letter</h5>
          <img src="/coverletter.png" alt="Cover Letter"/>
        </section>
        </div>
      )}
      
    </div>
  );
}

export default App;
