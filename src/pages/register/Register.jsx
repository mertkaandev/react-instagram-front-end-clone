import React from "react";
import "./register.css";

import registerlogo from "../../assets/loginLogo.png";

const Register = () => {
  return (
    <div className="register">
      <div className="register-wrapper">

        <div className="register-top-wrapper">
          <div className="register-top-logo">
            <img className="register-logo" src={registerlogo} alt="" />
            <span>
              Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.
            </span>
          </div>

          <div className="register-top-inputs">
            <input type="text" placeholder="İsim" />
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="text" placeholder="E-posta" />
            <input type="text" placeholder="Şifre" />
          </div>

          <div className="register-top-bottom">
            <span className="bottom-span-1">
              Hizmetimizi kullanan kişiler senin iletişim bilgilerini
              Instagram'a yüklemiş olabilir. <br></br>{" "}
              <b>Daha Fazla Bilgi Al</b>
            </span>
            
            <span className="bottom-span-2">
              Kaydolarak,{" "}
              <b>Koşullarımızı, Gizlilik İlkemizi ve Çerezler İlkemizi</b> kabul
              etmiş olursun.
            </span>

            <button className="register-bottom-button">Kayıt Ol</button>
          </div>
        </div>

        <div className="register-bottom-wrapper">
          Hesabın var mı? <a href="login"><b>Giriş yap</b></a>  
        </div>
      </div>
    </div>
  );
};

export default Register;
