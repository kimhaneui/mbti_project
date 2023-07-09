import { useEffect } from "react";
import "../profile/profile.scss"
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
    const navigate = useNavigate();
    useEffect(() => {
   
    }, [])
    return (
      <>
      <div className="container">
        <div className="profileBox">
       <img src="./" alt="" />
       <div className="textBox">
        <h2>끼순이왔어</h2>
        <span>INFJ</span>
        <p>사람과 관련된 뛰어난 통찰력을 가지고 있는 사람들</p>
        <img src="./" alt="" />
       </div>
       <ul>
        <li>
          <span>email@com</span>
        </li>
        <li>
          <span>Introduce</span>
          <span>안녕하세요 인어공주 입니다.</span>
        </li>
       </ul>
        </div>

      </div>
      
      </>
    );
  }