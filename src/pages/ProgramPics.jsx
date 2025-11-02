import program1 from "../assets/img/program/program1.jpeg";
import program2 from "../assets/img/program/program2.jpeg";
import program3 from "../assets/img/program/program3.jpeg";
import program4 from "../assets/img/program/program4.jpeg";
import program5 from "../assets/img/program/program5.jpeg";
import program6 from "../assets/img/program/program6.jpeg";
import program7 from "../assets/img/program/program7.jpeg";
import program9 from "../assets/img/program/program9.jpeg";
import program10 from "../assets/img/program/program10.jpeg";
import program11 from "../assets/img/program/program11.jpeg";
import program12 from "../assets/img/program/program12.jpeg";
import program13 from "../assets/img/program/program13.jpeg";
import program14 from "../assets/img/program/program14.jpeg";

import "../assets/styles/ProgramPics.css";

const ProgramPics = () => {
  return (
    <section className="programPicsSection">
      <div className="mainHead">
        <h2>별나래 - 프로그램 활동 사진</h2>
      </div>

      {/* 🎲 보드게임 놀이 */}
      <div className="main3Contents">
        <h3>[보드게임 놀이]</h3>
        <div className="image-grid">
          <div className="image-box">
            <img src={program1} alt="보드게임 활동 1" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program2} alt="보드게임 활동 2" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program3} alt="보드게임 활동 3" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program4} alt="보드게임 활동 4" className="zoom-image" />
          </div>
        </div>
      </div>

      {/* 🎵 음악 활동 */}
      <div className="main3Contents">
        <h3>[음악 활동]</h3>
        <div className="image-grid">
          <div className="image-box">
            <img src={program5} alt="음악 활동 1" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program6} alt="음악 활동 2" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program7} alt="음악 활동 3" className="zoom-image" />
          </div>
        </div>
      </div>
      <div className="main3Contents">
        <h3>[창작 활동]</h3>
        <div className="image-grid">
          <div className="image-box">
            <img src={program9} alt="야외 활동 1" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program10} alt="야외 활동 2" className="zoom-image" />
          </div>
        </div>
      </div>

      {/* 🌳 야외 활동 */}
      <div className="main3Contents">
        <h3>[야외 활동]</h3>
        <div className="image-grid">
          <div className="image-box">
            <img src={program9} alt="야외 활동 1" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program10} alt="야외 활동 2" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program11} alt="야외 활동 3" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program12} alt="야외 활동 4" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program13} alt="야외 활동 5" className="zoom-image" />
          </div>
          <div className="image-box">
            <img src={program14} alt="야외 활동 6" className="zoom-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPics;
