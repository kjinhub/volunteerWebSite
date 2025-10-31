const Program = () => {
  return (
    <div className="programPage">
      <section className="container1">
        <div id="contents1">
          <h3 style={{ color: "blue" }}>별나래 지역아동센터</h3>
          <div>
            <p>
              * 운영시간 <br />
              - 학기 중: 10시 ~ 20시
              <br />
              - 방학 중: 9시 ~ 18시
              <br />
              <br />
              * 무상교육을 원칙으로 하며, 급간식 제공
              <br />
              * 유치원, 어린이집을 이용하는 7살부터 <br />
              18세까지 센터를 누구나 이용 가능
            </p>
          </div>
        </div>
      </section>

      <section className="container2">
        <div id="contents2">
          <div id="pic1">
            <img
              src="https://via.placeholder.com/500x350"
              alt="프로그램 활동 사진 1"
              className="zoom-image"
            />
          </div>
          <div id="pic2">
            <img
              src="https://via.placeholder.com/500x350"
              alt="센터 로고"
              className="zoom-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
