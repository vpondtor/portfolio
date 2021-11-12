function Featured(props) {
    return <div id="projects">
        <header className= "section_title">-- Latest Projects --</header>
        <ul id="entries">
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">Divergence Meter</header>
                <p className="entry_about">
                    One of my favorite shows of all time, "Steins Gate", showcases a fictional device known as a "Divergence Meter". The "Divergence Meter" displays a number from 0 to 2 (exclusive) representing the current world line. This project is a replica of the Divergence Meter used in the show composed of IN-14 Nixie tubes and custom PCBs. Along with the "world line" mode, this replica also functions as a normal Nixie tube clock.
                </p>
                </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">MagicMirror</header>
                <p className="entry_about">The MagicMirror is a gift I made for my girlfriend's 20th birthday! It features a RaspberryPi connected to a monitor, all hidden behind a one-way mirror to give the illusion of a magic mirror. Using the existing MagicMirror^2 platform, I can display any number of modules, including the date, weather, obscure facts, and remote messages from myself.</p>
                </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">Schedlr</header>
                <p className="entry_about">Together with the help of my classmates from CS0320 (Software Engineering), we created the Schedlr app to help students optimize their own schedules. Given a set of tasks/events, our app generates a schedule that will best fit the user's needs and even accounts for conflicts and fatigue. After creating this schedule, Schedlr then uses the Google API to add this schedule to the user's calendar, again avoiding any potential Google Calendar conflicts. </p>
                </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">Shell</header>
                <p className="entry_about">text</p>
            </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">CartPole</header>
                <p className="entry_about">text</p>
            </a>
            </li>
            <li className="entry">
            <a href="#" className="project-button">
                <header className="entry_header">CartPole</header>
                <p className="entry_about">text</p>
            </a>
            </li>
        </ul>
    </div>
}

export default Featured;