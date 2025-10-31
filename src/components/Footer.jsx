const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <h3 className="footer-title">
        <a
          href="https://search.naver.com/search.naver?query=별나래지역아동센터"
          target="_blank"
          rel="noopener noreferrer">
          별나래지역아동센터
        </a>
      </h3>

      <div className="footer-content">
        <div>
          <span>별나래사회적협동조합 손정아</span>
          <span>경상남도 진주시 돗골로 118, 3층</span>
          <span>사업자등록번호: 293-82-00608</span>
          <span>전화번호: 010-6681-1364</span>
          <span>
            이메일: <a href="mailto:sja0109@naver.com">sja0109@naver.com</a> |{" "}
            <a href="#">신고하기</a>
          </span>
        </div>
      </div>

      <div className="footer-icons">
        <a href="#">
          <img src="/img/blog-icon.png" alt="블로그" />
        </a>
        <a href="#">
          <img src="/img/instagram-icon.png" alt="인스타그램" />
        </a>
        <a href="#">
          <img src="/img/facebook-icon.png" alt="페이스북" />
        </a>
      </div>

      <div className="footer-bottom">
        <p>ⓒ NAVER Corp.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
