import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const GhibliLocations = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res) => res.json())
        .then((locations) => setLocations(locations))
        .catch((err) => {
          err = new Error('Failed to Fetch')
          console.log(err)
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
            {locations.map((location) => ( 
            <blockquote key={`ghibli-location-${location.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
                <div class='row'>
                    <img style={imgBuddy} src="https://i.pinimg.com/originals/14/33/77/14337775cc3acbcd2e80a5eec69bb55c.jpg" alt="" />
                    <div class='col-8'>
                        <div class='pl-5 lead'>{location.name}</div>
                        <p class="pl-5 mb-0 mt-1"></p>
                        <Link to ={`locations/${location.id}`}><footer class="ml-5 blockquote-footer">More details</footer></Link>
                    </div>
                </div>
            </blockquote>
            ))}
        </div>  
    )
};

export default GhibliLocations;


