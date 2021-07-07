import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const GhibliPeople = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((people) => setPeople(people))
        .catch((err) => {
          err = new Error('Failed to Fetch')
          console.log(err)
        })
    }, []); 

    const imgBuddy = {
        height: '20%',
        width: '20%',
        borderRadius: '10px'
    }

    const cardBuddy = {
        borderRadius: '10px'
    }

    return (
        <div>
            {people.map((person) => ( 
            <blockquote key={`ghibli-character-${person.id}`} style={cardBuddy} class="blockquote border m-5 p-5">
                <div class='row'>
                    <img style={imgBuddy} src="https://wallpaperaccess.com/full/557936.jpg" alt="" />
                    <div class='col-8'>
                        <p class="pl-5 display-4 mb-0 mt-1">{person.name}</p>
                        <div class='pl-5 lead'>{person.age}, {person.gender}</div>
                        <Link to ={`people/${person.id}`}><footer class="ml-5 blockquote-footer">More details</footer></Link>
                    </div>
                </div>
            </blockquote>
            ))}
        </div> 
    )
};

export default GhibliPeople;



