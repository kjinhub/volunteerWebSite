import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div className="Login">
      <button>
        <Link to="/signup">회원가입</Link>
      </button>
      <button>
        <Link to="/login">로그인</Link>
      </button>
    </div>
    <div className="headerLeft">
      <ul>
        <li>
          <Link to="/">사회적협동조합</Link>
        </li>
        <li>
          <Link to="/starHello">별나래 인사글</Link>
        </li>
        <li>
          <Link to="/inner">우리의 공간</Link>
        </li>
        <li>
          <Link to="/program">별나래 프로그램</Link>
        </li>
        <li>
          <Link to="/absence">별나래 출결 안내</Link>
        </li>
        <li>
          <Link to="/activity">월결 활동 사진</Link>
        </li>
        <li>
          <Link to="/mealSchedule">월별 식단표</Link>
        </li>
        <li>
          <Link to="/etc">기타안내</Link>
        </li>
        <li>
          <Link to="/envirmentEdu">사회적 협동조합-환경교육</Link>
        </li>
        <li>
          <Link to="/membership">후원신청 안내</Link>
        </li>
        <li>
          <Link to="/way">오시는 길</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
