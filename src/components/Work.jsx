import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom'
import PortfolioItem from "./PortfolioItem"
import workData from "../assets/workData"
import {useRef, useEffect} from 'react'

function Work(){
    const { pathname } = useLocation();

    const portfolioItemPreviews = workData.map(dataObj => 
        <Link key={dataObj._id} to={`/work/${dataObj._id}`} className="portfolio-item">
            <img className="portfolio-img" alt="" src={dataObj.previewImage} />
        </Link>

        // <a key={dataObj._id} href="#" className="portfolio-item">
        //     <img className="portfolio-img" alt="" src={dataObj.previewImage} />
        // </a>
    )

    const ref = useRef(null)

    useEffect(() => {
        //console.log(pathname)
        if(pathname === '/work'){
            ref.current.scrollIntoView()
        }
    },[pathname])

    return(
        <>
            <section ref={ref} className="section-work" id="work">
                <div className="section-container section-work-container">
                    <h2 className="section-title section-title-work">My work</h2>
                    <p className="section-subtitle section-subtitle-work">A selection of my range of work</p>
                    {portfolioItemPreviews}
                    
                </div>
            </section>
            <Routes>
                {/* <Route 
                    path='/*'
                    element={<></>
                    }
                /> */}
                <Route 
                    path='/:id'
                    element={<PortfolioItem/>}
                />
            </Routes> 
        </>
        
    )
}

export default Work