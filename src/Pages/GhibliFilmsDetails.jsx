import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const GhibliFilmsDetails = () => {

    const [films, setFilms] = useState(null)
    const {filmid} = useParams()

    const imgBuddy = {
        height: '25%',
        width: '25%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
          .then((res) => res.json())
          .then((film) => setFilms(film))
          .catch((err) => {
            err = new Error('Failed to Fetch')
            console.log(err)
          })
      }, []);


    return (
        <blockquote key={`ghibli-film-${films?.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
            <div class='row'>
                <img style={imgBuddy} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="" />
                <div class='col-8'>
                    <div class='pl-5 lead'>{films?.title}, {films?.director} (director), {films?.producer} (producer), {films?.release_date}</div>
                    <div class='pl-5 lead'>{films?.original_title} (Kanji), {films?.original_title_romanised} (Romanji), {films?.running_time} mins</div>
                    <p class="pl-5 mb-0 mt-1">{films?.description}</p>
                    <Link to ='/films'><footer class="ml-5 lead footer">Return to Films</footer></Link>
                </div>
            </div>
        </blockquote>
      
    )

}

export default GhibliFilmsDetails


