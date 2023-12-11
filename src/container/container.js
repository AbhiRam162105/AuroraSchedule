import React, { useEffect } from 'react';
// import "./container.css"

const Container = (props) => {
    const externalImage=props.Image;
    
    return (
        <div className='box' style={{backgroundImage:`url(${externalImage})`}} >
           
           <div className='content' >
                <h1>{props.title}</h1><br/><br/>
                {/* <h2>{props.content}</h2> */}

                <div className="dates">
                    <div className="date">
                        <h3>{props.date}<br/> <span>{props.day}</span></h3><br/>
                        <div className="event">
                            {/* <p>{props.description}</p> */}
                            <time>{props.time}</time>
                        </div>
                    </div>
                </div>

            </div>                     
          
        </div>

    );
};
export default Container;