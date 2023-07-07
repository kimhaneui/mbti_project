import { useEffect } from "react";
import "../login/login.scss"
import { Button } from "../../stories/Button";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();
    useEffect(() => {
   
    }, [])
    return (
      <>
      <div className="container">
        <div className="main">
        <div className="login-box">  
        <h2>프로필 사진</h2>
        <div>이미지</div>
        <div className="form-group">
          <label htmlFor="username">이메일</label>
          <input type="text" id="username" placeholder="이메일 입력" />
        </div>
        <div className="form-group">
          <label htmlFor="password">이름</label>
          <input type="password" id="password" placeholder="이름 입력" />
        </div>
        <div className="form-group">
          <label htmlFor="password">닉네임</label>
          <input type="password" id="password" placeholder="닉네임 입력" />
        </div>
        <div className="form-group">
          <label htmlFor="password">MBTI</label>
          <input type="password" id="password" placeholder="예시 - INFJ" />
        </div>
        <div className="form-group">
          <label htmlFor="password">한줄소개</label>
          <input type="password" id="password" placeholder="한줄소개 입력" />
        </div>
        <div className="joinBtn">
          <Button label="COME ON" backgroundColor="pink" onClick={() => navigate('/home')}></Button>
        </div>
       </div>
        </div>

      </div>
      
      </>
    );
  }