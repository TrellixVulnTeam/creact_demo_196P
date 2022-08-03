import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../services/movie";

export default function Detail() {
  const [MovieDetail, setMovieDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.movieId);
    setMovieDetail(result.data.content);
  };
  return (
    <div className="row">
      <div className="col-3">
        <img
          className="w-100"
          src={MovieDetail.hinhAnh}
          alt="movie"
        />
      </div>
      <div className="col-9">
        <h4>{MovieDetail.tenPhim}</h4>
        <p>
          {MovieDetail.moTa}
        </p>
        <p>{MovieDetail.ngayKhoiChieu}</p>
        <div>
          <button className="btn btn-info mr-2">TRAILER</button>
        </div>
      </div>
    </div>
  );
}
