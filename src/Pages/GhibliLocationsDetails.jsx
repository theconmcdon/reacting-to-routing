import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const GhibliLocationsDetails = () => {

    const [locations, setLocations] = useState(null)
    const {locationid} = useParams()

    const imgBuddy = {
        height: '25%',
        width: '25%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationid}`)
          .then((res) => res.json())
          .then((location) => setLocations(location))
          .catch((err) => {
            err = new Error('Failed to Fetch')
            console.log(err)
          })
      }, []);


    return (
        <blockquote key={`ghibli-location-${locations?.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
            <div class='row'>
                <img style={imgBuddy} src="https://i.pinimg.com/originals/14/33/77/14337775cc3acbcd2e80a5eec69bb55c.jpg" alt="" />
                <div class='col-8'>
                    <div class='pl-5 lead'>{locations?.name}</div>
                    <p class="pl-5 mb-0 mt-1">{locations?.name} has a {locations?.terrain} terrain with a {locations?.climate} climate.</p>
                    <Link to ='/locations'><footer class="ml-5 lead footer">Return to Locations</footer></Link>
                </div>
            </div>
        </blockquote>
      
    )

}

export default GhibliLocationsDetails


