const EnvirmentEduMain = () => {
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

export default EnvirmentEduMain;
