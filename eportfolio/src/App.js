import { useState } from "react";
import coverLetter from "./images/coverletter.jpg";
import bib1 from "./images/Bib1.jpg";
import bib2 from "./images/Bib2.jpg";
import gitlogo from "./images/github-original.svg"
import linkedinlogo from "./images/linkedin.jpg"

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    return sessionStorage.getItem("activeSection") || "home";
  });

  const handleSectionChange = (section) => {
    setActiveSection(section);

    sessionStorage.setItem("activeSection", section);
  };

  return (
    <div className="App">
        <div className="sidebar">
          <button onClick={() => handleSectionChange("home")}>Home</button>
          <button onClick={() => handleSectionChange("cover-letter")}>Cover Letter</button>
          <button onClick={() => handleSectionChange("philosophy")}>Professional Philosophy Statement</button>
          <button onClick={() => handleSectionChange("bibliography")}>Professional Bibliography</button>
          <button onClick={() => handleSectionChange("projects")}>Projects</button>
          <button onClick={() => handleSectionChange("goals")}>Goals</button>
          <button onClick={() => handleSectionChange("contact")}>Contact</button>
        </div>

      {activeSection === "home" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* About me */}
          <section className="about">
            <h2>Introduction</h2>
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
          <p><a href="/Cover Letter.pdf" download className="button">Download Cover Letter</a></p>
          <img src={coverLetter} className="coverletter" alt="logo" />
        </section>
        </div>
      )}

      {activeSection === "philosophy" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* Professional Philosophy Statement */}
          <section className="PPS">
            <h6>Professional Philosophy Statement</h6>
            <p>
              The second project in my AP Computer Science A class was an assignment to code
              Blackjack as a text game in Java. At this point in time, I was still pretty new
              to coding and figuring out what to separate classes and methods for was still
              difficult for me to wrap my head around. There were a lot of problems that arose
              while I was trying to code Blackjack. There were several moments where I wanted
              to give up and was very frustrated with the project. However, instead of giving up,
              I kept at it, embracing the challenge. When I finally completed coding Blackjack,
              there was a moment where it felt like how to organize classes "clicked", and I expanded
              beyond Blackjack into making it one option offered in a casino hub where players could
              redeem prizes. This was beyond the scope of the assignment, and I was given bonus points
              for it. This experience taught me the value of perseverance and adaptability.
            </p>
            <p>
              Perseverance is the foundation of my work ethic. Before this project, school had always come 
              easy to me yet this experience taught me that success is not always quick and easy. Instead of
              shying away from challenges, going at them head-on and persevering is the solution. Difficulties
              and setbacks are inevitable regardless of what the task is. My ability to persist and stay focused
              with a positive attitude allows me to improve myself from difficulties rather than letting them be
              negative obstacles. I believe that perseverance leads to growth.
            </p>
            <p>
              Adaptability also goes hand in hand with my perseverance. Throughout the Blackjack project, I
              had to try several different approaches to handle different problems that arose. When one idea did
              not work, I looked for a new angle to solve the issue. Different classes at the University of Pittsburgh
              also teach unique problems with different programming languages. Of course, these problems cannot be approached
              with the same thought process each time. It was necessary for me to learn tob e flexible with my thinking
              to understand the solutions to solving these problems. Being adaptable lets me appreciate difficulties
              and not only their solutions, but the process of arriving at them.
            </p>
            <p>
              These qualities--perseverance and adaptability--guide my approach to work and form the foundation of my
              work ethic. I am confident in my ability to perform well as a software engineer and frontend developer 
              that extends from my knowledge and growth from studying Computer Science at the University of Pittsburgh.
            </p>
          </section>
        </div>
      )}

      {activeSection === "bibliography" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* Professional Bibliography */}
          <section className="probib">
            <h7>Professional Bibliography</h7>
            <p><a href="/Professional Bibliography - Justin Liang.pdf" download className="button">Download Bibliography</a></p>
            <ul>
              <li><img src={bib1} alt="Bibliography 1"></img></li>
              <li><img src={bib2} alt="Bibliography 2"></img></li>
            </ul>
          </section>
        </div>
      )}

      {activeSection === "projects" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* List of Projects */}
          <section className="projects">
            <h8>Projects</h8>
            <ul>
              <li>
                <p><strong>Github Profile for More Projects</strong></p>
                <a 
                  href="https://github.com/jliang2204"  
                  className="github"
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img
                    src={ gitlogo }
                    alt="Github"
                    width="64"
                    height="64"/>
                </a>
              </li>
              <li>
                <p><strong>Straylight Jumper - Jumper Platformer</strong></p>
                <a href="https://xellerex.itch.io/sl-jumper-test" className="button" target="_blank" rel="noopener noreferrer">Play on itch.io</a>
              </li>
              <li>
                <p><strong>Classifying AlphaZero King Positioning</strong></p>
                <p><a href="https://nbviewer.org/github/jliang2204/ClassifyAlphaZero/blob/main/jsl86_finalproject.ipynb" className="button" target="_blank" rel="noopener noreferrer">Open in new tab</a></p>
                <iframe
                  src="https://nbviewer.org/github/jliang2204/ClassifyAlphaZero/blob/main/jsl86_finalproject.ipynb"
                  width="800"
                  height="600"
                  frameBorder="0"
                  title="Classifying AlphaZero King Positioning"
                />
              </li>
              <li>
                <p><strong>Battleship</strong></p>
                <p><a href="https://project1-jliang2204.vercel.app/" className="button" target="_blank" rel="noopener noreferrer">Open in new tab</a></p>
                <iframe
                  src="https://project1-jliang2204.vercel.app/"
                  width="800"
                  height="600"
                  frameBorder="0"
                  title="Battleship"
                />
              </li>
            </ul>
          </section>
        </div>
      )}

      {activeSection === "contact" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* Contact Information */}
          <section className="Contact">
            <h9>Contact Information</h9>
            <p>Email: JSL86@pitt.edu</p>
            <a 
              href="https://www.linkedin.com/in/justinsunliang/"  
              className="social-link"
              target="_blank" 
              rel="noopener noreferrer">
              <img
                src={ linkedinlogo }
                alt="Linkedin"
                width="64"
                height="64"/>
                <span>LinkedIn</span>
            </a>
          </section>
        </div>
      )}

      {activeSection === "goals" && (
        <div>
          <h1 className="name">Justin Liang</h1>
          <p className="subtitle">Software Engineer | Frontend Developer</p>
          <a href="/JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>

          {/* Goals */}
          <section className="Goals">
          <h10>Goals</h10>
          <ul>
            <li><p>-Working toward AWS Cloud Practitioner Certification</p></li>
            <li><p>-Frontend --{">"} Fullstack</p></li>
            <li><p>-Currently working on research on Machine Learning team to develop AI models to tag objects in photos</p></li>


          </ul>
          </section>
        </div>
      )}
      
    </div>
  );
}

export default App;
