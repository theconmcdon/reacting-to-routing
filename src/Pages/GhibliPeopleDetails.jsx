import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


const GhibliPeopleDetails = () => {

    const [people, setPeople] = useState(null)
    const {personid} = useParams()

    const imgBuddy = {
        height: '25%',
        width: '25%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }
    
    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
          .then((res) => res.json())
          .then((person) => setPeople(person))
          .catch((err) => {
            err = new Error('Failed to Fetch')
            console.log(err)
          })
      }, []);


    return (
        <blockquote key={`ghibli-character-${people?.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
            <div class='row'>
                <img style={imgBuddy} src="https://wallpaperaccess.com/full/557936.jpg" alt="" />
                <div class='col-8'>
                    <div class='pl-5 lead'>{people?.name}, {people?.age}, {people?.gender}</div>
                    <p class="pl-5 mb-0 mt-1">{people?.name} has {people?.eye_color} eyes and {people?.hair_color} hair.</p>
                    <Link to ='/people'><footer class="ml-5 lead footer">Return to People</footer></Link>
                </div>
            </div>
        </blockquote>
      
    )

}

export default GhibliPeopleDetails


