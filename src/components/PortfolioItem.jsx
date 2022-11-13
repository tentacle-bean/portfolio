import {useParams, useLocation} from 'react-router-dom'
import workData from '../assets/workData'
import {useEffect, useRef} from 'react'

function PortfolioItem(){
    const {id} = useParams()
    const item = workData.find((obj) => obj._id === id.toString())

    const ref = useRef()
    const {pathname} = useLocation()
    useEffect(() => {
        ref.current.scrollIntoView()
    },[pathname])

    return(
        <>
            <section ref={ref}className="section-home" id="home">
                <div className="section-container section-home-container">
                    <h1 className="section-title section-title-home">The title <strong>of my project</strong></h1>
                    <p className="section-subtitle section-subtitle-home">a short subtitle</p>
                    <img className="profile-pic" alt="project preview image" src={item.previewImage}/>
                </div>
            </section>
            
            <section className="portfolio-item-individual">
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                <img src={item.previewImage} alt=""/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
                <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            </section>
        </>
        
    )
}

export default PortfolioItem