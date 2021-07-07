import React from 'react'
import { NavLink } from 'react-router-dom'



const GhibliNavbar = () => {



    return (
        <div class="sticky-top row d-flex flex-row">
            <nav class="col-12 navbar pr-5 bg-info bg-gradient navbar-expand-lg navbar-light">
                <a class="navbar-brand text-white pl-5" href="#">Ghibli Archive</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="pl-4 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <NavLink to='/' exact activeClassName="active" className='link'><a class="nav-link text-white" href="#">Home</a></NavLink>
                        </li>
                        <li class="nav-item active">
                            <NavLink to='/films' className='link' activeClassName="active"><a class="nav-link text-white" href="#">Films<span class="sr-only">(current)</span></a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/people' className='link' activeClassName="active"><a class="nav-link text-white" href="#">Characters</a></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/locations' className='link' activeClassName="active"><a class="nav-link text-white" href="#">Locations</a></NavLink>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};

export default GhibliNavbar;