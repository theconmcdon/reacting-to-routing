import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import GhibliHome from '../Pages/GhibliHome'
import GhibliFilms from '../Pages/GhibliFilms'
import GhibliFilmsDetails from '../Pages/GhibliFilmsDetails'
import GhibliPeople from '../Pages/GhibliPeople'
import GhibliPeopleDetails from '../Pages/GhibliPeopleDetails'
import GhibliLocations from '../Pages/GhibliLocations'
import GhibliLocationsDetails from '../Pages/GhibliLocationsDetails'
import GhibliNavbar from './GhibliNavbar'

const GhibliRouter = () => {

    return(
        <BrowserRouter>
            <GhibliNavbar />
        <Switch>
           
            <Route exact path = '/'>
                <GhibliHome />
            </Route>
            <Route exact path = '/films'>
                <GhibliFilms />
            </Route>
            <Route exact path = '/films/:filmid'>
                <GhibliFilmsDetails />
            </Route>
            <Route exact path = '/people'>
                <GhibliPeople />
            </Route>
            <Route exact path = '/people/:personid'>
                <GhibliPeopleDetails />
            </Route>
            <Route exact path = '/locations'>
                <GhibliLocations />
            </Route>
            <Route exact path = '/locations/:locationid'>
                <GhibliLocationsDetails />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

export default GhibliRouter