import React from "react";
import "./login.css";

import loginPicture from "../../assets/loginPicture.png";
import loginLogo from "../../assets/loginLogo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <img className="login-left-picture" src={loginPicture} alt="" />
        </div>

        <div className="login-right">
          <div className="login-right-top">
            <div className="login-logo-section">
              <img className="login-logo" src={loginLogo} alt="" />
            </div>

            <div className="login-right-section">
              <input type="email" placeholder="E-posta" />
              <input type="password" placeholder="Şifre" />
              <button type="submit">Giriş Yap</button>
            </div>

            <hr className="Hr"></hr>
            <a href="/forgotpassword">Şifreni mi Unuttun?</a>
          </div>

          <div className="login-right-bottom">
            <div className="login-right-bottom-signup">
              <span>Bir hesabın yok mu?</span>
              <a href="/register">
                <b>Kayıt Ol</b>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="login-footer">
          <ul className="login-footer-ul">
            <li>Meta</li>
            <li>Hakkında</li>
            <li>Blog</li>
            <li>İş Fırsatları</li>
            <li>Yardım</li>
            <li>API</li>
            <li>Gizlilik</li>
            <li>Koşullar</li>
            <li>Başlıca Hesaplar</li>
            <li>Konu Etiketleri</li>
            <li>Konumlar</li>
            <li>Instagram Lite</li>
            <li>Kişi Yükleme ve Hesabı Olmayan Kişiler</li>
          </ul>
      </div>
    </div>
  );
};

export default Login;
