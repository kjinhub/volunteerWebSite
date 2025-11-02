import { NavLink, useLocation } from "react-router-dom";
import "../assets/styles/SubHeader.css";

const SubHeader = () => {
  const location = useLocation();

  // /program 또는 /programPics 페이지일 때만 보이게 함
  const showSubHeader =
    location.pathname === "/program" || location.pathname === "/programPics";

  if (!showSubHeader) return null;

  return (
    <div className="subheader">
      <ul>
        <li>
          <NavLink
            to="/program"
            className={({ isActive }) =>
              isActive ? "sub-link active" : "sub-link"
            }>
            별나래 지역아동센터 프로그램
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/programPics"
            className={({ isActive }) =>
              isActive ? "sub-link active" : "sub-link"
            }>
            별나래 프로그램 활동 사진
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
