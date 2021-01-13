import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import variables from '../var';

import Container from '../components/Container';
import MovieList from '../components/MovieList';
import SerieList from '../components/SerieList';
import CastList from '../components/CastList';
import ImageList from '../components/ImageList';

import { BiWorld } from 'react-icons/bi';
import { SiGooglecalendar } from 'react-icons/si';

export default function Details() {
    let { id, what } = useParams();

    useEffect(() => {
        if (what === 'movie') getMovieDetails(id);
        else if (what === 'tv' || what === 'serie') getTvDetails(id);
        else window.location.href = '/';
    });

    //Loading
    const [loading, setLoading] = useState(true);

    //Movie State
    const [movieDetail, setMovieDetail] = useState({});
    const [movieImages, setMovieImages] = useState({});
    const [movieRecommendations, setMovieRecommendations] = useState({});
    const [movieVideos, setMovieVideos] = useState({});
    const [movieSimilars, setMovieSimilars] = useState({});
    const [movieCast, setMovieCast] = useState({});
    const [movieKeywords, setMovieKeywords] = useState({});
    const [movieBG, setMovieBG] = useState({});


    //TV State
    const [tvDetail, setTvDetail] = useState({});
    const [tvImages, setTvImages] = useState({});
    const [tvRecommendations, setTvRecommendations] = useState({});
    const [tvVideos, setTvVideos] = useState({});
    const [tvSimilars, setTvSimilars] = useState({});
    const [tvCast, setTvCast] = useState({});
    const [tvKeywords, setTvKeywords] = useState({});
    const [tvBG, setTvBG] = useState({});


    //Get Movie Details
    const getMovieDetails = async (id) => {
        const detailsList = await fetch(`${variables.api}movie/${id}?api_key=${variables.key}&language=pt-BR`);
        const imagesList = await fetch(`${variables.api}movie/${id}/images?api_key=${variables.key}`);
        const recommendationsList = await fetch(`${variables.api}movie/${id}/recommendations?api_key=${variables.key}&language=pt-BR&page=1`);
        const videosList = await fetch(`${variables.api}movie/${id}/videos?api_key=${variables.key}`);
        const similarsList = await fetch(`${variables.api}movie/${id}/similar?api_key=${variables.key}&language=pt-BR&page=1`);
        const castList = await fetch(`${variables.api}movie/${id}/credits?api_key=${variables.key}&language=pt-BR&page=1`);
        const keywordsList = await fetch(`${variables.api}movie/${id}/keywords?api_key=${variables.key}&language=pt-BR&page=1`);

        const detailJSON = await detailsList.json();
        const imagesJSON = await imagesList.json();
        const recommendationsJSON = await recommendationsList.json();
        const videosJSON = await videosList.json();
        const similarsJSON = await similarsList.json();
        const castJSON = await castList.json();
        const keywordsJSON = await keywordsList.json();

        const movieBannerBG = { backgroundImage: `url('${variables.imgUrlBase}${movieDetail.backdrop_path}')` };

        setMovieDetail(detailJSON);
        setMovieImages(imagesJSON);
        setMovieRecommendations(recommendationsJSON);
        setMovieVideos(videosJSON);
        setMovieSimilars(similarsJSON);
        setMovieCast(castJSON);
        setMovieKeywords(keywordsJSON);
        setMovieBG(movieBannerBG);

        setTimeout(() => setLoading(false), 2000);
    }


    //Get TV Show Details
    const getTvDetails = async (id) => {
        const detailsList = await fetch(`${variables.api}tv/${id}?api_key=${variables.key}&language=pt-BR`);
        const imagesList = await fetch(`${variables.api}tv/${id}/images?api_key=${variables.key}`);
        const recommendationsList = await fetch(`${variables.api}tv/${id}/recommendations?api_key=${variables.key}&language=pt-BR&page=1`);
        const videosList = await fetch(`${variables.api}tv/${id}/videos?api_key=${variables.key}`);
        const similarsList = await fetch(`${variables.api}tv/${id}/similar?api_key=${variables.key}&language=pt-BR&page=1`);
        const castList = await fetch(`${variables.api}tv/${id}/credits?api_key=${variables.key}&language=pt-BR&page=1`);
        const keywordsList = await fetch(`${variables.api}tv/${id}/keywords?api_key=${variables.key}`);

        const detailJSON = await detailsList.json();
        const imagesJSON = await imagesList.json();
        const recommendationsJSON = await recommendationsList.json();
        const videosJSON = await videosList.json();
        const similarsJSON = await similarsList.json();
        const castJSON = await castList.json();
        const keywordsJSON = await keywordsList.json();

        const tvBannerBG = { backgroundImage: `url('${variables.imgUrlBase}${tvDetail.backdrop_path}')` };

        setTvDetail(detailJSON);
        setTvImages(imagesJSON);
        setTvRecommendations(recommendationsJSON);
        setTvVideos(videosJSON);
        setTvSimilars(similarsJSON);
        setTvCast(castJSON);
        setTvKeywords(keywordsJSON);
        setTvBG(tvBannerBG);

        setTimeout(() => setLoading(false), 2000);
    }



    //Renders
    if (what === 'movie') {
        return (
            <>
                { loading &&
                    <div className='loading'>
                        <span>CARREGANDO...</span>
                    </div>
                }
                { !loading &&
                    <>
                        <div className='banner-container'>
                            <div className='banner' style={movieBG}></div>

                            <Container classname='container-style'>

                                <div className='poster'>
                                    <img alt='ws' src={`${variables.imgOrigUrlBase}${movieDetail.poster_path}`} />
                                </div>

                                <div className='row movie-banner-info'>
                                    <h1 className='movie-title'>
                                        {movieDetail.original_title} <span>({movieDetail.release_date && movieDetail.release_date.split('-')[0]})</span>
                                    </h1>

                                    <div className='row'>
                                        <span className='release-date'>
                                            <SiGooglecalendar />
                                            {movieDetail.release_date && `
                                        ${movieDetail.release_date.split('-')[2]}/${movieDetail.release_date.split('-')[1]}/${movieDetail.release_date.split('-')[0]}
                                    `}
                                        </span>

                                        <ul className='movie-genre-list'>
                                            {movieDetail.genres && movieDetail.genres.map(genre => (
                                                <li key={genre.id}>• { genre.name}</li>
                                            ))}
                                        </ul>

                                        {movieDetail.homepage &&
                                            <a rel='noreferrer' className='website' target='_blank' href={movieDetail.homepage}><BiWorld />&nbsp;Site oficial</a>
                                        }
                                    </div>

                                    <div className='row'>
                                        <span className='sub-title'>Sinopse</span>
                                        <p className='overview'>{movieDetail.overview}</p>
                                    </div>
                                </div>

                            </Container>
                        </div>

                        <div className='fix-bottom-content'>

                            <Container>
                                <div className='row companies-left-margin'>
                                    <div className='col'>
                                        <span className='sub-title'>Produtoras</span>
                                        <ul>
                                            {movieDetail.production_companies && movieDetail.production_companies.length > 0 && movieDetail.production_companies.map(company => (
                                                <li key={company.id}>
                                                    { company.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <span className='sub-title'>Info</span>
                                        <ul>
                                            <li>
                                                <b>Idioma:</b> {movieDetail.spoken_languages && movieDetail.spoken_languages[0].name.length > 0 && movieDetail.spoken_languages[0].name}
                                            </li>
                                            <li>
                                                <b>País:</b> {movieDetail.production_countries && movieDetail.production_countries[0].name.length > 0 && movieDetail.production_countries[0].name}
                                            </li>
                                            <li>
                                                <b>Média de votos:</b> {movieDetail.vote_average}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Container>


                            {movieCast.cast && movieCast.cast.length > 0 ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Elenco</span>
                                    <CastList list={movieCast.cast} />
                                </Container>
                            ) : (null)}


                            {movieVideos.results && movieVideos.results.length > 0 ? (
                                <Container classname='full-yellow-container'>
                                    <Container>
                                        <span className='sub-title'>Vídeos e Trailers</span>
                                        <div className='horizontal-videos-scroll-container'>
                                            {movieVideos.results && movieVideos.results.map(video => {
                                                if (video.site !== 'YouTube') return null;

                                                return (
                                                    <div className='video-card' key={video.id}>
                                                        <iframe
                                                            width='560'
                                                            height='315'
                                                            src={`https://www.youtube.com/embed/${video.key}`}
                                                            frameBorder='0'
                                                            title={video.name}
                                                        ></iframe>
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                    </Container>
                                </Container>
                            ) : (null)}


                            {movieImages.backdrops && movieImages.backdrops.length > 0 ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Imagens</span>
                                    <ImageList list={movieImages.backdrops} />
                                </Container>
                            ) : (null)}


                            {movieKeywords.keywords && movieKeywords.keywords.length > 0 ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Keywords</span>
                                    <ul className='genre-list'>
                                        {movieKeywords.keywords && movieKeywords.keywords.length > 0 && movieKeywords.keywords.map(keyword => (
                                            <li key={keyword.id}>
                                                { keyword.name}
                                            </li>
                                        ))}
                                    </ul>
                                </Container>
                            ) : (null)}


                            {movieRecommendations ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Filmes Recomendados</span>
                                    <MovieList list={movieRecommendations} />
                                </Container>
                            ) : (null)}


                            {movieSimilars ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Filmes Similares</span>
                                    <MovieList list={movieSimilars} />
                                </Container>
                            ) : (null)}

                        </div>
                    </>
                }
            </>
        );
    } else {
        return (
            <>
                { loading &&
                    <div className='loading'>
                        <span>CARREGANDO...</span>
                    </div>
                }
                { !loading &&
                    <>
                        <div className='banner-container'>
                            <div className='banner' style={tvBG}></div>

                            <Container classname='container-style'>

                                <div className='poster'>
                                    <img alt='ws' src={`${variables.imgOrigUrlBase}${tvDetail.poster_path}`} />
                                </div>

                                <div className='row movie-banner-info'>
                                    <h1 className='movie-title'>
                                        {tvDetail.name} <span>({tvDetail.first_air_date && tvDetail.first_air_date.split('-')[0]} - {tvDetail.last_air_date && tvDetail.last_air_date.split('-')[0]})</span>
                                    </h1>

                                    <div className='row'>
                                        <span className='release-date'>
                                            <SiGooglecalendar />
                                            {tvDetail.first_air_date && `
                                        De: ${tvDetail.first_air_date.split('-')[2]}/${tvDetail.first_air_date.split('-')[1]}/${tvDetail.first_air_date.split('-')[0]}
                                    `}

                                            {tvDetail.last_air_date && `
                                        - Até: ${tvDetail.last_air_date.split('-')[2]}/${tvDetail.last_air_date.split('-')[1]}/${tvDetail.last_air_date.split('-')[0]}
                                    `}
                                        </span>

                                        <ul className='movie-genre-list'>
                                            {tvDetail.genres && tvDetail.genres.map(genre => (
                                                <li key={genre.id}>• { genre.name}</li>
                                            ))}
                                        </ul>

                                        {tvDetail.homepage &&
                                            <a rel='noreferrer' className='website' target='_blank' href={tvDetail.homepage}><BiWorld />&nbsp;Site oficial</a>
                                        }
                                    </div>

                                    <div className='row'>
                                        <span className='sub-title'>Sinopse</span>
                                        <p className='overview'>{tvDetail.overview}</p>
                                    </div>
                                </div>

                            </Container>
                        </div>

                        <div className='fix-bottom-content'>
                            <Container>
                                <div className='row companies-left-margin'>
                                    <div className='col'>
                                        <span className='sub-title'>Criado por</span>
                                        <ul>
                                            {tvDetail.created_by && tvDetail.created_by.length > 0 && tvDetail.created_by.map(created => (
                                                <li key={created.id}>
                                                    { created.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <span className='sub-title'>Produtoras</span>
                                        <ul>
                                            {tvDetail.production_companies && tvDetail.production_companies.length > 0 && tvDetail.production_companies.map(company => (
                                                <li key={company.id}>
                                                    { company.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className='col'>
                                        <span className='sub-title'>Info</span>
                                        <ul>
                                            <li>
                                                <b>Idioma:</b> {tvDetail.spoken_languages && tvDetail.spoken_languages[0].name.length > 0 && tvDetail.spoken_languages[0].name}
                                            </li>
                                            <li>
                                                <b>País:</b> {tvDetail.production_countries && tvDetail.production_countries[0].name.length > 0 && tvDetail.production_countries[0].name}
                                            </li>
                                            <li>
                                                <b>Média de votos:</b> {tvDetail.vote_average}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Container>


                            {tvCast.cast && tvCast.cast.length > 0 ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Elenco</span>
                                    <CastList list={tvCast.cast} />
                                </Container>
                            ) : (null)}


                            {tvVideos.results && tvVideos.results.length > 0 ? (
                                <Container classname='full-yellow-container'>
                                    <Container>
                                        <span className='sub-title'>Vídeos e Trailers</span>
                                        <div className='horizontal-videos-scroll-container'>
                                            {tvVideos.results && tvVideos.results.map(video => {
                                                if (video.site !== 'YouTube') return null;

                                                return (
                                                    <div className='video-card' key={video.id}>
                                                        <iframe
                                                            width='560'
                                                            height='315'
                                                            src={`https://www.youtube.com/embed/${video.key}`}
                                                            frameBorder='0'
                                                            title={video.name}
                                                        ></iframe>
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                    </Container>
                                </Container>
                            ) : (null)}


                            {tvImages.backdrops && tvImages.backdrops.length > 0 ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Imagens</span>
                                    <ImageList list={tvImages.backdrops} />
                                </Container>
                            ) : (null)}


                            {tvKeywords.results && tvKeywords.results.length > 0 ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Keywords</span>
                                    <ul className='genre-list'>
                                        {tvKeywords.results && tvKeywords.results.length > 0 && tvKeywords.results.map(keyword => (
                                            <li key={keyword.id}>
                                                { keyword.name}
                                            </li>
                                        ))}
                                    </ul>
                                </Container>
                            ) : (null)}


                            {tvRecommendations ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Séries Recomendados</span>
                                    <SerieList list={tvRecommendations} />
                                </Container>
                            ) : (null)}


                            {tvSimilars ? (
                                <Container classname='full-container'>
                                    <span className='sub-title'>Séries Similares</span>
                                    <SerieList list={tvSimilars} />
                                </Container>
                            ) : (null)}

                        </div>
                    </>
                }
            </>
        )
    }
}



