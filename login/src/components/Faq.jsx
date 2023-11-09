import React from 'react';
import '../css/Faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>자주 묻는 질문</h2>
      <ul>
        <li>
          <h3>Q: 어떻게 연락할 수 있나요?</h3>
          <p>A: 연락처는 홈페이지의 '문의하기'에서 확인할 수 있습니다.</p>
        </li>
        <li>
          <h3>Q: 서비스 이용 방법을 알고 싶어요.</h3>
          <p>A: FAQ에서 서비스 이용 방법에 대한 정보를 확인하세요.</p>
        </li>
      </ul>
    </div>
  );
}

export default Faq;