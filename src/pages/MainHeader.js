import React,{useState} from 'react';
import {Link} from "react-router-dom";
function MainHeader(){
    const [open,setOpen]=useState(false);
    return(
        <main className="main">
            <div className="main-flex">
                <div className='main-flex-content'>
                     <Link to="/"  className="link">
                <button className="mainbtn">HOME </button>
                     </Link>
                </div>

                <div className='main-flex-content'>
                    <Link to="/Devices"  className="link">
                <button className="mainbtn">DEVICES</button>
                    </Link>
                </div>

                <div className='main-flex-content'>
                    <Link to="/Reports"  className="link">
                <button className="mainbtn">REPORTS</button>
                    </Link>
                </div>
                <div className='main-flex-content'>
                <button className="mainbtn" onClick={()=>{
                        setOpen(!open)}}>SETTINGS </button>
                <ul className={open?"extra-setting open":"extra-setting"}>
                    <Link to="/Settings/Policies"  className="link">
                <li key="setting-main-1" className="extra-setting-policies"onClick={()=>{
                        setOpen(!open)
                }}>POLICIES</li>
                    </Link>
                    <Link to="/Settings/Network"  className="link">
                <li key="setting-main-2"className="extra-setting-network" onClick={()=>{
                        setOpen(!open)
                }}>NETWORK</li>
                     </Link>
                </ul>
                
                </div>
            </div>
        </main>
    )
}
export default MainHeader;