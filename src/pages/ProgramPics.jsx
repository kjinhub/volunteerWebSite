const ProgramPics = () => {
  const placeholder = "https://via.placeholder.com/500x350";

  return (
    <section className="programPicsSection">
      <div className="mainHead">
        <h2>별나래 - 프로그램 활동 사진</h2>
      </div>

      {/* 보드게임 놀이 */}
      <div className="main3Contents">
        <h3>[보드게임 놀이]</h3>
        <div className="contentBox1">
          <img src={placeholder} alt="보드게임 활동 1" className="zoom-image" />
        </div>
        <div className="contentBox2">
          <img src={placeholder} alt="보드게임 활동 2" className="zoom-image" />
        </div>
      </div>

      {/* 악기 연주 */}
      <div className="main3Contents">
        <h3>[악기 연주 - 칼림바, 피아노, 드럼]</h3>
        <div className="contentBox1">
          <img src={placeholder} alt="악기 연주 1" className="zoom-image" />
        </div>
        <div className="contentBox2">
          <img src={placeholder} alt="악기 연주 2" className="zoom-image" />
        </div>
      </div>

      {/* 미술활동 */}
      <div className="main3Contents">
        <h3>[마음껏 표현하는 미술활동]</h3>
        <div className="contentBox1">
          <img src={placeholder} alt="미술활동 1" className="zoom-image" />
        </div>
        <div className="contentBox2">
          <img src={placeholder} alt="미술활동 2" className="zoom-image" />
        </div>
      </div>

      {/* 야외 신체활동 */}
      <div className="main3Contents">
        <h3>[야외 신체활동]</h3>
        <div className="contentBox1">
          <img src={placeholder} alt="야외 활동 1" className="zoom-image" />
        </div>
        <div className="contentBox2">
          <img src={placeholder} alt="야외 활동 2" className="zoom-image" />
        </div>
      </div>
    </section>
  );
};

export default ProgramPics;
