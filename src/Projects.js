import Technologies from "./Technologies"

function Featured(props) {
    return <div id="projects">
        <header className= "section_title">// Latest Projects</header>
        <ul id="entries">
        <li className="entry">
                <a href="https://warcraftrumble.blizzard.com/en-us/" target="_blank" className="project-button">
                <header className="entry_header">🐔 Warcraft Rumble</header>
                <ul className="bullets">
                    <li>
                        I work on the backend of new features in Warcraft Rumble, a crazy, chaotic, real-time strategy game for mobile! I've written code in almost all of our player facing systems spanning cosmetics, currency, rewards, matchmaking, and more. While I mostly operate on backend features, I also have experience with server infrastructure from stress testing our services in the weeks leading to the game's launch.
                    </li>
                </ul>
                <Technologies items={["C#", "GCP", "Kubernetes", "Kafka"]}></Technologies>
                </a>
            </li>
            <li className="entry">
            <a href="https://github.com/brown-cs1690/handout/wiki" target="_blank" className="project-button">
                <header className="entry_header">🖥️ Weenix</header>
                <ul className="bullets">
                    <li>
                        Weenix is a fully functional Unix kernel as well as the project which shaped me the most as a software developer. Throughout an entire semester I incrementally built layers onto my kernel, starting with a system for context switching + intelligent process scheduling and ending with support for virtual memory management to run userland executables. Interacting with the file system and running executables in a kernel I built is one of the most satisfying moments from my career in computer science to this day. In the following year I became a TA to keep working on Weenix. 
                    </li>
                </ul>
                <Technologies items={["C"]}></Technologies>
            </a>
            </li>
            <li className="entry">
            <a href="https://www.youtube.com/watch?v=sb18Sy7xzC8" target="_blank" className="project-button">
                <header className="entry_header">⛰️ Terrain Generator</header>
                <ul className="bullets">
                    <li>
                        During my computer graphics arc I created a terrain generator based on the Marching Cubes research paper. The terrain generator works by first sampling Perlin noise to generate the volumetric data, then the Marching Cubes algorithm extracts the mesh. With a lttle bit of depth coloring terrain generator results in a Minecraft-esque landscape with vast caves and cliffs.
                    </li>
                </ul>
                <Technologies items={["C++"]}></Technologies>
            </a>
            </li>
            <li className="entry">
            <a href="/resources/Super_Mario_DQN.pdf" target="_blank" className="project-button">
                <header className="entry_header">⭐ Super Mario DQN</header>
                <ul className="bullets">
                    <li>
                        I authored a research paper describing the potential of Reinforcement Learning in speedrunning. We explored Deep Q-Networks by first solving a problem with a smaller output space, then training an agent to play a level from Super Mario Bros. Our model used a custom reward function prioritizing time so agents were incentivized to reach the flag as fast as possible. By the end of training, Mario transformed from a Goomba magnet to a competitive TAS bot.
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
                        With a group of friends, I created a schedule optimization app using Google API integration so it can read from and write to your Google Calendar. You can give Schedlr a set of tasks it'll fill in your Google Calendar in a way to maximize productivity. The algorithm spaces out your tasks based on dedicated timing for rest and preferences you give it, such as being an early bird vs. a night owl.
                    </li>
                </ul>
                <Technologies items={["Java", "JavaScript", "React"]}></Technologies>
                </a>
            </li>
            <li className="entry">
                <a href="#" className="project-button">
                <header className="entry_header">😊 MagicMirror</header>
                <ul className="bullets">
                    <li>
                        On my girlfriend's 20th birthday I built her a smart mirror with various modules for telling the time, displaying the weather, and giving out compliments when I thought she looked stunning. The illusion of the magic mirror comes from a monitor behind a one way mirror and a Raspberry Pi powering the modules on the backend. She loved the gift and I loved the opportunity to play around with Raspberry Pis!
                    </li>
                </ul>
                <Technologies items={["JavaScript", "Raspberry Pi"]}></Technologies>
                </a>
            </li>
        </ul>
    </div>
}

export default Featured;