const Activity = () => {
  return (
    <section className="main3">
      <div className="mainHead">
        <h3>
          <a href="#">별나래지역아동센터 12월 활동 사진</a>
        </h3>
      </div>

      <div>
        <p>2024년 6월 주제</p>
        <p>- '나' 소개하기</p>
      </div>

      {/* 첫 번째 줄 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="나의 자화상 그리기"
            className="zoom-image"
          />
          <h4>주제-나의 자화상 그리기</h4>
          <p>손거울을 보고 나의 모습을 그려보고 전시하기</p>
        </div>
        <div className="contentBox2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="나를 자랑한다면"
            className="zoom-image"
          />
          <h4>주제-나를 자랑한다면</h4>
          <p>나에 대해 생각해보고 나를 자랑해보는 활동</p>
        </div>
      </div>

      {/* 두 번째 줄 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="환경교육1"
            className="zoom-image"
          />
          <h4>특화프로그램(환경교육)</h4>
          <p>커피가루로 직접 커피점토를 만들어 나만의 키링 만들기</p>
        </div>
        <div className="contentBox2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="환경교육2"
            className="zoom-image"
          />
          <h4>특화프로그램(환경교육)</h4>
          <p>버려지는 커피가루가 작품이되고 지구를 살리는 작은 실천!</p>
        </div>
      </div>

      {/* 세 번째 줄 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="영양교육1"
            className="zoom-image"
          />
          <h4>진주시 급식지원단 영양교육(1)</h4>
          <p>영양소 알아보기 / 균형 잡힌 식단 만들기 활동</p>
        </div>
        <div className="contentBox2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="영양교육2"
            className="zoom-image"
          />
          <h4>진주시 급식지원단 영양교육(2)</h4>
          <p>올바른 식사 예절 및 젓가락 사용법 익히기</p>
        </div>
      </div>

      {/* 네 번째 줄 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="자유활동"
            className="zoom-image"
          />
          <h4>자유활동(만들기 및 그리기)</h4>
          <p>자유활동시간을 활용해 만들기,그리기,종이접기등 다양한 흥미활동</p>
        </div>
        <div className="contentBox2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="이야기 나누기"
            className="zoom-image"
          />
          <h4>주제별 이야기 나누기</h4>
          <p>
            나에대해 소개,속마음을 또래들에게 언어로 표현을 하는 마음을 나누는
            활동
          </p>
        </div>
      </div>
    </section>
  );
};

export default Activity;
