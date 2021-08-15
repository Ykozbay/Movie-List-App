import React, { useState, useEffect } from "react";
import {fetchMovieDetail} from "../api/index";

import ReactStars from "react-rating-stars-component";
import { Footer } from "./Footer";

export function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));

    };

    fetchAPI();
  }, [params.id]);

  genres = detail.genres;

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li key={i}
          className="genrelist-detail">
          <button type="button" style={{
            borderRadius: "30px",
            padding: "14px 46px",
            backgroundColor: "lightgray",
            fontSize: "14px",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}>
            {g.name}
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <div >
        <div style={{
          justifyContent: "center",
          textAlign: "center"
        }}>
          <img
            className="img-detail"
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
          ></img>
          <div >
            <i
              style={{ fontSize: 95, color: "#f4c10f", cursor: "pointer" }}
            ></i>
          </div>
          <div
            style={{ textAlign: "center", fontSize: 35 }}
          >
            {detail.title}
          </div>
        </div>
      </div>
      <div style={{
        width: "100%",
        float: "left",
        paddingLeft: "50px",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          height: "50px",
          float: "left",
          alignItems: "center",
          display: "flex",
        }}>
          <h4 style={{
            color: "#5a606b", fontWeight: "bolder", float: "none"
          }}>VOTE :</h4>
        </div>
        <div style={{
          width: "40%",
          float: "left",
          height: "50px",
          alignItems: "center",
          display: "flex",
          marginLeft: "10px"
        }}>
          <ReactStars
            count={10}
            size={20}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            color1={"#f4c10f"}
            value={detail.rating}
          ></ReactStars>
        </div>
      </div>
      
      <div style={{
        float: "none"
      }}>
        <div style={{
          float: "none",
          paddingLeft: "50px",
          width: "100%"
        }}>
          <p style={{
            color: "#5a606b", fontWeight: "bolder", float: "none"
          }}>GENRE</p>
        </div>
        <div >
          <li >
            <ul >{genresList}</ul>
          </li>
        </div>
        <div style={{
          width: "100%",
          paddingTop: "90px",
          paddingLeft: "50px",
          paddingRight: "50px"
        }}>
          <p style={{
            color: "#5a606b", fontWeight: "bolder", float: "none"
          }}>OVERVIEW</p>
          {detail.overview}
        </div>
      </div>

      <div style={{
        paddingLeft: "25px",
        marginTop: "30px",
      }}>
        <div className="info">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RELEASE DATE</p>
          <p style={{ color: "#f4c10f" }}>{detail.release_date}</p>
        </div>
        <div className="info">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RUN TIME</p>
          <p style={{ color: "#f4c10f" }}>{detail.runtime}</p>
        </div>
        <div className="info">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>BUDGET</p>
          <p style={{ color: "#f4c10f" }}>{detail.budget}</p>
        </div>
        <div className="info">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>HOMEPAGE</p>
          <p style={{ color: "#f4c10f" }}>{detail.homepage}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}