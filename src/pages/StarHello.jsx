import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/StarHello.css";
import mainLogo from "../assets/img/mainLogo.jpeg";
import fish1 from "../assets/img/fish.png";
import fish2 from "../assets/img/fish2.png";
import fish3 from "../assets/img/fish3.png";

const StarHello = () => {
  const fishesRef = useRef([]);

  useEffect(() => {
    const fishes = fishesRef.current;
    const numFishes = fishes.length;

    const pos = Array.from({ length: numFishes }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 1) * 1.5, // x속도
      vy: (Math.random() - 1) * 1.5, // y속도
    }));

    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    const repelRadius = 150; // 마우스를 피하는 반경
    const repelForce = 2; // 도망 강도
    const wanderChange = 0.02; // 방향 랜덤성

    const animate = () => {
      fishes.forEach((fish, i) => {
        const dx = pos[i].x - mouse.x;
        const dy = pos[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // 1️⃣ 마우스 반응
        if (dist < repelRadius) {
          pos[i].vx += (dx / dist) * repelForce * 0.1;
          pos[i].vy += (dy / dist) * repelForce * 0.1;
        }

        // 2️⃣ 랜덤한 부유(무작위 방향 변화)
        pos[i].vx += (Math.random() - 0.5) * wanderChange;
        pos[i].vy += (Math.random() - 0.5) * wanderChange;

        // 속도 제한
        const maxSpeed = 2.5;
        const speed = Math.sqrt(pos[i].vx ** 2 + pos[i].vy ** 2);
        if (speed > maxSpeed) {
          pos[i].vx = (pos[i].vx / speed) * maxSpeed;
          pos[i].vy = (pos[i].vy / speed) * maxSpeed;
        }

        // 위치 업데이트
        pos[i].x += pos[i].vx;
        pos[i].y += pos[i].vy;

        // 3️⃣ 화면 가장자리에서 반사
        const margin = 50;
        if (pos[i].x < margin || pos[i].x > window.innerWidth - margin)
          pos[i].vx *= -1;
        if (pos[i].y < margin || pos[i].y > window.innerHeight - margin)
          pos[i].vy *= -1;

        // 4️⃣ 위치 적용
        fish.style.transform = `translate(${pos[i].x}px, ${
          pos[i].y
        }px) scaleX(${pos[i].vx > 0 ? 1 : -1})`;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="starHelloPage">
      {/* 🐟 물고기 레이어 */}
      <div className="fish-container">
        {[fish1, fish2, fish3].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`물고기${i + 1}`}
            ref={(el) => (fishesRef.current[i] = el)}
            className="fish-follow"
          />
        ))}
      </div>

      {/* 상단 Hero 영역 */}
      <div className="hero-section">
        <img
          src={mainLogo}
          alt="별나래지역아동센터 대표 이미지"
          className="hero-img"
        />
        <div className="hero-text">
          <h1>아이들의 꿈과 희망이 자라는 곳</h1>
          <p>별나래지역아동센터는 사랑과 배움이 함께하는 공간입니다.</p>
        </div>
      </div>

      {/* 인사글 */}
      <div className="main2Contents">
        <h2>별나래지역아동센터 인사드립니다.</h2>
        <div className="contentWord">
          <pre>
            {`“코이의 법칙” 들어 보셨나요?

‘코이’라는 물고기의 삶은 아주 특이해요.
왜냐하면, 코이는 작은 어항에서는 작게 성장하고,
강물에서는 대어가 되는 신기한 물고기에요.

그것은 바로,
주변 환경에 따라, 생각의 크기에 따라
엄청난 결과의 차이를 만들 수 있다는 ‘코이의 법칙’.

자신의 세상을 더 크게 바라보며
꿈을 키우며 함께 성장할 수 있도록
최선을 다하는 별나래지역아동센터가 되겠습니다.`}
          </pre>
        </div>
      </div>

      {/* 비전 */}
      <div className="mission-vision">
        <h3>🌟 우리의 비전</h3>
        <ul>
          <li>모든 아이가 행복하게 성장할 수 있는 환경 조성</li>
          <li>교육과 돌봄이 함께하는 지역 공동체 실현</li>
          <li>지속 가능한 사회적 협동조합 운영</li>
        </ul>
      </div>

      {/* 링크 버튼 */}
      <div className="link-buttons">
        <Link to="/program" className="link-btn">
          프로그램 보기
        </Link>
        <Link to="/inner" className="link-btn">
          센터 내부 보기
        </Link>
      </div>
    </section>
  );
};

export default StarHello;
