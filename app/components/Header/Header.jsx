import "./Header.css";
import { FiCode, FiChevronDown, FiDownload, FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <FiCode className="logo-icon" />
        <h1>Code <span>Writer</span></h1>
      </div>

      <div className="header-center">
        <button className="project-btn">
          My Project <FiChevronDown />
        </button>

        <div className="saved-status">
          <span></span>
          Saved
        </div>
      </div>

      <div className="header-right">
        <button className="theme-btn">
          <FiMoon />
          <FiSun />
        </button>

        <button className="share-btn">Share</button>

        <button className="download-btn">
          <FiDownload />
          Download
        </button>

        <div className="avatar">
          <img src="https://i.pravatar.cc/100" alt="profile" />
        </div>
      </div>
    </header>
  );
}