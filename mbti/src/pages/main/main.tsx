import { useEffect } from "react";
import "../main/main.scss"
import { Button } from "../../stories/Button";
import { useNavigate } from "react-router-dom";

export function MainPage() {
    const navigate = useNavigate();
    //추가적으로 구글 로그인 계정 기능 개발
    useEffect(() => {
   
    }, [])
    return (
      <>
      <div className="container">
        <div className="main">
            <div className="mbti-text">
                <h2>
                <span className="mbti-text red">M</span>
                <span className="mbti-text blue">B</span>
                <span className="mbti-text green">T</span>
                <span className="mbti-text orange">I</span>
                </h2>
                <span className="sm">verse</span>
            </div>
            <div className="btn">
                <Button label="JOIN" backgroundColor="#FFE2E7" onClick={() => navigate('/profile')}></Button>
            </div>
        </div>
      </div>
      </>
    );
  }