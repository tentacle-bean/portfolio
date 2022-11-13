function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container"> 
                <a href="mailto:wiktoriarekic@gmail.com" className="email">wiktoriarekic@gmail.com</a>

                <ul className="socials">
                    <li className="socials-item">
                        <a className="socials-a" href="https://github.com/tentacle-bean">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="socials-item">
                        <a className="socials-a" href="">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer