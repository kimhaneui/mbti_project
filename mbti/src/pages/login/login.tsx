import { useEffect } from "react";
import "../login/login.scss"
import { Button } from "../../stories/Button";
import { useNavigate } from "react-router-dom";
import { Input } from "../../stories/Input";

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
        <div className="imgBox"><img src="./" alt="" /></div>
        <div className="form-group">
          <label htmlFor="username">이메일</label>
          <Input type="text" id="username" placeholder="이메일 입력"></Input>
        </div>
        <div className="form-group">
          <label htmlFor="password">이름</label>
          <Input type="text" id="username" placeholder="이름 입력"></Input>
        </div>
        <div className="form-group">
          <label htmlFor="password">닉네임</label>
          <Input type="text" id="username" placeholder="닉네임 입력"></Input>
        </div>
        <div className="form-group">
          <label htmlFor="password">MBTI</label>
          <Input type="text" id="username" placeholder="MBTI 입력 (예: INFJ)"></Input>
        </div>
        <div className="form-group">
          <label htmlFor="password">한줄소개</label>
          <Input type="text" id="username" placeholder="한줄소개 입력"></Input>
        </div>
        <div className="joinBtn">
          <Button label="COME ON" backgroundColor="#FFE2E7" onClick={() => navigate('/home')}></Button>
        </div>
       </div>
        </div>
      </div>
      
      </>
    );
  }