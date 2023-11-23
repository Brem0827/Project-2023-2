import { useState } from "react";
import '../css/agreement.css';
import ScrollHeader from "../components/ScrollHeader";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function App() {
    const [allAgreed, setAllAgreed] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [agreements, setAgreements] = useState({

    termsAgreed: false, // 사용자가 약관에 동의했는지를 나타냅니다.
    personalInfoAgreed: false, // 사용자가 개인 정보를 공유하기에 동의했는지를 나타냅니다.
    provisionAgreed: false, // 사용자가 일부 조항이나 조건에 동의했는지를 나타냅니다.
    locationAgreed: false, // 사용자가 위치 정보를 공유하기에 동의했는지를 나타냅니다.
    eventAlarmAgreed: false, // 사용자가 이벤트와 관련된 알림을 받기에 동의했는지를 나타냅니다.
    serviceAlarmAgreed: false, // 사용자가 서비스와 관련된 알림을 받기에 동의했는지를 나타냅니다.
});

const handleTermsClick = () => {
    setShowTerms(true);
  };

  const handleCloseModal = () => {
    setShowTerms(false);
  };

const handleAgreementChange = (event) => {
    const { name, checked } = event.target;
    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every(
    (value) => value === true
    );
    setAllAgreed(allChecked);
};

const handleAllAgreementChange = (event) => {
    const { checked } = event.target;
    setAgreements((prevAgreements) =>
    Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
            ...newAgreements,
            [agreementKey]: checked,
            }),
        {}
    )
    );
    setAllAgreed(checked);
};
return (
    <div>
        <Header />
        <ScrollHeader />
    <div className="agreement">
        <label className="agreementTitle">회원 정보 입력 및 이용약관 동의</label>
        <ul>
    <li>
        <label htmlFor="agree_check_used">
            <input
                type="checkbox"
                className="checkbox"
                id="agree_check_used"
                name="termsAgreed"
                required
                checked={agreements.termsAgreed}
                onChange={handleAgreementChange}
            />
            [필수] 이용약관 동의</label>
            <button onClick={handleTermsClick}>약관 보기</button>
            {showTerms && (
                <div className="modal">
                <div className="modal-content">
                    <h2>이용약관 동의(필수)</h2>
                    <p>이용 약관 내용</p>
                    <button className="modal-close-button" onClick={handleCloseModal}>
                        확인
                    </button>
                </div>
                </div>
            )}
            </li>
        <li>
        <label htmlFor="agree_check_info">
            <input
                type="checkbox"
                className="checkbox"
                id="agree_check_info"
                name="personalInfoAgreed"
                required
                checked={agreements.personalInfoAgreed}
                onChange={handleAgreementChange}
            />
            [필수] 개인정보 이용 수집 방침
        </label>
        <button onClick={handleTermsClick}>약관 보기</button>
            {showTerms && (
                <div className="modal">
                <div className="modal-content">
                    <h2>개인정보 이용 수집 방침</h2>
                    <p>개인정보 이용 수집 방침 내용</p>
                    <button className="modal-close-button" onClick={handleCloseModal}>
                        확인
                    </button>
                </div>
                </div>
            )}
    </li>
    <li>
        <label htmlFor="agree_check_info_other">
            <input
                type="checkbox"
                className="checkbox"
                id="agree_check_info_other"
                name="provisionAgreed"
                required
                checked={agreements.provisionAgreed}
                onChange={handleAgreementChange}
            />
            [필수] 개인정보 제 3자 제공 동의
        </label>
        <button onClick={handleTermsClick}>약관 보기</button>
            {showTerms && (
                <div className="modal">
                <div className="modal-content">
                    <h2>개인정보 제 3자 제공 동의</h2>
                    <p>개인정보 제 3자 제공 동의 내용</p>
                    <button className="modal-close-button" onClick={handleCloseModal}>
                        확인
                    </button>
                </div>
                </div>
            )}
    </li>
    <li>
        <label htmlFor="agree_check_pos">
            <input
                type="checkbox"
                className="checkbox"
                id="agree_check_pos"
                name="locationAgreed"
                required
                checked={agreements.locationAgreed}
                onChange={handleAgreementChange}
            />
            [필수] 위치정보 동의 약관</label>
            <button onClick={handleTermsClick}>약관 보기</button>
            {showTerms && (
                <div className="modal">
                <div className="modal-content">
                    <h2>위치정보 동의 약관</h2>
                    <p>위치정보 동의 약관 내용</p>
                    <button className="modal-close-button" onClick={handleCloseModal}>
                        확인
                    </button>
                </div>
            </div>
            )}
    </li>
    <li>
        <label htmlFor="agree_check_event_receive">
            <input
                type="checkbox"
                className="checkbox"
                id="agree_check_event_receive"
                name="eventAlarmAgreed"
                checked={agreements.eventAlarmAgreed}
                onChange={handleAgreementChange}
            />
            [선택] 이벤트 및 혜택 알림 수신 동의
        </label>
        <button onClick={handleTermsClick}>약관 보기</button>
            {showTerms && (
                <div className="modal">
                <div className="modal-content">
                    <h2>이벤트 및 혜택 알림 수신 동의</h2>
                    <p>이벤트 및 혜택 알림 수신 동의 내용</p>
                    <button className="modal-close-button" onClick={handleCloseModal}>
                        확인
                    </button>
                </div>
            </div>
            )}
    </li>
    <li>
    <label htmlFor="agree_check_push">
        <input
            type="checkbox"
            className="checkbox"
            id="agree_check_push"
            name="serviceAlarmAgreed"
            checked={agreements.serviceAlarmAgreed}
            onChange={handleAgreementChange}
        />
        [선택] 서비스 알림 수신 동의
    </label>
    <button onClick={handleTermsClick}>약관 보기</button>
            {showTerms && (
                <div className="modal">
                <div className="modal-content">
                    <h2>서비스 알림 수신 동의</h2>
                    <p>서비스 알림 수신 동의 내용</p>
                    <button className="modal-close-button" onClick={handleCloseModal}>
                        확인
                    </button>
                </div>
            </div>
            )}
    </li>
    <li>
        <label htmlFor="agree_check_all">
            <input
                type="checkbox"
                className="checkbox"
                id="agree_check_all"
                name="agree_check_all"
                checked={allAgreed}
                onChange={handleAllAgreementChange}
            />
            이용약관 전체동의</label>
        </li>
    </ul>
    <div style={{ textAlign: "center" }}>
            <Link to = "../">
            <input type="button" className="CancelBtn" value="취소" />
            </Link>
            <Link to = "../SignUp">
            <input type="button" className="AgreeBtn" value="동의" />
            </Link><br />
        </div>
    </div>
</div>
);
}
