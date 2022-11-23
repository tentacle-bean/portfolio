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
                    <h3 className="service-name">Design + Development</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="service">
                    <h3 className="service-name">E-Commerce</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div className="service">
                    <h3 className="service-name">WordPress</h3>
                    <p className="service-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                {/* <a className="btn-work" href="#work">see my work</a> */}
            </div>
        </section>
    )
}

export default Services