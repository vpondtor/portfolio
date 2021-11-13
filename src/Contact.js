function Contact(props) {
    return <div id="contact">
        <header className="section_title">// Contact</header>
        <ul className="contact-container">
            <li className="contact-entry">
                <a href="https://github.com/vpondtor" target="_blank">
                    <img src="https://img.icons8.com/material-outlined/45/000000/github.png"/>
                </a> 
            </li>
            <li className="contact-entry">
                <a href="https://www.instagram.com/vmaniac/" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/45/000000/instagram.png"/>
                </a>
            </li>
            <li className="contact-entry">
                <a href="https://www.linkedin.com/in/virak-pond-tor/" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/45/000000/linkedin.png"/>
                </a>
            </li>
            <li className="contact-entry">
                <a href="mailto: virak_pond-tor@brown.edu" target="_blank">
                    <img src="https://img.icons8.com/material-outlined/45/000000/email.png"/>
                </a>
            </li>
        </ul>
    </div>
}

export default Contact;