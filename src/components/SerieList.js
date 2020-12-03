import React, { useEffect, useState } from 'react';

import variables from '../var';

import { BiCalendarAlt, BiCameraMovie } from 'react-icons/bi';

export default function SerieList(props) {
    useEffect(() => {
        setSerieList(props.list);
        console.log(props.list)
    }, [props.list]);

    const [ serieList, setSerieList ] = useState({});

    return (
        <>              
            <h6 className='section-title'>{ props.title }</h6>
            <div className='horizontal-scroll-container'>

                { serieList.results && serieList.results.map(serie => (
                    <a 
                        href={`/detail/serie/${ serie.id }`}
                        key={ serie.id } className='movie-card'
                        alt={ serie.name } 
                        title={ serie.name }
                    >
                        <div className='average'>{serie.vote_average}</div>

                        { serie.poster_path && 
                            <img 
                                alt={ serie.name } 
                                src={`${ variables.imgUrlBase }${ serie.poster_path }`} />
                        }

                        { !serie.poster_path && 
                            <img 
                                alt={ serie.name } 
                                width='170' 
                                height='255' 
                                src='https://secure.i.telegraph.co.uk/multimedia/archive/01718/cinema1_1718651c.jpg' />
                        }

                        <div className='info-movie'>
                            <span 
                                className='info-movie-title' 
                                alt={ serie.name } 
                                title={ serie.name }>
                                <BiCameraMovie /> { serie.name }
                            </span> 
                            
                            <br />

                            <span className='info-movie-data'>
                                <BiCalendarAlt />
                                { serie.first_air_date && `
                                    ${ serie.first_air_date.split('-')[0] }
                                `}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}