import { useEffect, useState } from "react";

const MembershipList = () => {
  const [donors, setDonors] = useState([]);

  // 추후 실제 DB 연동 시 API 호출로 대체
  useEffect(() => {
    const sampleData = [
      { id: 1, name: "김지현", amount: "₩50,000", date: "2024-12-01" },
      { id: 2, name: "박민수", amount: "₩30,000", date: "2024-12-03" },
      { id: 3, name: "이서연", amount: "₩10,000", date: "2024-12-10" },
    ];
    setDonors(sampleData);
  }, []);

  return (
    <section className="membershipListSection">
      <div className="mainHead">
        <h3>후원자 리스트</h3>
      </div>

      <div className="mainHead2">
        <h4>여러분의 작은 후원으로 소중한 추억을 만들어 갑니다</h4>
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
          <h2>후원자 명단</h2>
          {donors.length > 0 ? (
            <table className="donorTable">
              <thead>
                <tr>
                  <th>번호</th>
                  <th>이름</th>
                  <th>후원금액</th>
                  <th>날짜</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor) => (
                  <tr key={donor.id}>
                    <td>{donor.id}</td>
                    <td>{donor.name}</td>
                    <td>{donor.amount}</td>
                    <td>{donor.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>현재 후원자 명단이 없습니다.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MembershipList;
