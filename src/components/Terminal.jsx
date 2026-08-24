import { useState } from "react";
import Header from './Header'
import WelcomeMessage from "./WelcomeMessage";
import Prompt from "./Prompt";
import TerminalTitleBar from "./TerminalTitleBar";


function Terminal(){
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
    });

    const [history, setHistory] = useState([]);
    // const [output, setOutput] = useState("");

    function handleCommand(command) {
        let newOutput = "";

        if (command === "clear") {
            setHistory([]);
            return;
        }

    
        if (command === "help") {
            newOutput = "Available commands: help, skills, projects, contact, clear";

        } else if (command === "skills") {
            newOutput = `Technical Skills:
            -----------------
                ★ Languages: Python, javaScript, Java, SQL 
                ★ Frontend: React, HTML, CSS
                ★ Backend: Node.js Express.js
                ★ Databases: MySQL, PostgresSQL
                ★ Tools: Git, Github, VS Code
            
            Soft Skills:
            ------------
            ★ Problem Solving
            ★ Critical Thinking
            ★ Communication
            ★ Teamwork
            ★ Adaptability
            ★ Time Management`;
        } else if (command === "projects") {
                newOutput = (
                    <div className="projects-output">
                        <div>Projects:</div>
                        <div>---------</div>

                        <div>
                            ★ Movie App —{" "}
                                <a
                                    href="https://github.com/Salum14/Movie-App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                        </div>
                    </div>
                );

        }
        else if (command === "contact") {
           newOutput = (
                <div className="contact-output">
                    <div>Contact</div>
                    <div>-------</div>

                    <div>
                        ★ LinkedIn —{" "}
                        <a
                            href="https://www.linkedin.com/in/salum-matope-33129628a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Profile
                        </a>
                    </div>

                    <div>
                        ★ GitHub —{" "}
                        <a
                            href="https://github.com/Salum14"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Profile
                        </a>
                    </div>

                    <div>
                        ★ Email —{" "}
                        <a href="mailto:salum.matope14@gmail.com">
                            Send Email
                        </a>
                    </div>
                </div>
            );
        } else {
            newOutput = `Command not found: ${command}`
        }
        setHistory((currentHistory) => {
        return [...currentHistory,
                {
                    command: command,
                    output: newOutput
                }
            ];
        });

    }


    return (
        <div className="terminal">
            <TerminalTitleBar />

            <div className ="terminal-body">
                <Header lastLogin={formattedDate}/> 

                <WelcomeMessage />

                {history.map((item, index) => {
                        return (
                            <div key={index} className="history-item">

                                <div>
                                    salum@portfolio ~ % {item.command}
                                </div>

                                <div className="command-output">
                                    {item.output}
                                </div>

                            </div>
                        );
                    })
                }

                <Prompt onCommand={handleCommand} />
                </div>
            </div>
    )
}

export default Terminal


