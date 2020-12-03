import React, { useState } from 'react'; 

export default function SearchBar() {
    const [value, setValue] = useState({});

    function enterPress(event) {
        if(event.key === 'Enter'){
            search();
        }
      }

    function search(){
        window.location.href=`/search/${value}`;
    }
    return(
        <>
            <div className='search-bar'>
                <input name='search-bar' onKeyPress={ event => enterPress(event) } onChange={ event => setValue(event.target.value)} />

                <button onClick={ () => search() }>
                    <svg x='0px' y='0px' viewBox='0 0 512 512'>
                        <path d='M141.367,116.518c-7.384-7.39-19.364-7.39-26.748,0c-27.416,27.416-40.891,65.608-36.975,104.79 c0.977,9.761,9.2,17.037,18.803,17.037c0.631,0,1.267-0.032,1.898-0.095c10.398-1.04,17.983-10.316,16.943-20.707 c-2.787-27.845,6.722-54.92,26.079-74.278C148.757,135.882,148.757,123.901,141.367,116.518z'/>
                        <path d='M216.276,0C97.021,0,0,97.021,0,216.276s97.021,216.276,216.276,216.276s216.276-97.021,216.276-216.276 S335.53,0,216.276,0z M216.276,394.719c-98.396,0-178.443-80.047-178.443-178.443S117.88,37.833,216.276,37.833 c98.39,0,178.443,80.047,178.443,178.443S314.672,394.719,216.276,394.719z'/>
                        <path d='M506.458,479.71L368.999,342.252c-7.39-7.39-19.358-7.39-26.748,0c-7.39,7.384-7.39,19.364,0,26.748L479.71,506.458 c3.695,3.695,8.531,5.542,13.374,5.542c4.843,0,9.679-1.847,13.374-5.542C513.847,499.074,513.847,487.094,506.458,479.71z'/>
                    </svg>
                </button>
            </div>
        </>
    )
}