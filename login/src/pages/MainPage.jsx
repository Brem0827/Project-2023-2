import React from 'react';
import Container from 'react-bootstrap/Container';
import '../css/MainPage.css'; // 스타일링을 위한 CSS 파일을 추가

const MainPage = () => {

  return (
    <Container className="mt-5">
      <h1 className="display-4">대림 메인 화면</h1>
      <p className="lead">간단한 레이아웃을 가진 블로그입니다.</p>

      {/* 광고 섹션 */}
      <div className="ad-section">
        <div className="ad-content">
          <h2 className="ad-title">✨ 대림 프리미엄</h2>
          <p className="ad-description">
            탁월한 블로깅 경험을 위한 프리미엄 서비스를 지금 체험하세요. 한 달 동안 무료로 이용 가능!
          </p>
          <button className="ad-button">무료 체험하기</button>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;