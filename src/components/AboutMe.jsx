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
                    <p className="about-me">I am a young and ambitious IT student with a passion for programming and a deep-rooted love for video games. Ever since I was a child, gaming has been a significant part of my life, providing me with endless joy and inspiration. As I delved deeper into the world of gaming, I became fascinated with the intricate systems and mechanics behind those virtual worlds. This curiosity led me to explore the realm of programming, and I soon discovered that it was the perfect blend of creativity and logic which I had been seeking.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe