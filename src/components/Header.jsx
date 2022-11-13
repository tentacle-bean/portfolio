function Header(){
    return(
        <header>
            <div className="logo">
                <img src="img/devjane.png" alt=""/>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="#services" className="nav-link">My Services</a></li>
                    <li className="nav-item"><a href="#aboutme" className="nav-link">About me</a></li>
                    <li className="nav-item"><a href="#work" className="nav-link">My Work</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header