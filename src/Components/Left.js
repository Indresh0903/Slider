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
import {AiOutlineMail} from 'react-icons/ai';
import {Link} from "react-router-dom"
function Left(){
    const [expand,setExpand]=useState(false);
    const [open,setOpen]=useState(false);

    const handleClick=()=>{
        if(open)
        setOpen(false);
    }
    const navs=[
        {to:'/',cname:'link',dcname:'navlink',icon:<AiOutlineHome/>,scname:'span-expand',text:"HOME"},
        {to:'/Devices',cname:'link',dcname:'navlink',icon:<MdDevices/>,scname:'span-expand',text:"DEVICES"},
        {to:'/Reports',cname:'link',dcname:'navlink',icon:<BsClipboardData/>,scname:'span-expand',text:"REPORTS"},
        {to:'/Email',cname:'link',dcname:'navlink',icon:<AiOutlineMail/>,scname:'span-expand',text:"EMAIL"}
    ]
    const extendedList=[
        {to:'/Settings/Policies',cname:'link',id:'left-setting-1',lcname:'nav-setting-policies',icon:<VscFileSubmodule/>,scname:'span-expand',text:"POLICIES"},
        {to:'/Settings/Network',cname:'link',id:'l-s-2',lcname:'nav-setting-network',icon:<BiNetworkChart/>,scname:'span-expand',text:"NETWORK"}
    ]
    const list=navs.map((val,key)=>{
        return(
            <div key={key}>
                <Link to={val.to} className={val.cname} >
            <div className={val.dcname}onClick={handleClick}>{val.icon} {expand?<span className={val.scname}>{val.text}</span> :''}
            </div>
                </Link>
           </div>
        )
    })
    const list2=extendedList.map((val)=>{
        return (
            <Link to={val.to} key={val.id} className={val.cname}>
            <li className={val.lcname}>{val.icon} {expand?<span className={val.scname}>{val.text}</span> :''}</li>
            </Link>
        )
    })
    return(
        <IconContext.Provider value={{color: 'white', size: 25}}>
        <div className={!expand?'left':'left expanded'} > 
           <nav className="flex-container">

            <div className={expand?'menubtn menuopen':'menubtn'}onClick={()=>{
                setExpand(prev=>{
                    return(!prev)
                })
                if(open)
                setOpen(false);}}>
               {!expand? <FiAlignJustify/> :<AiOutlineClose/> }
            </div>
                
                {list}

            <div className="left-setting">
            <div className="navlink"onClick={()=>{
                setOpen(!open)
            }}><FiSettings/>{expand?<span className='span-expand'>SETTINGS</span> :''}</div>
            
            <ul className={open?"nav-setting open":"nav-setting"}>      
             {list2}
            </ul>
            </div>
            
        </nav>
        </div>
        </IconContext.Provider>
    )

}
export default Left;