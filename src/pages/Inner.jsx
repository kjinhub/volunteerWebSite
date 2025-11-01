import innerMain from "../assets/img/innerMain.jpeg";
import innerMain2 from "../assets/img/innerMain2.jpeg";
import innerMain3 from "../assets/img/innerMain3.jpeg";
import innerMain4 from "../assets/img/innerMain4.jpeg";
import innerMain5 from "../assets/img/innerMain5.jpeg";
import innerMain6 from "../assets/img/innerMain6.jpeg";
import innerMain7 from "../assets/img/innerMain7.jpeg";
import innerMain8 from "../assets/img/innerMain8.jpeg";

const Inner = () => {
  return (
    <section className="main3">
      <div className="mainHead">
        <h2>별나래지역아동센터 내부모습</h2>
      </div>

      {/* 1행 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img src={innerMain} alt="센터 입구" />
          <h4>지역아동센터 입구</h4>
          <p>넓은 입구와 게시판을 두어 한눈에 살펴볼 수 있는 공간</p>
        </div>
        <div className="contentBox2">
          <img src={innerMain2} alt="센터 내부1" />
          <h4>지역아동센터 내부(1)</h4>
          <p>
            별나래지역아동센터는 4개의 집단활동실과 조리실, 사무실, 화장실로
            구성
          </p>
        </div>
      </div>

      {/* 2행 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img src={innerMain3} alt="센터 내부2" />
          <h4>지역아동센터 내부(2)</h4>
          <p>전체적으로 깔끔한 화이트와 그린톤 컬러로 안정감을 줍니다.</p>
        </div>
        <div className="contentBox2">
          <img src={innerMain4} alt="센터 내부3" />
          <h4>지역아동센터 내부(3)</h4>
          <p>공간 곳곳에 여러 종류의 책을 두어 독서 습관을 기르고자 합니다.</p>
        </div>
      </div>

      {/* 3행 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img src={innerMain5} alt="활동실1" />
          <h4>집단활동실(1)</h4>
          <p>보드 게임, 블록, 수 놀이 등을 할 수 있는 활동실</p>
        </div>
        <div className="contentBox2">
          <img src={innerMain6} alt="활동실2" />
          <h4>집단활동실(2)</h4>
          <p>피아노, 드럼, 칼림바, 영화감상, 무용수업이 가능한 공간</p>
        </div>
      </div>

      {/* 4행 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img src={innerMain7} alt="활동실3" />
          <h4>집단활동실(3)</h4>
          <p>드로잉, 접기, 만들기 등 다양한 미술 활동을 할 수 있는 공간</p>
        </div>
        <div className="contentBox2">
          <img src={innerMain8} alt="활동실4" />
          <h4>집단활동실(4)</h4>
          <p>책과 과제를 수행할 수 있는 책상이 있는 활동실</p>
        </div>
      </div>
    </section>
  );
};

export default Inner;
