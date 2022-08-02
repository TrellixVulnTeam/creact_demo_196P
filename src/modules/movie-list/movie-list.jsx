import React, { useEffect, useState } from "react";
import { fetchMovieListApi } from "../../services/movie";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList();
  }, []);

  const fetchMovieList = async () => {
    const result = await fetchMovieListApi();
    setMovieList(result.data.content);
  };
  const renderMovieList = () => {
    return movieList.map((ele)=>{
      return (
        <div className="col-lg-3 col-sm-6" key={ele.maPhim}>
        <div
          className="card movie-card"
          style={{ marginBottom: 20, height: 500 }}
        >
          <img
            style={{ height: 350, objectFit: "cover" }}
            className="card-img-top"
            src={ele.hinhAnh}
            alt="movie"
          />
          <div className="card-body">
            <h5 className="card-title">{ele.tenPhim}</h5>
            <button className="btn btn-info">XEM CHI TIẾT</button>
          </div>
        </div>
      </div>
      )
    })
  };

  return <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>;
}
