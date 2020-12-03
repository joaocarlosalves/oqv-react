import React, { useEffect, useState } from 'react';

import variables from '../var';

export default function ImageList(props) {
    useEffect(() => {
        setImageList(props.list);
    }, [props.list]);

    const [ imageList, setImageList ] = useState({});

    const modalImage = (path) => {
        alert(path)
    }

    return (
        <>              
            <h6 className='section-title'>{ props.title }</h6>
            <div className='horizontal-images-scroll-container movie-image-list'>
                { imageList && imageList.length > 0 && imageList.map(image => (
                    <img 
                        key={ image.file_path } 
                        title='_' 
                        alt='_' 
                        src={`${ variables.imgOrigUrlBase }${ image.file_path }`}
                        onClick={ () => modalImage(image.file_path) }
                    />      
                ))} 
            </div>
        </>
    )
}