import React, { useState } from 'react';
import axios from 'axios';
import '../css/SignUp.css'
import ScrollHeader from '../components/ScrollHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SignUp() {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error] = useState(null);

  const handleLoginAndSubmit = (event) => {
    event.preventDefault();
    
    // 유효성 검사를 수행합니다.
    const errorMessage = validateInputs();
    if (errorMessage) {
      alert(errorMessage); // 에러 메시지를 alert 창으로 띄웁니다.
      return;
    }
    
    axios.post('/signup', {username, useremail, password})
      .then((response) => {
        if (response.status === 200) {
          window.location.href = '/';
        } else {
        // 로그인 실패
        alert('잘못된 사용자 이름 또는 비밀번호입니다.');
      }
    });
  };
  
  const validateInputs = () => {
    // text1의 유효성 검사
    if (!username || username.length < 4 || username.length > 16 || !/^[a-zA-Z0-9]+$/.test(username)) {
      return '사용자 이름은 4글자 이상, 16글자 이하, 영문자와 숫자만 포함해주세요.';
    }
    
    // text2의 유효성 검사
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(useremail)) {
      return '사용자 이메일을 이메일 형식으로 입력해주세요.';
    }
    
    // text3의 유효성 검사
    if (!password || password.length < 4 || password.length > 16 || !/^[a-zA-Z0-9]+$/.test(password)) {
      return '사용자 비밀번호는 4글자 이상, 16글자 이하, 영문자와 숫자만 포함해주세요.';
    }
  
    if (password !== password2) {
      return "비밀번호가 일치하지 않습니다.";
    }

    // 모든 입력값이 유효한 경우 null을 반환합니다.
    return null;
  };

  return (
    <div>
      <Header />
      <ScrollHeader />
      <div className="signup-container">
        <form className="signup-form"  onSubmit={handleLoginAndSubmit}>
          <div className="signup-form-group">
              <h2 className="welcome">환영합니다!</h2>
              <h6 className='signup-subtitle'>회원가입 페이지 입니다.</h6>
              <label>
                  <input type="text" className='SignUptxt' id="username" name="username" value={username} placeholder="이름(필수)" onChange={(event) => setUsername(event.target.value)} />
              </label><br/>
              <label>
                  <input type="text" className='SignUptxt' id="useremail" name="useremail" value={useremail} placeholder="이메일(필수)" onChange={(event) => setUseremail(event.target.value)} />
              </label><br/>
              <label>
                  <input type="password" className='SignUptxt' id="password" name="password" value={password} placeholder="비밀번호(필수)" onChange={(event) => setPassword(event.target.value)}  />
              </label><br/>
              <label>
                  <input type="password" className='SignUptxt' id="password2" name="password2" value={password2} placeholder="비밀번호 재확인(필수)" onChange={(event) => setPassword2(event.target.value)} />
              </label><br/>
          </div>
          <button type="submit" class="btn-signup">가입하기</button>
        </form>
        {error && <p>{error}</p>}
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;