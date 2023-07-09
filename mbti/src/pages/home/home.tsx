import { useEffect, useState } from "react";
import "../home/home.scss"
import ProfileModal from "../../modal/profile-modal";

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    const edit = "../../image/edit.png"
    useEffect(() => {
   
    }, [])
    return (
      <>
      
      <div className="container">
      {isModalOpen && <ProfileModal closeModal={closeModal} />}
      <div className="logo">
        <img src="logo" alt="logo" />
      </div>
      <div className="editBox">
        <div className="textBox">
        <img src={edit} alt="EDIT" />
        <span>너의 엠비티아이에 대해서 알려줘 :)</span>
        <a onClick={openModal}><img src={edit} alt="EDIT" /></a>
        </div>
      </div>
      <div className="facebook-feed">
    <div className="left-panel">
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
    <div className="center-panel">
      <div className="post">
        <div className="post-header">
          <img className="profile-picture" src="profile-picture.jpg"></img>
          <div className="user-info">
            <span className="username">John Doe</span>
            <span className="timestamp">July 1, 2023</span>
          </div>
        </div>
        <div className="post-content">
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img className="image" src="post-image.jpg"></img>
          <video className="video" src="post-video.mp4" controls></video>
        </div>
        <div className="post-footer">
          <div className="likes">42 Likes</div>
          <div className="actions">
            <div className="action">
              <span className="icon">⇧</span>
              <span className="text">Like</span>
            </div>
            <div className="action">
              <span className="icon">✍</span>
              <span className="text">Comment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="right-panel">
      <div className="popular-feed">
        <h1 className="section-title">Popular Feed</h1>
        <ul className="feed-list">
          <li className="feed-item">
            <a href="#" className="feed-link">Feed 1</a>
          </li>
          <li className="feed-item">
            <a href="#" className="feed-link">Feed 2</a>
          </li>
          <li className="feed-item">
            <a href="#" className="feed-link">Feed 3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
      </div>


      </>
    );
  }