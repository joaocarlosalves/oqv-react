import React from 'react';

export default function About(){
    return(
        <>
            <section className='about-container'>
                <div className='about'>
                    <h1>Sobre o 'OQV?'</h1>
                    <p>É uma aplicação para listar filmes e sériados que utiliza a API e informações do <a href='https://www.themoviedb.org/'>'The Movie Data Base'</a> e foi construída com React JS, por <a href='http://joaocarlosalves.com'>João Carlos Alves</a></p>
                    
                    <div className='center-text'>   
                        <a href='https://www.themoviedb.org/'>
                            <img 
                                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' 
                                alt='The Movie Database (TMDb)' 
                                style={{ width: '250px', marginTop: '30px' }}
                            />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}