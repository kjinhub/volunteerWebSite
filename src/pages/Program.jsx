import program1 from "../assets/img/program1.jpeg";
import program2 from "../assets/img/program2.jpeg";
import "../assets/styles/Program.css";

const Program = () => {
  return (
    <div className="programPage">
      <section className="container1">
        <div id="contents1">
          <h3 style={{ color: "blue" }}>별나래 지역아동센터</h3>
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
      </section>

      <section className="container2">
        <div id="contents2">
          <div id="pic1">
            <img
              src={program1}
              alt="프로그램 활동 사진 1"
              className="program-image"
            />
          </div>
          <div id="pic2">
            <img
              src={program2}
              alt="프로그램 활동 사진 2"
              className="program-image program-image-large"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Program;
