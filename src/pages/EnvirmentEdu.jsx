const EnvirmentEdu = () => {
  return (
    <section className="main3">
      <div className="mainHead">
        <h3>사회적협동조합 - 환경교육</h3>
      </div>

      {/* 이미지 1행 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="환경교육 이미지 1"
            className="zoom-image"
          />
        </div>
        <div className="contentBox2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="환경교육 이미지 2"
            className="zoom-image"
          />
        </div>
      </div>

      {/* 이미지 2행 */}
      <div className="main3Contents">
        <div className="contentBox1">
          <img
            src="https://via.placeholder.com/600x400"
            alt="환경교육 이미지 3"
            className="zoom-image"
          />
        </div>
        <div className="contentBox2">
          <img
            src="https://via.placeholder.com/600x400"
            alt="환경교육 이미지 4"
            className="zoom-image"
          />
        </div>
      </div>

      {/* 설명 영역 */}
      <div className="contentEduExplain">
        <h4>양말목을 활용한 환경교육</h4>
        <p>
          버려지는 양말 목의 화려한 변신~ <br />
          일상 생활에 필요한 소품과 키 링, 티 매트, 북 마크 등 <br />
          일상 생활에 사용될 수 있는 소품들을 창의적으로 만드는 <br />
          업사이클링 환경교육프로그램입니다.
        </p>

        <h4>별나래사회적협동조합 교육문의</h4>
        <p>
          - 환경교육프로그램 사업을 통해 지역아동센터를 이용하는 아동, 청소년 더
          나아가 지역사회에 선한 영향력을 실천하고자 노력하는 기관으로 <br />
          단체 출강 및 교육 접수 및 신청을 받고 있습니다.
          <br />
          <br />- 교육문의: 010-6681-1364 또는{" "}
          <a href="mailto:sja0109@naver.com">sja0109@naver.com</a>
        </p>
      </div>
    </section>
  );
};

export default EnvirmentEdu;
