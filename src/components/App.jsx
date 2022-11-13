import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import AboutMe from './AboutMe'
import Work from './Work'
import Footer from './Footer'

function App(){
    return(
        <>
            {/* <Header /> */}
            <main>
                <Home />

                <Router>
                    <section className='section-links'>
                        <div className='section-container section-links-container'>
                            <Link to='/services'>
                                <button className="btn">Services</button>
                            </Link>
                            <Link to='/aboutme'>
                                <button className="btn">About me</button>
                            </Link>
                            <Link to='/work'>
                                <button className="btn">My work</button>
                            </Link>
                        </div>
                    </section>

                    <Routes>
                        <Route path='/services' element={<Services />}/>
                        <Route path='/aboutme' element={<AboutMe />} />
                        <Route path='/work/*' element={<Work />} />

                        <Route
                            path='/'                                   // <-- "/"
                            element={<div></div>}
                        />
                    </Routes>
                </Router>

                <Footer />

            </main>
        </>
    )
}

export default App