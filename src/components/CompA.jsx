import React from 'react';

const CompA = ({arr , a}) => {
    const handleSubmit = () => {
        alert("button click event in A component")
    }
    return (
        <div>
            <h1>Component A is{a}</h1>
            <button onClick={handleSubmit}>click</button>
            {arr.map((item,index) => {
                return (
                    <>

                        <div key={index}>
                            <h1>{item}</h1>
                        </div>

                    </>
                )



            })}
        </div>
    );
};

export default CompA;