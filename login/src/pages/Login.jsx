import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
	
  return (
    <div>
    <Header />
      <div className="Login">
        <h2 className="LoginTitle">로그인</h2>
          <form className="form" id="registerFrm" name="register-page" > <br />
            <input type="text" className="userId" name="userId"  placeholder="아이디" /> <br />
            <input type="password" className="userPW" name="userPW" placeholder="비밀번호"/> <br />
            <div style={{ textAlign: "center" }}>
              <input type="button" className="LoginBtn" value="로그인" />
              <Link to = "../agreement">
                <input type="button" className="joinBtn" value="회원가입" />
              </Link><br />
            </div>
        </form>
      </div>
      <Footer />
    </div>
  )
};

export default Login;