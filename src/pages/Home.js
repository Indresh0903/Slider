import React from 'react'
import MainHeader from './MainHeader'
import Footer from './Footer'
export default function Home() {
    return (
        <div className="main-wrap">
            <MainHeader/>
            <div className="page-name">
                <h4>HOME</h4>
            </div>
            <Footer/>
        </div>
    )
}
