import { useEffect } from "react";

const Way = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=hxcl5lkamb";
    script.async = true;
    script.onload = () => {
      if (window.naver) {
        const map = new window.naver.maps.Map("map", {
          center: new window.naver.maps.LatLng(35.1787823, 128.1124016),
          zoom: 15,
        });
        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(35.1787823, 128.1124016),
          map: map,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section className="wayPage">
      <div className="mainHead">
        <h2>오시는 길</h2>
      </div>

      <div className="main3Contents">
        <div id="map" style={{ width: "100%", height: "600px" }}></div>

        <div className="location">
          <h3>경상남도 진주시 상대동</h3>
          <div className="buttons">
            <a
              href="https://map.naver.com/p/directions/-/14261402.0783993,4188200.8951269,%EB%B3%84%EB%82%98%EB%9E%98%EC%A7%80%EC%97%AD%EC%95%84%EB%8F%99%EC%84%BC%ED%84%B0,1783556160,PLACE_POI/-/walk?c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer">
              <button>길찾기</button>
            </a>
            <a
              href="https://map.naver.com/p/search/%EB%B3%84%EB%82%98%EB%9E%98%EC%A7%80%EC%97%AD%EC%95%84%EB%8F%99%EC%84%BC%ED%84%B0/place/1783556160?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp"
              target="_blank"
              rel="noopener noreferrer">
              <button>지도에서 보기</button>
            </a>
          </div>
        </div>

        <div className="details">
          <div className="detail-item">
            <span className="label">오시는 길</span>
            <span className="value">삼현여자중학교 정문 맞은편</span>
          </div>
          <div className="detail-item">
            <span className="label">전화번호</span>
            <div className="value">
              <span>010-6681-1364</span>
              <span>055-757-6900</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="label">이용시간</span>
            <span className="value">평일 10:00 - 20:00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Way;
