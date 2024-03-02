import React from 'react';
import './style/Home.css';
const Home = ({ arrobj }) => {
    return (
        <div className='container'>

            {arrobj.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <div class="wrapper">
                                <h6>{item.title}</h6>
                                <h1>{item.price}</h1>
                                <hr></hr>
                               
                                    <ul>
                                        
                                        <li><i class="fas fa-check"></i>{item.user}</li>
                                        <li><i class="fas fa-check"></i>{item.data}</li>
                                        <li><i class="fas fa-check"></i>{item.project}</li>
                                        <li class="not-avail"><i class="fas fa-times"></i>{item.community}</li>
                                        <li class="not-avail"><i class="fas fa-times"></i>{item.private}</li>
                                        <li class="not-avail"><i class="fas fa-times"></i>{item.support}</li>
                                        <li class="not-avail"><i class="fas fa-times"></i>{item.domain}</li>
                                        <li class="not-avail"><i class="fas fa-times"></i>{item.status}</li>
                                    </ul>
                                    <div>
                                    <button type="button" class="btn">button</button>
                                        </div>
                                    

                            </div>

                        </div>

                    </>
                )
                







            })}



        </div>



    );
};

export default Home;