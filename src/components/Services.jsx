import {useRef, useEffect} from 'react'

function Services(){
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView()
    },[])


    return(
        <section ref={ref} className="section-services" id="services">
            <div className="section-container section-services-container">
                <h2 className="section-title section-title-services">Technologies I use</h2>
                
                <div className="service">
                    <h3 className="service-name">HTML + CSS</h3>
                    <ul className="service-desc">
                        <li>Creating conceptual skeletons of web applications</li>
                        <li>Programming fully responsive designs using CSS Flexbox and Grid</li>
                    </ul>
                </div>

                <div className="service">
                    <h3 className="service-name">Javascript</h3>
                    <ul className="service-desc">
                        <li>DOM manipulation</li>
                        <li>creating objects and classes</li>
                        <li>using async js to communicate with APIs</li>
                    </ul>
                </div>
                
                <div className="service">
                    <h3 className="service-name">React + Redux</h3>
                    <ul className="service-desc">
                        <li>dynamically creating functional components using provided data</li>
                        <li>understanding the concept of prop communication between various related components</li>
                        <li>understanding the usage of most commonly used hooks</li>
                        <li>Redux with RTK</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services