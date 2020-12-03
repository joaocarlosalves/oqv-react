import React, { useEffect, useState } from 'react';

import variables from '../var';

export default function CastList(props) {
    useEffect(() => {
        setCastList(props.list);
    }, [props.list]);

    const [ castList, setCastList ] = useState({});

    return (
        <>              
            <h6 className='section-title'>{ props.title }</h6>
            <div className='horizontal-scroll-container'>

                { castList &&castList.length > 0 && castList.map(cast => (
                    <a 
                        href='/'
                        key={ cast.id } className='cast-card'
                        alt={ cast.character } 
                        title={ cast.character }
                    >
                        { cast.profile_path && 
                            <img 
                                alt={ cast.character } 
                                src={`${ variables.imgUrlBase }${ cast.profile_path }`} />
                        }

                        { !cast.profile_path && 
                            <img 
                                alt={ cast.character } 
                                width='170' 
                                height='255' 
                                src='https://secure.i.telegraph.co.uk/multimedia/archive/01718/cinema1_1718651c.jpg' />
                        }

                        <div className='info-cast'>
                            <span 
                                className='info-cast-title' 
                                alt={ cast.character } 
                                title={ cast.character }>
                                "{ cast.character }"
                            </span> 
                            
                            <br />

                            <span className='info-cast-data' 
                                alt={ cast.name } 
                                title={ cast.name }>
                                { cast.name }
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}