import "./SideBar.css";
import { useState  } from "react";
import { FiX } from "react-icons/fi";
import {
  FiPlus,
  FiSettings,
  FiTerminal,
  FiPlay,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCommand,
} from "react-icons/fi";

export default function SideBar({
  handleClick,
  page,
  handleDelete,
  showInput,
  newFile,
  setNewFile,
  handleAddFile,
  inputRef,
  handlePreview,
  showPreview
}) {
  const [active, setActive] = useState(false);


  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <aside className="sidebar">
      <div>
        <div className="side-head" >
          <p>EXPLORER</p>
          <FiPlus />
        </div>

        <p className="side-title">FILES</p>

        <div className="div">
          {showInput && (
            <input
               ref={inputRef}
              value={newFile}
              onChange={(e) => setNewFile(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAddFile();
                }
              }}
              placeholder="index.html"
              className="file-input "
              type="text"
            />
          )}
          {page.map((item) => (
            <div
              onClick={() => handleActive(item.id)}
              key={item.id}
              className={`side-item ${active === item.id ? "active" : ""}`}
            >
              <span className="file-icon html">▣</span>
              {item.name}
              <FiX
                className="active-dot"
                onClick={() => handleDelete(item.id)}
              />{" "}
            </div>
          ))}
        </div>

        <p className="side-title">TOOLS</p>

        <div onClick={handlePreview} className={showPreview?"side-item active":"side-item"}>
          <FiPlay />
          Live Preview
        </div>

        <div className="side-item">
          <FiTerminal />
          Console
        </div>

        <div className="side-item">
          <FiCommand />
          Terminal
        </div>

        <p className="side-title">SETTINGS</p>

        <div className="side-item">
          <FiSettings />
          Preferences
        </div>

        <div className="side-item">
          <FiCommand />
          Keyboard Shortcuts
        </div>
      </div>

      <div>
        <div className="pro-card">
          <h4>⚡ Unlock Pro</h4>
          <p>Get more features and cloud sync</p>
          <button>Upgrade Now</button>
        </div>

        <div className="socials">
          <FiTwitter />
          <FiLinkedin />
          <FiGithub />
          <FiSettings />
          <span>≪</span>
        </div>
      </div>
    </aside>
  );
}
