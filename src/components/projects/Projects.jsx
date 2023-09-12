import React from 'react'
import './projects.css'

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: 'B-Minor Compiler',
      description: 'A compiler for the B-Minor programming language',
      bullets: [
          "Constructed a working compiler that transforms C into x86 assembly code",
          "The project was broken down into five steps, requiring the construction of a scanner, parser, type checker, source translator, and code generator.",
          "From this project I was able to learn topics ranging from the abstract theory of automata to the very practical details of assembly languages."
        ],
      technologies: ['C++', 'Flex', 'Bison'],
      githublink: "https://github.com/svntii/srodri25-compiler"
    },
    {
      id: 2,
      name: 'Lambda Calculus Interpreter',
      description: 'Created a Visualizer/Interpreter for a Lambda Calculus terms with their respective types',
      bullets: [
          'Learned how to define programming languages using operational semantics and type systems, and how to prove things about them',
          'Implemented an Interpreter for Lambda Calculus Interpreter, a simple programming language that is built up, with higher-order functions and lexical scope; algebraic data types, polymorphic types, and type inference; state and control.',
          'Analyzed different design + semantic methods such as big and small step evalution to ensure our Interpreters had the intended consequences.',
          'Studied the developments and implementation of functional languages such as OCaml and Scheme.'
      ],
      technologies: ["Python", "Tkinter"],
      githublink: "https://github.com/ND-CSE-40431/pl-programming-svntii"
    },
    {
      id: 3,
      name:"Happiest Matchmaking App",
      description:"Developed, implemented, and tested the Gale-Shapley Algorithm to create matching making application for professors to match advisors with students",
      bullets: [
        "Identified critical tasks, determined project dependencies and design considerations.",
        "Delivered weekly code reviews and professional memorandums detailing project progress, assessed risks and alternatives, developed prototypes, and determined new project objectives."
      ],
      technologies: ["Python", "Pandas", "Numpy", "ImapLib"],
      githublink: "https://github.com/svntii/Student-Advisor-Matching"
    },
    {
      id:4,
      name:"EyeTrack",
      description:"Developed a model that is able to detect, track, and accurately determine where a subject is looking at via a camera feed. Then translate the data from the model to mouse movement, and incorporated gesture recognition - for clicking, gesturing, etc.",
      bullets:[
        "Our software is broken up into two components - Gaze Tracking and Gesture Detection"
      ],
      technologies: ["Python", "OpenCV", "Openface", "MediaPipe"],
      githublink:"https://github.com/svntii/eyeTrack"
    }
  ];
  return (
    <section id="project">
        <h2>Side Projects</h2>

        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-bullets">
                {project.bullets &&
                  project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="project-tech">
                <h4>Technologies:</h4>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github btn"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

    </section>
  );
}
export default Projects