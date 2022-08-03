import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieShowTimeApi } from "../../services/cinema";
import { fetchMovieDetailApi } from "../../services/movie";

export default function ShowTime() {
  const param = useParams();

  const [showTimes, setshowTimes] = useState({});

  useEffect(() => {fetchMovieShowTime()}, []);

  const fetchMovieShowTime = async () => {
    const result = await fetchMovieShowTimeApi(param.movieId);
    console.log(result.data.content);
    setshowTimes(result.data.content);
    
  };

  const renderTabs = () => {
    return showTimes?.heThongRapChieu?.map((ele, idx) => {
      return (
        <a
          className={`nav-link text-capitalize ${idx ===0 && "active"}`}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
          key={ele.maHeThongRap}
        >
          {ele.tenHeThongRap}
        </a>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-3">
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {renderTabs()}
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="galaxy"
            role="tabpanel"
          >
            <div className="row mb-5">
              <div className="col-1">
                <img
                  className="img-fluid rounded"
                  src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                />
              </div>
              <div className="col-11 pl-0">
                <h5>Galaxy Cinema Cineplex - 3/2</h5>
                <span className="text-muted">
                  L5-Vincom 3/2, 3C Đường 3/2, Q.10
                </span>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <a href="#">2022-12-12T09:30:00</a>
                  </div>
                  <div className="col-3">
                    <a href="#">2022-12-12T09:30:00</a>
                  </div>
                  <div className="col-3">
                    <a href="#">2022-12-12T09:30:00</a>
                  </div>
                  <div className="col-3">
                    <a href="#">2022-12-12T09:30:00</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-1">
                <img
                  className="img-fluid rounded"
                  src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                />
              </div>
              <div className="col-11 pl-0">
                <h5>Galaxy Cinema Cineplex - Vincom Thảo Điền</h5>
                <span className="text-muted">
                  L5-Megamall, 159 XL Hà Nội, Q.2
                </span>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <a href="#">2022-12-12T09:30:00</a>
                  </div>
                  <div className="col-3">
                    <a href="#">2022-05-12T18:12:23</a>
                  </div>
                  <div className="col-3">
                    <a href="#">2022-05-12T18:12:23</a>
                  </div>
                  <div className="col-3">
                    <a href="#">2022-05-12T18:12:23</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="bhd" role="tabpanel">
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
