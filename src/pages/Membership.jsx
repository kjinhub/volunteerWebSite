const Membership = () => {
  return (
    <section className="membershipSection">
      <div className="mainHead">
        <h3>후원신청 안내</h3>
      </div>

      <div className="mainHead2">
        <h4>별나래사회적협동조합 별나래지역아동센터 후원안내</h4>
        <p>
          별나래사회적협동조합은 후원금, 후원물품,
          <br />
          자원봉사자들의 적극적인 정기 후원을
          <br />
          기다리고 있습니다.
        </p>
      </div>

      <div className="main2Contents">
        <div className="contentWord">
          <div className="etcPic">
            <img
              src="https://via.placeholder.com/500x350"
              alt="후원 안내 이미지 1"
              className="zoom-image"
            />
          </div>
          <div className="etcPic">
            <img
              src="https://via.placeholder.com/500x350"
              alt="후원 안내 이미지 2"
              className="zoom-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
