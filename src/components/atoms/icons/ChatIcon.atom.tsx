import React from 'react';
import { BaseIcon } from './BaseIcon.atom';

export const ChatIcon = (props: React.ComponentProps<typeof BaseIcon>) => (
  <BaseIcon {...props}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="27" 
      height="27" 
      viewBox="0 0 27 27" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="lucide lucide-message-circle"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  </BaseIcon>
);

export default ChatIcon;
