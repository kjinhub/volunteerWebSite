import { Link } from "react-router-dom";
// import "./Home.css";

const Home = () => {
  return (
    <main>
      {/* 메인 소개 */}
      <section className="main1">
        <h1>별나래 지역 아동센터</h1>
        <p>별나래 사회적 협동조합이 운영하는 별나래 지역 아동센터입니다.</p>
      </section>

      <section className="content1Word">
        <h1>꿈의 크기를 키우는 곳!</h1>
        <p>
          저희 별나래 사회적협동조합은 주변 환경에 따라, 생각의 크기에 따라
          엄청난 결과의 차이를 만들어 내는 <strong>‘코이의 법칙’</strong>을
          슬로건으로 하여, 아이들이 세상을 더 크게 바라보며 꿈을 키우며 성장할
          수 있도록 함께 노력하고 있습니다.
        </p>
      </section>

      {/* 인사글 */}
      <section className="main2">
        <div className="mainHead">
          <h3>
            <Link to="/starHello">별나래지역아동센터 인사글</Link>
          </h3>
          <Link to="/starHello" id="main2More">
            더보기 &gt;
          </Link>
        </div>
        <div className="main2Contents">
          <h4>별나래사회적협동조합 별나래지역아동센터 인사드립니다.</h4>
          <p>
            “코이의 법칙” 들어 보셨나요? ‘코이’라는 물고기의 삶은 아주 특이해요…
          </p>
        </div>
      </section>

      {/* 내부모습 */}
      <section className="main3">
        <div className="mainHead">
          <h3>
            <Link to="/inner">별나래지역아동센터 내부모습</Link>
          </h3>
          <Link to="/inner" id="main2More">
            더보기 &gt;
          </Link>
        </div>

        <div className="main3Contents">
          <div className="contentBox1">
            <img
              src="/img/innerMain.jpeg"
              alt="센터 입구"
              className="zoom-image"
            />
            <h4>지역아동센터 입구</h4>
            <p>넓은 입구와 게시판을 두어 한눈에 살펴볼 수 있는 공간</p>
          </div>
          <div className="contentBox2">
            <img
              src="/img/innerMain2.jpeg"
              alt="센터 내부"
              className="zoom-image"
            />
            <h4>지역아동센터 내부(1)</h4>
            <p>
              별나래지역아동센터는 4개의 집단활동실과 조리실, 사무실, 화장실로
              구성
            </p>
          </div>
        </div>
      </section>

      {/* 프로그램 */}
      <section className="main3">
        <div className="mainHead">
          <h3>
            <Link to="/program">별나래 지역아동센터 프로그램</Link>
          </h3>
          <Link to="/program" id="main2More">
            더보기 &gt;
          </Link>
        </div>

        <div className="main3Contents">
          <div className="contentBox1">
            <img
              src="/img/program1.jpeg"
              alt="프로그램1"
              className="zoom-image"
            />
          </div>
          <div className="contentBox2">
            <img
              src="/img/program2.jpeg"
              alt="프로그램2"
              className="zoom-image"
            />
          </div>
          <p>
            * 운영시간: 학기 중 10시~20시 / 방학 중 9시~18시
            <br />
            * 무상교육, 급간식 제공
            <br />* 7세~18세 이용 가능
          </p>
        </div>
      </section>

      {/* 출결 안내 */}
      <section className="main3">
        <div className="mainHead">
          <h3>
            <Link to="/absence">별나래지역아동센터 출결안내</Link>
          </h3>
          <Link to="/absence" id="main2More">
            더보기 &gt;
          </Link>
        </div>
        <div className="main3Contents">
          <div className="contentBox1">
            <img
              src="/img/absence.jpeg"
              alt="출결 안내"
              className="zoom-image"
            />
          </div>
          <div className="contentBox2">
            <h3>별나래지역아동센터 출결관리 안내입니다.</h3>
          </div>
        </div>
      </section>

      {/* 기타 페이지들 */}
      {/* 필요시 동일 패턴으로 activity, mealSchedule, etc, envirmentEdu 등 추가 */}
    </main>
  );
};

export default Home;
