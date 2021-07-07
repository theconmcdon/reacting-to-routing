import React from 'react';



const GhibliHome = () => {

    

    const headerBuddy = {
        height: 'auto',
        width: '150px',
        borderRadius: '10px'
    };

    
        return (
            <div>
                <div class='row d-flex mt-3 justify-content-center d-flex flex-row'>
                    <div class='pt-5'>
                        <div class='col-5'></div>
                        <div class='col-2'>
                            <img style={headerBuddy} src='https://canary.contestimg.wish.com/api/webimage/56dd9d3a64674a1aaea9707b-large.jpg?cache_buster=36a694d91ba03b118b64c92f6014466d'></img>    
                        </div>
                        <div class='col-5'></div>
                    </div>    
                </div>
                
                <div class='row text-center d-flex'>
                    <h1 class='display-1 text-center text-info col-12'>Ghibli Archive</h1>
                </div>    
                <div class='mt-5 d-flex flex-row row'>
                    <div class='col-5'></div>
                    <button onClick={() => {window.close()}} class='col-2 btn btn-info justify-content-center'>Exit Archive</button>
                    <div class='col-5'></div>
                </div>
            </div>
        )
                
                
    


};


export default GhibliHome;


