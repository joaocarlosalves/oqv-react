import React from 'react';

export default function Container(props){
    let className = props.classname;

    if(className === undefined) className = '';
    
    return(
        <>
            <section style={ props.style } className={`central-container ${ className }`}>
                { props.children }
            </section>
        </>
    )
}