import {useRef, useEffect} from 'react'

function AboutMe(){
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView()
    },[])

    return(
        <section ref={ref} className="section-aboutme" id="aboutme">
            <div className="section-container section-aboutme-container">
                <h2 className="section-title section-title-aboutme">Who I am</h2>
                <p className="section-subtitle section-subtitle-aboutme">Programming student in Wrocław</p>
                <img className="profile-pic-full" alt="alternative profile picture" src="profile-pic-full.png" />
                <div className="about-me-container">
                    <p className="about-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="about-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe