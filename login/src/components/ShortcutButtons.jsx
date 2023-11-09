import React from 'react';
import '../css/ShortcutButtons.css';

const ShortcutButtons = () => {
  const shortcuts = [
    "문의하기", "자주 묻는 질문", "도움말 센터", "결제 관련 문의",
    "계정 관련 문의", "기술 지원", "사용자 의견 보내기",
    "사용자 행동 신고", "개인정보 보호", "약관 및 정책", "사용자 의견 제출",
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