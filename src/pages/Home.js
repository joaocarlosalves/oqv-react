import React, { useEffect, useState } from 'react';
import variables from '../var';

import MovieList from '../components/MovieList';
import Container from '../components/Container';
import SerieList from '../components/SerieList';

export default function Home(){
    useEffect(() => {
        getPopularMovieList();
        getNowPlayingMovieList();
        getTopRatedMovieList();

        getPopularTvList();
        getNowPlayingTvList();
        getTopRatedTvList()
    }, []);

    //Movies State
    const [ popularMovieList, setPopularMovieList ] = useState({});
    const [ nowPlayingMovieList, setNowPlayingMovieList ] = useState({});
    const [ topRatedMovieList, setTopRatedMovieList ] = useState({});


    //Serie State
    const [ popularTvList, setPopularTvList ] = useState({});
    const [ nowPlayingTvList, setNowPlayingTvList ] = useState({});
    const [ topRatedTvList, setTopRatedTvList ] = useState({});

    //Get Movie Details
    const getPopularMovieList = async () => {
        const res = await fetch(`${ variables.api }trending/movie/week?api_key=${ variables.key }&language=pt-BR`),
            list = await res.json();
        setPopularMovieList(list);
    }

    const getNowPlayingMovieList = async () => {
        const res = await fetch(`${ variables.api }movie/now_playing?api_key=${ variables.key }&language=pt-BR`),
            list = await res.json();
        setNowPlayingMovieList(list);
    }

    const getTopRatedMovieList = async () => {
        const res = await fetch(`${ variables.api }movie/top_rated?api_key=${ variables.key }&language=pt-BR`),
            list = await res.json();
        setTopRatedMovieList(list);
    }

    //Get Series Details
    const getPopularTvList = async () => {
        const res = await fetch(`${ variables.api }trending/tv/week?api_key=${ variables.key }&language=pt-BR`),
            list = await res.json();
        setPopularTvList(list);
    }
    
    const getNowPlayingTvList = async () => {
        const res = await fetch(`${ variables.api }tv/popular?api_key=${ variables.key }&language=pt-BR`),
            list = await res.json();
        setNowPlayingTvList(list);
    }
    
    const getTopRatedTvList = async () => {
        const res = await fetch(`${ variables.api }tv/top_rated?api_key=${ variables.key }&language=pt-BR`),
            list = await res.json();
        setTopRatedTvList(list);
    }

    return(
        <>
            <section style={{ marginBottom: '150px' }}>
                <Container className='full-container'>
                    <MovieList 
                        list={ popularMovieList } 
                        title='Filmes Populares'>
                    </MovieList>
                </Container>

                <Container className='full-container'>
                    <MovieList 
                        list={ nowPlayingMovieList } 
                        title='Filmes recentes'>
                    </MovieList>
                </Container>

                <Container className='full-container'>
                    <MovieList 
                        list={ topRatedMovieList } 
                        title='Filmes mais votados'>
                    </MovieList>
                </Container>

                <Container className='full-container'>
                    <SerieList 
                        list={ popularTvList } 
                        title='Séries mais assistidas'>
                    </SerieList>
                </Container>

                <Container className='full-container'>
                    <SerieList 
                        list={ nowPlayingTvList } 
                        title='Séries recentes'>
                    </SerieList>
                </Container>

                <Container className='full-container'>
                    <SerieList 
                        list={ topRatedTvList } 
                        title='Séries mais votadas'>
                    </SerieList>
                </Container>
            </section>
        </>
    )
}