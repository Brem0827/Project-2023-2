import React from 'react';

const ShortcutButtons = () => {
  const shortcuts = [
    "문의하기", "자주 묻는 질문", "도움말 센터", "제품 문의", "결제 관련 문의",
    "계정 관련 문의", "기술 지원", "보안 문제 신고", "신고 및 정책", "사용자 의견 보내기",
    "채용 정보", "프레스 및 미디어", "사용자 행동 신고", "개인정보 보호", "약관 및 정책",
    "사용자 의견 제출", "Google Cloud 지원", "G Suite 도움말", "Google Workspace 포럼",
    "Google Ads 고객센터"
  ];

  return (
    <div className="shortcut-buttons">
      {shortcuts.map((shortcut, index) => (
        <button key={index}>{shortcut}</button>
      ))}
    </div>
  );
}

export default ShortcutButtons;