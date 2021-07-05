import React from 'react'
import MainHeader from './MainHeader'
import Footer from './Footer'
import Select from 'react-dropdown-select'
import { Options } from '../Data/Options';
export default function Email() {
    const setValues=(e)=>{ 
        console.log(e)
        
    }
    const options=Options;
    const list=options.map((option,index)=>{
        return(
            <div className="selectors" key={index}>
                <label>{option.field}</label>
            <Select className="package" options={option.option} onChange={(e) => setValues(e)}
             placeholder={"Select"} clearable={true} closeOnSelect={false}
            labelField={'name'} searchBy={"name"} clearOnSelect={false} style={{color:"#4a4848",background:"#ecedeb"}} color={"#bfbfbf"}  required={true}
            />
            </div>
        )
    })
    return (
       
        <div className="main-wrap">
            {/* <MainHeader/> */}
            {/* <div className="page-name">
            </div> */}
            <form className="form">
            {list}
            <input type="submit" className="email-submit"/>
            </form>
            <Footer/>
        </div>
    )
}