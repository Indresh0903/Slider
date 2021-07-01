import React,{useState} from 'react';
import {FiAlignJustify} from 'react-icons/fi';
import {AiOutlineHome} from 'react-icons/ai';
import {MdDevices} from 'react-icons/md';
import {BsClipboardData} from 'react-icons/bs';
import{FiSettings} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import { IconContext } from "react-icons";
import {BiNetworkChart} from 'react-icons/bi';
import {VscFileSubmodule} from 'react-icons/vsc';
import {Link} from "react-router-dom"
function Left(){
    const [expand,setExpand]=useState(false);
    const [open,setOpen]=useState(false);

    const handleClick=()=>{
        if(open)
        setOpen(false);
    }
    return(
        <IconContext.Provider value={{color: 'white', size: 25}}>
        <div className={!expand?'left':'left expanded'} > 
           <nav className="flex-container">

            <div className='menubtn'onClick={()=>{
                setExpand(prev=>{
                    return(!prev)
                })
                if(open)
                setOpen(false);}}>
               {!expand? <FiAlignJustify/> :<AiOutlineClose/> }
            </div>
          
            <div>
                <Link to="/" className="link">
            <div className="navlink"onClick={handleClick}><AiOutlineHome/> {expand?<span className='span-expand'>HOME</span> :''}</div>
                </Link>
           </div>

            <div>
                <Link to="/Devices"  className="link">
            <div className="navlink" onClick={handleClick}><MdDevices/> {expand?<span className='span-expand'>DEVICES</span> :''}</div>
                </Link>
            </div>
            
            <div>
                <Link to="/Reports"  className="link">
            <div className="navlink"onClick={handleClick}><BsClipboardData/> {expand?<span className='span-expand'>REPORTS</span> :''}</div>
                </Link>
            </div>

            <div className="left-setting">
            <div className="navlink"onClick={()=>{
                setOpen(!open)
            }}><FiSettings/>{expand?<span className='span-expand'>SETTINGS</span> :''}</div>
            
            <ul className={open?"nav-setting open":"nav-setting"}>
                     <Link to="/Settings/Policies"  className="link">
                <li key="left-setting-1" className="nav-setting-policies"><VscFileSubmodule/> {expand?<span className='span-expand'>POLICIES</span> :''}</li>
                     </Link>
                     <Link to="/Settings/Network"  className="link">
                <li key="left-setting-2" className="nav-setting-network"><BiNetworkChart/> {expand?<span className='span-expand'>NETWORK</span> :''}</li>
                     </Link>
            </ul>
            </div>
            
        </nav>
        </div>
        </IconContext.Provider>
    )

}
export default Left;