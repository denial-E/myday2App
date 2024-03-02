import React from 'react';
// import './style/CompC.css';
import CompA from './CompA';


const CompC = ({objarr}) => {
    return (
        <div className='CompC'>
            <h1>Component C</h1>
            <p>this is my new app</p>
            {/* <CompA /> */}
            {objarr.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                        <h1>{item.id}</h1>
                        <h1>{item.name}</h1>
                        <h1>{item.designation}</h1>
                    </div>
                    </>
                )                    
                

            })}
        </div>
    );
};

export default CompC;