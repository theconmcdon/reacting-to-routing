import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const GhibliFilms = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((films) => setFilms(films))
        .catch((err) => {
          err = new Error('Fetch failed')
        })
    }, []);    
    
    const imgBuddy = {
        height: '25%',
        width: '25%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }

    return (
        <div>
            {films.map((film) => ( 
            <blockquote key={`ghibli-film-${film.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
                <div class='row'>
                    <img style={imgBuddy} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
                    <div class='col-8'>
                        <div class='pl-5 lead'>{film.title}</div>
                        <p class="pl-5 mb-0 mt-1">{film.description}</p>
                        <Link to ={`films/${film.id}`}><footer class="ml-5 blockquote-footer">More details</footer></Link>
                    </div>
                </div>
            </blockquote>
            ))}
        </div>  
    )
};

export default GhibliFilms;


