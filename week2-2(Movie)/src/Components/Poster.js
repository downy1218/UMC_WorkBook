import React, { useState } from "react";
import { MOVIES } from "../mocks/movie";
import './Poster.css';

function Poster({ title, poster_path }) {
    const [hover, setHover] = useState(false);
    const defUrl = 'https://image.tmdb.org/t/p/w200';
    const mouseOver = ()=>{
        setHover(true)
    };
    const mouseOut = ()=>{
        setHover(false)
    };
    return (
        <div style={{
            borderRadius: '20px',
            display: 'inline-block',
            padding:'20px'
            }}>
            <h3 id="title">{title}</h3>
            <img src={`${defUrl}${poster_path}`} onMouseEnter={()=>mouseOver()} onMouseLeave={()=>mouseOut()}
                className={hover === true ? 'black':''}
            ></img>
            
                
            
        </div>
    )
};
export default Poster;