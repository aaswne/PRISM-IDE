"use client";

import dynamic from "next/dynamic";
import "./EditorPanel.css";
import { FiMoreHorizontal } from "react-icons/fi";

const MonacoEditor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false }
);

export default function EditorPanel({
  page,
  activeFile,
  setActiveFile,
  setPage,
  showPreview,
}) {
  const currentFile = page.find(
    (item) => item.id === activeFile
  );

  const handleCodeChange = (value) => {
    setPage((prev) =>
      prev.map((file) =>
        file.id === activeFile
          ? {
              ...file,
              code: value || "",
            }
          : file
      )
    );
  };

  return (
    <section
      className={
        showPreview
          ? "editor-panel"
          : "editor-panel-large"
      }
    >
      <div className="tabs">
        {page.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveFile(item.id)}
            className={`tab ${
              activeFile === item.id
                ? "active"
                : ""
            }`}
          >
            <span className="file-icon html">▣</span>
            {item.name}
          </button>
        ))}

        <FiMoreHorizontal className="tab-more" />
      </div>

      <div className="code-box">
        <MonacoEditor
          language={currentFile?.language || "html"}
          theme="vs-dark"
          value={currentFile?.code || ""}
          onChange={handleCodeChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "Fira Code",
            automaticLayout: true,
            wordWrap: "on",
            scrollBeyondLastLine: false,
            padding: {
              top: 20,
            },
          }}
        />
      </div>
    </section>
  );
}