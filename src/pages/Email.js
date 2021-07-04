import React from 'react'
import MainHeader from './MainHeader'
import Footer from './Footer'
import Select from 'react-dropdown-select'
import { Options } from './Options';
export default function Email() {
    const setValues=()=>{    
    }
    const options=Options;
    const list=options.map((option,index)=>{
        return(
            <div className="selectors" key={index}>
                <label>{option.field}</label>
            <Select className="package" options={option.option} onChange={(values) => setValues(values)}
             placeholder={"Select"} clearable={true} closeOnSelect={false}
            labelField={'name'} searchBy={"name"} clearOnSelect={false} style={{color:"#4a4848",background:"#ecedeb",textAlign:"center"}} color={"#bfbfbf"}  required={true}
            />
            </div>
        )
    })
    return (
       
        <div className="main-wrap">
            {/* <MainHeader/> */}
            {/* <div className="page-name">
            </div> */}
            
            {list}
            

            <Footer/>
        </div>
    )
}