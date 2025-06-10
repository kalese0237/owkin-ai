import React from 'react';
import { BaseIcon } from './BaseIcon.atom';

export const UploadIcon = (props: React.ComponentProps<typeof BaseIcon>) => (
  <BaseIcon {...props}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-arrow-up-icon lucide-arrow-up"
    >
      <path d="m5 12 7-7 7 7"/>
      <path d="M12 19V5"/>
    </svg>
  </BaseIcon>
);

export default UploadIcon;
