import "./PreviewPanel.css";
import {
  FiMonitor,
  FiTablet,
  FiSmartphone,
  FiRefreshCw,
  FiExternalLink,
} from "react-icons/fi";

export default function PreviewPanel({ page = [] }) {
  const htmlFile = page.find((file) =>
    file.name.endsWith(".html")
  );

  const cssFile = page.find((file) =>
    file.name.endsWith(".css")
  );

  const jsFile = page.find((file) =>
    file.name.endsWith(".js")
  );

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

  return (
    <section className="preview-panel">
      <div className="preview-head">
        <div className="preview-title">
          <span></span>
          Live Preview
        </div>

        <div className="preview-actions">
          <button className="active">
            <FiMonitor />
          </button>

          <button>
            <FiTablet />
          </button>

          <button>
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

      <div className="preview-body">
        <iframe
          title="Live Preview"
          srcDoc={previewCode}
          className="preview-frame"
        />
      </div>
    </section>
  );
}