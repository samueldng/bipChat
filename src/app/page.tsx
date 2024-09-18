"use client"

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const openSidebar = () => setSidebarOpened(true) 
  const closeSidebar = () => setSidebarOpened(false)

  function handleClearConversations() {

  }

  function handleNewChat() {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray text-white">
      <Sidebar 
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
      </Sidebar>
      
      <section className="flex flex-col w-full">
        <Header 
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />
      </section>

    </main>
  )
}