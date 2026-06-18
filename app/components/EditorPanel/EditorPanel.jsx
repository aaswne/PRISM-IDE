"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "./EditorPanel.css";
import { FiMoreHorizontal } from "react-icons/fi";

const MonacoEditor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false }
);

export default function EditorPanel({page,showPreview}) {
  const [code, setCode] = useState();

  return (
    <section className={showPreview?"editor-panel":"editor-panel-large"}>
      <div className="tabs">
        {page.map((item)=>(<button key={item.id} className="tab active">
          <span className="file-icon html">▣</span>
         { item.name}
        </button>))}


        <FiMoreHorizontal className="tab-more" />
      </div>

      <div className="code-box">
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
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
