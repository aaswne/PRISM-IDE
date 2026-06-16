"use client";
import { useState } from "react";

import Header from "@/app/components/Header/Header";
import SideBar from "@/app/components/SideBar/SideBar";
import EditorPanel from "@/app/components/EditorPanel/EditorPanel";
import PreviewPanel from "@/app/components/PreviewPanel/PreviewPanel";
import Footer from "@/app/components/Footer/Footer";

export default function Home() {
  const [page, setPage] = useState<any[]>([]);

  const handleClick = () => {
    const newfile = {
      id: Date.now(),
      name: `newfile ${page.length + 1}`,
    };

    setPage([...page, newfile]);
  };

  const handleDelete = (itemsToDelete: number) => {
    setPage(page.filter((item) => item.id !== itemsToDelete));
  };
  return (
    <main className="app-shell">
      <Header />

      <section className="main-layout">
        <SideBar
          handleClick={handleClick}
          page={page}
          handleDelete={handleDelete}
        />

        <div className="workspace">
          <div className="top-workspace">
            <EditorPanel page={page}/>
            <PreviewPanel />
          </div>

          <Footer />
        </div>
      </section>
    </main>
  );
}
