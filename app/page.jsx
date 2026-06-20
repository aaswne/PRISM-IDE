"use client";
import { useState, useRef, useEffect } from "react";

import Header from "@/app/components/Header/Header";
import SideBar from "@/app/components/SideBar/SideBar";
import EditorPanel from "@/app/components/EditorPanel/EditorPanel";
import PreviewPanel from "@/app/components/PreviewPanel/PreviewPanel";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const [newFile, setNewFile] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  const handleClick = () => {
    setShowInput(true);
  };

  const handleDelete = (itemsToDelete) => {
    setPage(page.filter((item) => item.id !== itemsToDelete));
  };

  const handleAddFile = () => {
    const newfile = {
      id: Date.now(),
      name: newFile,
    };

    setPage([...page, newfile]);
    setNewFile("");
    setShowInput(false);
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  const [page, setPage] = useState([
    {
      id: 1,
      name: "index.html",
      language: "html",
      code: "<h1>Hello World</h1>",
    },
    {
      id: 2,
      name: "style.css",
      language: "css",
      code: "body { background: #111; }",
    },
    {
      id: 3,
      name: "script.js",
      language: "javascript",
      code: "console.log('Hello');",
    },
  ]);

  const [activeFile, setActiveFile] = useState(1);
  return (
    <main className="app-shell">
      <Header />

      <section className="main-layout">
        <SideBar
          handleClick={handleClick}
          page={page}
          handleDelete={handleDelete}
          setNewFile={setNewFile}
          newFile={newFile}
          showInput={showInput}
          handleAddFile={handleAddFile}
          inputRef={inputRef}
          handlePreview={handlePreview}
          showPreview={showPreview}
        />

        <div className="workspace">
          <div className="top-workspace">
            <EditorPanel
              page={page}
              activeFile={activeFile}
              setActiveFile={setActiveFile}
              setPage={setPage}
              showPreview={showPreview}
            />
            {showPreview && <PreviewPanel page={page}/>} 
          </div>

          <Footer />
        </div>
      </section>
    </main>
  );
}
