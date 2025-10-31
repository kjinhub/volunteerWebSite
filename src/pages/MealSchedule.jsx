const MealSchedule = () => {
  return (
    <section className="mealScheduleSection">
      <div className="mainHead">
        <h3>별나래 - 월별 식단표</h3>
      </div>

      <div className="main2Contents">
        <div className="contentWord">
          <div className="mealSchedule">
            <p>12월 4주 (12월 23일 ~ 12월 27일) 급식사진</p>
          </div>
          <div className="mealPic">
            <img
              src="https://via.placeholder.com/600x400"
              alt="12월 4주 급식사진"
              className="zoom-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealSchedule;
