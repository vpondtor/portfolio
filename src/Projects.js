function Featured(props) {
    return <div id="projects">
        <header className= "section_title">-- Latest Projects --</header>
        <ul id="entries">
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">Divergence Meter</header>
                <ul className="bullets">
                    <li>
                        Nixie tube clock based off Divergence Meter from Stein's Gate
                    </li>
                    <li>
                    </li>
                </ul>
                </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">MagicMirror</header>
                <ul className="bullets">
                    <li>
                        Smart mirror created for my girlfriend's 20th birthday using MagicMirror^2! Displays time, weather, and remote messages from me.
                    </li>
                </ul>
                </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">Schedlr</header>
                <ul className="bullets">
                    <li>
                        Schedule optimization tool to generate new schedule given a set of future tasks and a user's current obligations. Uses Google APIs for secure login and Google Calendar access.
                    </li>
                </ul>
                </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">Shell</header>
                <ul className="bullets">
                    <li>
                        Bash shell imitation using C system commands. Supports 
                    </li>
                </ul>
            </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">CartPole</header>
                <ul className="bullets">
                    <li>
                        Implementation of a classic Reinforcement Learning algorithm using OpenAI Gym.
                    </li>
                </ul>
            </a>
            </li>
            <li className="entry">
            <a href="/resources/Super_Mario_DQN.pdf" target="_blank" className="project-button">
                <header className="entry_header">Super Mario DQN</header>
                <ul className="bullets">
                    <li>
                        Research paper describing the potential of Reinforcement Learning in speedrunning.
                    </li>
                </ul>
            </a>
            </li>
        </ul>
    </div>
}

export default Featured;