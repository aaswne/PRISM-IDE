"use client";
import { useState, useRef, useEffect } from "react";

import Header from "@/app/components/Header/Header";
import SideBar from "@/app/components/SideBar/SideBar";
import EditorPanel from "@/app/components/EditorPanel/EditorPanel";
import PreviewPanel from "@/app/components/PreviewPanel/PreviewPanel";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  const [page, setPage] = useState([]);
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
            <EditorPanel page={page} showPreview={showPreview} />
            {showPreview&&<PreviewPanel />}
          </div>

          <Footer />
        </div>
      </section>
    </main>
  );
}
