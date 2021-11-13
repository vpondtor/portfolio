import Technologies from "./Technologies"

function Featured(props) {
    return <div id="projects">
        <header className= "section_title">// Latest Projects</header>
        <ul id="entries">
            <li className="entry">
            <a href="/resources/Super_Mario_DQN.pdf" target="_blank" className="project-button">
                <header className="entry_header">🍄 Super Mario DQN</header>
                <ul className="bullets">
                    <li>
                        Research paper describing the potential of Reinforcement Learning in speedrunning. Explores the possibility of using a custom reward functions that encourage Mario to finish each level as fast as possible.
                    </li>
                </ul>
                <Technologies items={["Python", "PyTorch"]}></Technologies>
            </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">📅 Schedlr</header>
                <ul className="bullets">
                    <li>
                        Schedule optimization tool to generate new schedule given a set of future tasks and current obligations. Integrated with Google APIs for secure login and Google Calendar access.
                    </li>
                </ul>
                <Technologies items={["Java", "JavaScript", "React"]}></Technologies>
                </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">🛒 CartPole</header>
                <ul className="bullets">
                    <li>
                        Implementation of a classic Reinforcement Learning Model in OpenAI Gym. Symbolizes my first experience with neural networks and a major milestone for me, despite being a simple model.
                    </li>
                </ul>
                <Technologies items={["Python", "PyTorch"]}></Technologies>
            </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">🐚 Shell</header>
                <ul className="bullets">
                    <li>
                        Bash shell imitation using C system commands. Supports basic commands, child processes, input/output redirects, signal forwarding, and background/foreground distinction.
                    </li>
                </ul>
                <Technologies items={["C"]}></Technologies>
            </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">⏰ Divergence Meter</header>
                <ul className="bullets">
                    <li>
                        Nixie tube clock based off Divergence Meter from Stein's Gate, one of my all-time favorite anime. Uses nixie tubes from Ukraine and custom PCBs to either function as a normal clock or display a random number from 0 to 2.
                    </li>
                </ul>
                <Technologies items={["Electronics"]}></Technologies>
                </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">😊 MagicMirror</header>
                <ul className="bullets">
                    <li>
                        Smart mirror I created for my girlfriend's 20th birthday using a one way mirror, a couple planks of wood, and a raspberry pi! Displays time, weather, and remote compliments from myself using MagicMirror^2.
                    </li>
                </ul>
                <Technologies items={["JavaScript", "Raspberry Pi"]}></Technologies>
                </a>
            </li>
        </ul>
    </div>
}

export default Featured;