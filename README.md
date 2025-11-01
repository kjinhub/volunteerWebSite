# 🌟 별나래 지역아동센터 웹사이트 (React 리뉴얼 프로젝트)

별나래 사회적협동조합이 운영하는 **별나래 지역아동센터**의 공식 웹사이트 리뉴얼 프로젝트입니다.  
기존 HTML/CSS 기반 페이지를 React 환경으로 이관하여 유지보수성과 확장성을 강화했습니다.

---

## 📘 프로젝트 개요

- **프로젝트명:** 봉사 활동 및 지역아동센터 홈페이지  
- **개발 목적:** 정적 HTML을 React SPA로 리뉴얼하여 일관된 UI/UX 제공  
- **주요 기능:**  
  - 별나래 아동센터 소개 및 인사글  
  - 월별 프로그램 및 활동 사진  
  - 식단표, 출결안내, 환경교육, 후원 안내 페이지  
  - 회원가입/로그인 기능 기본 폼 구축  

---

## 🏗️ 기술 스택

| 분야 | 기술 |
|------|------|
| Frontend Framework | React (Vite 기반) |
| Styling | CSS3, Flex/Grid Layout |
| Language | JavaScript (ES6+) |
| Version Control | Git / GitHub |
| API | Naver Map API (길찾기, 위치 표시) |

---


```markdown
## 📂 폴더 구조 (HTML 기반)

plaintext
volunteerWebSite/
│
├── index.html                # 메인 페이지
├── starHello.html            # 인사글 (별나래 소개)
├── inner.html                # 내부 시설 소개
├── program.html              # 프로그램 안내
├── programPics.html          # 프로그램 활동 사진
├── absence.html              # 출결 안내
├── activity.html             # 월별 활동 사진
├── mealSchedule.html         # 월별 식단표
├── envirmentEdu.html         # 환경교육 안내
├── env1.html                 # 환경교육 추가 페이지
├── etc.html                  # 기타 안내
├── membership.html           # 후원 안내
├── membershipList.html       # 후원자 리스트
├── Way.html                  # 오시는 길 (네이버지도)
├── login.html                # 로그인 페이지
├── signUp.html               # 회원가입 페이지
├── css/                      # 각 HTML 전용 스타일 시트
└── img/                      # 이미지 및 아이콘 리소스
```
---

## 🎨 주요 섹션 구성

### 1️⃣ `index.html`
- 홈페이지 메인
- 센터 소개, 인사글, 프로그램, 활동 사진, 후원 안내 링크 포함

### 2️⃣ `starHello.html`
- “코이의 법칙”을 주제로 한 별나래 센터 철학과 인사글

### 3️⃣ `program.html` / `programPics.html`
- 프로그램 소개 및 활동 사진 (보드게임, 악기연주, 미술활동, 야외활동)

### 4️⃣ `envirmentEdu.html` / `env1.html`
- 커피박·양말목을 활용한 업사이클링 환경교육 내용

### 5️⃣ `membership.html`
- 후원금, 물품, 봉사 관련 안내 및 계좌정보

### 6️⃣ `Way.html`
- 네이버 지도 API 기반 위치 표시 및 길찾기 버튼 제공

---


🧠 향후 개선 계획

🔄 React Router로 완전한 SPA 전환

🗃️ Firebase / Supabase 연동으로 회원 데이터 저장

🧍 관리자 페이지 추가 (출석 관리, 식단표 등록 등)

💬 후원자 리스트 DB 연동

📜 라이선스

본 프로젝트는 비영리 목적으로 제작된 교육용/홍보용 웹사이트이며,
이미지 및 텍스트 저작권은 별나래 사회적협동조합에 있습니다.
