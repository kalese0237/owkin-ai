"use client";
import Link from 'next/link';
import { Button } from '@/components/atoms/buttons/Button.atom';
import { HistoryIcon } from '@/components/atoms/icons/HistoryIcon.atom';
import { SearchIcon } from '@/components/atoms/icons/SearchIcon.atom';
import { ChatIcon } from '@/components/atoms/icons/ChatIcon.atom';
import { UploadIcon } from '@/components/atoms/icons/UploadIcon.atom';
import { ProfileIcon } from '@/components/atoms/icons/ProfileIcon.atom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed bg-background top-0 left-0 h-screen p-4 flex flex-col items-center space-y-6 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}>
      {/* Logo/Home Icon with Chain Link */}
      <Link href="/" className="w-full flex justify-center">     
          <div className="w-6 h-6 flex items-center justify-center">
            <img 
              src="/k-favicon.png" 
              alt="Home" 
              className="w-full h-full object-contain"
            />
          </div>
      </Link>

      {/* Navigation Buttons */}
      <div className="flex flex-col h-full w-full">
        <nav className="flex-1 flex flex-col items-center space-y-2 w-full">
          <Link href="/history" className="w-full flex justify-center">
            <div className="h-12 w-12 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Button 
                variant="ghost"
                className="h-full w-full p-0 m-0 min-w-0 hover:bg-transparent"
              >
                <HistoryIcon size={24} />
                {isOpen && <span className="sr-only">History</span>}
              </Button>
            </div>
          </Link>

          <Link href="/search" className="w-full flex justify-center">
            <div className="h-12 w-12 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <Button 
                variant="ghost"
                className="h-full w-full p-0 m-0 min-w-0 hover:bg-transparent"
              >
                <SearchIcon size={24} />
                {isOpen && <span className="sr-only">Search</span>}
              </Button>
            </div>
          </Link>

          <Link href="/chat" className="w-full flex justify-center">
            <div className="h-12 w-12 rounded-lg bg-[var(--text-bg)] hover:bg-[var(--color-foreground)] flex items-center justify-center">
              <Button 
                variant="ghost"
                className="h-full w-full p-0 m-0 min-w-0 hover:bg-transparent"
              >
                <ChatIcon size={24} />
                {isOpen && <span className="sr-only">Chat</span>}
              </Button>
            </div>
          </Link>
        </nav>

        {/* Profile button at the bottom */}       
          <div className="h-12 w-12 rounded-full bg-[var(--color-foreground)] hover:bg-[var(--text-bg)] flex items-center justify-center">
            <Button 
              variant="ghost"
              className="h-full w-full p-0 m-0 min-w-0 hover:bg-transparent"
            >
              <ProfileIcon />
              <span className="sr-only">Profile</span>
            </Button>
          </div>       
      </div>
    </div>
  );
};

export default Sidebar;