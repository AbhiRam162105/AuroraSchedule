import React from 'react';
import "./container.css"
const Container = (props) => {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
            <div className="dates">

                <div className="date">
                    <h2>{props.date} <span>{props.day}</span></h2>
                    <div className="event">
                        <p>{props.description}</p>
                        <time>{props.time}</time>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Container;