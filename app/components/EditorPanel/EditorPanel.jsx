"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "./EditorPanel.css";
import { FiMoreHorizontal } from "react-icons/fi";

const MonacoEditor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false }
);

export default function EditorPanel({page}) {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Prism</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="container">
    <h1 class="title">Hello, World! 👋</h1>
    <p class="subtitle">
      Edit code and see the result in real time.
    </p>
    <button id="btn" class="btn">
      Click Me
    </button>
  </div>

  <script src="script.js"></script>
</body>
</html>`);

  return (
    <section className="editor-panel">
      <div className="tabs">
        {page.map((item)=>(<button key={item.id} className="tab active">
          <span className="file-icon html">▣</span>
          item.name
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
