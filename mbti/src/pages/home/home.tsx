import { useEffect } from "react";
import "../home/home.scss"
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const navigate = useNavigate();
    useEffect(() => {
   
    }, [])
    return (
      <>
      <div className="container">
      <div className="logo">
        <img src="logo" alt="logo" />
      </div>
      <div className="facebook-feed">
    <div className="left-panel">
      <div className="profile">
      <div className="profile-picture">
        <img src="profile-picture.jpg"></img>
        <h3 className="profile-name">John Doe</h3>
      </div>
      <div className="popular-posts">
        <h3 className="section-title">Popular Posts</h3>
        <ul className="post-list">
          <li className="post-item">
            <a href="#" className="post-link">Post 1</a>
          </li>
          <li className="post-item">
            <a href="#" className="post-link">Post 2</a>
          </li>
          <li className="post-item">
            <a href="#" className="post-link">Post 3</a>
          </li>
        </ul>
      </div>
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