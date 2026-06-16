import "./PreviewPanel.css";
import { FiMonitor, FiTablet, FiSmartphone, FiRefreshCw, FiExternalLink } from "react-icons/fi";

export default function PreviewPanel() {
  return (
    <section className="preview-panel">
      <div className="preview-head">
        <div className="preview-title">
          <span></span>
          Live Preview
        </div>

        <div className="preview-actions">
          <button className="active"><FiMonitor /></button>
          <button><FiTablet /></button>
          <button><FiSmartphone /></button>
          <button><FiRefreshCw /></button>
          <button><FiExternalLink /></button>
        </div>
      </div>

      <div className="preview-body">
        <div className="preview-card">
          <div className="preview-logo">&lt;/&gt;</div>
          <h2>Hello, World! 👋</h2>
          <p>Edit code and see the result in real time.</p>
          <button>Click Me</button>
        </div>
      </div>
    </section>
  );
}