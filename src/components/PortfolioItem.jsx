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
            <section ref={ref}className="section-home">
                <div className="section-container section-home-container">
                    <h1 className="section-title section-title-home">{item.title}<strong>{item.titleStrong}</strong></h1>
                    {item.subtitle && <p className="section-subtitle section-subtitle-home">{item.subtitle}</p>}
                    <img className="profile-pic" alt="project preview image" src={item.previewImage}/>
                </div>
            </section>
            
            <section className="portfolio-item-individual">
                <p>{item.p1}</p>
                <img className="portfolio-img-full" src={item.fullImage} alt="project full image"/>
                <p>{item.p2}</p>
                <p>{item.p3}</p>

                <ul className="socials">
                    <li className="socials-item">
                        <a className="socials-a-inv" href={item.appLink}>
                            <i class="fa-solid fa-gamepad"></i>
                        </a>
                    </li>
                    <li className="socials-item">
                        <a className="socials-a-inv" href={item.repoLink}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                </ul>
            </section>
        </>
        
    )
}

export default PortfolioItem