import { useState, useRef, useEffect } from 'react'
import './App.css'
import ProfileTimeline from './components/ProfileTimeline';

function App() {

  return (
    <div className='content'>
      <section className="nameplate fadeInUp" style={{ animation: 'in .8s ease-out forwards' }}>
        <h1 className='name'>Justin Liang</h1>
        <p className='subtitle'>Software Engineer&nbsp;|&nbsp;Fullstack Developer</p>
        <a href="./JustinLiang Resume.pdf" download className="resume-button">Download Resume</a>
      </section>

      <section className='about'>
        <h2>About Me</h2>
        <p>Rising senior at the University of Pittsburgh majoring in Computer Science and minoring in Information Technology.</p>
      </section>

      <section className='timeline'>
        <ProfileTimeline />
      </section>

      <section className='languages'>
        <h2>Tech Stack</h2>
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
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
              TypeScript
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
              CSS
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
              HTML
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React"/>
              React
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask"/>
              Flask
            </li>
            <li>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" alt="Rust"/>
              Rust
            </li>
          </ul>
      </section>

      <ProjectsCarousel />

      <section className='connect'>
        <h2><span>Connect</span></h2>
        <p>Email: JSL86@pitt.edu</p>
        <a
          href="https://www.linkedin.com/in/justinsunliang/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="./linkedin.jpg"
            alt="Linkedin"
            width="64"
            height="64"/>
            <span className="linkedin">LinkedIn</span> 
          </a>
      </section>
    </div>
  )
}

function ProjectsCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    track.setAttribute("tabindex", "0");

    if (!track) return;

    const scrollByOneCard = (dir, smooth = true) => {
      const card = track.querySelector(".project-card");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const dist = dir * (card.offsetWidth + gap);

      track.scrollBy({
        left: dist,
        behavior: "auto",
      });
    };

    const onKeyDown = (e) => {
      if(e.key === "ArrowRight") {
        scrollByOneCard(+1, !e.repeat);
        e.preventDefault();
      } else if(e.key === "ArrowLeft") {
        scrollByOneCard(-1, !e.repeat);
        e.preventDefault();
      }
    };

    track.addEventListener("keydown", onKeyDown);

    let dragStartX = 0;
    let scrollStartX = 0;
    let dragged = false;
    let downOnAnchor = false;

    const onPointerDown = (e) => {
      dragged = false;
      downOnAnchor = !!e.target.closest("a");
      dragStartX = e.pageX;
      scrollStartX = track.scrollLeft;
      track.classList.add("grabbing");
      if(!downOnAnchor) track.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if(downOnAnchor) return;
      if (!track.hasPointerCapture(e.pointerId)) return;
      const delta = e.pageX - dragStartX;
      if (Math.abs(delta) > 3) dragged = true;
      track.scrollLeft = scrollStartX - delta;
      e.preventDefault();
      spinCards();
    };

    const onPointerUp = (e) => {
      if(!downOnAnchor && track.hasPointerCapture(e.pointerId))  {
        track.releasePointerCapture(e.pointerId);
      }
      track.classList.remove("grabbing");
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);

    const onClick = (ev) => {
      if (dragged && !downOnAnchor) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    };
    track.addEventListener("click", onClick, true);

    const spinCards = () => {
      const { left: trackL, width: trackW } = track.getBoundingClientRect();
      const centerX = trackL + trackW / 2;

      track.querySelectorAll(".project-card").forEach((card) => {
        const { left, width } = card.getBoundingClientRect();
        const cardCenter = left + width / 2;
        const offset = (cardCenter - centerX) / trackW;
        const clamped = Math.max(-1, Math.min(1, offset));
        card.style.transform = `rotate(${clamped * 20}deg)`;
        card.style.boxShadow = 
          Math.abs(clamped) < 0.05
            ? "0 14px 30px -8px rgb(0 0 0 / .6)"
            : "none";
      });
    };

    track.addEventListener("scroll", spinCards, { passive: true });
    window.addEventListener("resize", spinCards);
    spinCards();

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("click", onClick, true);
      track.removeEventListener("keydown", onKeyDown);
    };
  }, []);


  const projects = [
    {
      title: "Github Profile for More Projects",
      link: "https://github.com/jliang2204",
      buttonName: "Open in new tab",
    },
    {
      title: "Straylight Jumper - Platformer",
      link: "https://xellerex.itch.io/sl-jumper-test",
      buttonName: "Play on itch.io",
    },
    {
      title: "Classifying AlphaZero King Positioning",
      link: "https://github.com/jliang2204/ClassifyAlphaZero/blob/main/jsl86_finalproject.ipynb",
      buttonName: "Open in new tab",
    },
    {
      title: "Battleship in React",
      link: "https://project1-jliang2204.vercel.app/",
      buttonName: "Open in new tab",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="carousel" ref={trackRef}>
        {projects.map((p, i) => (
          <li className="project-card" key={i}>
            <h3 className="card__title">{p.title}</h3>
            <a
              className="button"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.buttonName}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App
