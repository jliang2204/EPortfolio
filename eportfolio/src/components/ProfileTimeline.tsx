import { useState } from "react";
import './ProfileTimeline.css';

export default function ProfileTimeline() {
    const [tab, setTab] = useState<"exp" | "edu">("exp");

    const experience = [
        {
            title: "Undergraduate Research Machine Learning Group",
            place : "under Dr. Dimitry Babichenko",
            date: "April 2025-Current",
            points : [
                "- Recreating vignettes in 3D Unity as a virtual museum of historically significant photos",
                "- Using ML models to tag objects in these photos as identifiers as well as allowing photos to be grouped",
                "- Interacting with ChatGPT API to create  alt-text for the photos with emphasis on prompt-engineering for concise and consistent  alt-text that does not contradict the descriptions",
                "- Handling large number of photos(~60,000) and working around rate-limits and using batching to process the photos"
            ]
        },
        {
            title : "Game Development",
            place : "Independent Work",
            date : "May-August 2024",
            points : [
                "- Developed a \"Jump-King\"-style game in Unity",
                "- Built a functional chess board in Unity",
                "- Designed and implemented a responsive platformer player controller in Unity, incorporating mechanics like variable jump height, coyote time, and jump buffering for  smooth and precise user control",
            ]
        },
        {
            title : "Software Engineer Intern",
            place : "Wayne State University Car Lab",
            date : "May-June 2022",
            points : [
                "- Developed applications in Python and learned how to use TurtleBot and navigate mazes",
                "- Gained hands-on experience with ROS (Robot Operating System) and Docker."
            ]
        },
    ];

    const education = [
        {
            title : "B.S. Computer Science",
            place : "University of Pittsburgh",
            date : "2022-2026 [expected]",
            points : ["- Minor in Information Technology"]
        },
        {
            title : "Student",
            place : "Cranbrook Highschool",
            date : "2018-2022",
            points : []
        },
    ];

    const items = tab === "exp" ? experience : education;

    return (
        <section className="timeline">
            <div className="timeline-tabs">
                <button className={tab==="exp"?'active':''} onClick={() => setTab("exp")}>Experience</button>
                <button className={tab==="edu"?'active':''} onClick={() => setTab("edu")}>Education</button>
            </div>

            <ul className="timeline-list">
                {items.map((it,i)=> (
                    <li key={i}>
                        <div className="bullet" />
                        <header>
                            <h4>{it.title} <span className="meta">({it.place} · {it.date})</span></h4>
                            {/* <span className="meta">{it.place} · {it.date}</span> */}
                        </header>
                        <ul className="points">
                            {it.points.map((p,j)=><li key={j}>{p}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
}