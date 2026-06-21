"use client";
import { useState } from "react";
import "./PreviewPanel.css";
import {
  FiMonitor,
  FiTablet,
  FiSmartphone,
  FiRefreshCw,
  FiExternalLink,
} from "react-icons/fi";

export default function PreviewPanel({ page = [] }) {
  const htmlFile = page.find((file) => file.name.endsWith(".html"));
  const cssFile = page.find((file) => file.name.endsWith(".css"));
  const jsFile = page.find((file) => file.name.endsWith(".js"));

  const [view, setView] = useState("desktop");

  const previewCode = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${cssFile?.code || ""}
        </style>
      </head>

      <body>
        ${htmlFile?.code || ""}

        <script>
          ${jsFile?.code || ""}
        <\/script>
      </body>
    </html>
  `;

  const getPreviewClass = () => {
    switch (view) {
      case "tablet":
        return "body-tab";
      case "mobile":
        return "body-mob";
      default:
        return "preview-body";
    }
  };

  return (
    <section className="preview-panel">
      <div className="preview-head">
        <div className="preview-title">
          <span></span>
          Live Preview
        </div>

        <div className="preview-actions">
          <button
            onClick={() => setView("desktop")}
            className={view === "desktop" ? "active" : ""}
          >
            <FiMonitor />
          </button>

          <button
            onClick={() => setView("tablet")}
            className={view === "tablet" ? "active" : ""}
          >
            <FiTablet />
          </button>

          <button
            onClick={() => setView("mobile")}
            className={view === "mobile" ? "active" : ""}
          >
            <FiSmartphone />
          </button>

          <button>
            <FiRefreshCw />
          </button>

          <button>
            <FiExternalLink />
          </button>
        </div>
      </div>

     <div className="preview-card">
  <div className={getPreviewClass()}>
    
    {/* Mobile Notch */}
    <div className="device-notch"></div>

    <iframe
      title="Live Preview"
      srcDoc={previewCode}
      className="preview-frame"
    />

    {/* Bottom Home Button */}
    <div className="device-home-btn"></div>

  </div>
</div>
    </section>
  );
}