import React, { useEffect, useState, Component, useLayoutEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import {
    fetchMovies,
    fetchGenre,
    fetchMovieByGenre
} from "../api/index";
import { Button, MenuButton } from "@fluentui/react-button";
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { Link } from "react-router-dom"; 
import { Icon } from '@fluentui/react/lib/Icon';
import { Footer } from './Footer';


const Img_Api = "https://image.tmdb.org/t/p/w1280";





export function Movie() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [movies, setMovies] = useState([]);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        screenWidth: window.innerWidth
    })

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMovieByGenre(28));

        };


        fetchAPI();
    }, []);


    const handleResize = () => {
        // setDimensions({
        //   height: window.innerHeight,
        //   screenWidth: window.innerWidth
        // });
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize())
    }, [dimensions.screenWidth]);


    const handleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMovieByGenre(genre_id));
    };



    const movieList = movieByGenre.slice(0, 16).map((item, index) => {
        return (
            <div key={index}>
                <div className="movie">
                    <Link to={`/movie/${item.id}`}>
                        <img className="img-fluid" src={item.poster} alt={item.title}></img>
                    </Link>
                    <div className="altDiv">
                        <p style={{ fontWeight: "bolder", flexWrap: "wrap" }}>{item.title}</p>
                        <div className="starDiv">
                        <p>Rated: {item.rating}</p>
                            <ReactStars
                                count={10}
                                size={20}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                color1={"#f4c10f"}
                                value={item.rating}
                            ></ReactStars>
                        </div>
                        <div className="movie_over">
                            <h2>Overview:</h2>
                            <p>{item.overview}</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    });

    const genreList = genres.map((item, index) => {
        return (
            <ul>
                <li key={index}>
                    <Button
                        className="btnGenre"
                        circular
                        type="button"
                        onClick={() => {
                            handleGenreClick(item.id);
                        }}
                    >
                        <a>{item.name.length < 10 ? item.name : item.name.substring(0,10) + "..."}</a>
                    </Button>
                </li>
            </ul>
        );
    });

    return (
        <>
            <div style={{
                display: "flex",
                msFlexDirection: "row",
            }}>
                <div style={{}}>

                    <h1 style={{
                        textAlign: "left",
                        fontSize: "50px",
                        color: "#ffffff",
                        fontFamily: "Helvetica",
                        textShadow: " 8px 8px 5px #000",
                        paddingLeft: "50px",
                    }}>MOVIELIST</h1>
                </div>
                <div style={{
                    width: "100%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{ width: dimensions.screenWidth / 2, }}>
                        <SearchBox
                            placeholder="Search"  >
                        </SearchBox>
                    </div>
                </div>
            </div>
            <header>
                <div className="genre-container" >
                    {genreList}
                </div>
            </header>
            <div className="movie-container">{movieList.length === 0 ? <div style={{
                width:"100%",
                height:"200px",
                justifyContent:"center",
                alignItems:"center",
                display:"flex"
            }}><Icon style={{
                fontSize: "5rem",
                marginRight:"20px"
            }} iconName="Sad" />
            <h3>No results found for this category.</h3>
            </div> : movieList}
            
            </div>
            <Footer/>
        </>
    );


}
export default Movie;
