import React from 'react'
import MainHeader from './MainHeader'
import Footer from './Footer'
export default function Home() {
    return (
        <div className="main-wrap">
            {/* <MainHeader/> */}
            <div className="page-name">
                {/* <h4>HOME</h4> */}
                <div className="Home1"> HOME1 </div>
                <div className="Home2"> HOME2 </div>
            </div>
            <Footer/>
        </div>
    )
}
