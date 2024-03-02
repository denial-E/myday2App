import React from 'react';

const CompB = ({obj}) => {
    const ClickEvent=()=>{
        console.log("component B")
    }
    return (
        <div>
            <h1 style={{color:'pink'}}>Component B</h1>
            <button onClick={ClickEvent}>Click</button>
            
            <h2>batch:{obj.batch}</h2>
            <h2>team:{obj.team}</h2>
             
        </div>
    );
};

export default CompB;