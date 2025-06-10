"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/molecules/sidebar/Sidebar.molecule';
import WelcomeMolecule from '@/components/molecules/welcome/Welcome.molecule';
import InputMolecule from '@/components/molecules/input/Input.molecule';
import Header from '@/components/molecules/header/Header.molecule';

export default function HomeTemplate() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSend = (message: string) => {
    console.log('Message sent:', message);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />
        
        {/* Main Content */}
        <main 
          className={`transition-all duration-300 flex-1 flex flex-col ${
            isSidebarOpen ? 'ml-64' : 'ml-20'
          }`}
        >
          <div className="flex-1 p-3 overflow-auto">
            <div className="bg-foreground min-h-full rounded-3xl shadow-sm flex flex-col">
              <Header />
              <div className="p-6 mt-10"> 
                <WelcomeMolecule />  
              </div>
              <div className="p-6">
                <InputMolecule onSend={handleSend} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
